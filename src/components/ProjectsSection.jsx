import { useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import TiltCard from './TiltCard'
import { Motion, useReducedMotion } from '../utils/motion'
import {
  extractGithubUsername,
  isPortfolioRepository,
  isProfileRepository,
  mapGithubRepoToProject,
  normalizeFallbackProjects,
} from '../utils/githubProjects'

const PROJECT_CACHE_DURATION_MS = 1000 * 60 * 30

function getProjectsCacheKey(username) {
  return `portfolio:github-projects:${username}`
}

function readProjectsCache(username) {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const rawCache = window.localStorage.getItem(getProjectsCacheKey(username))
    if (!rawCache) {
      return []
    }

    const parsedCache = JSON.parse(rawCache)
    if (!Array.isArray(parsedCache.items) || typeof parsedCache.timestamp !== 'number') {
      return []
    }

    if (Date.now() - parsedCache.timestamp > PROJECT_CACHE_DURATION_MS) {
      return []
    }

    return parsedCache.items
  } catch {
    return []
  }
}

function writeProjectsCache(username, projects) {
  if (typeof window === 'undefined') {
    return
  }

  try {
    window.localStorage.setItem(
      getProjectsCacheKey(username),
      JSON.stringify({
        timestamp: Date.now(),
        items: projects,
      }),
    )
  } catch {
    // Cache pode falhar em modo privado; o fluxo continua sem bloquear.
  }
}

function formatSyncTimestamp(date = new Date()) {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(date)
}

function ProjectsSection({ projects, githubUrl }) {
  const fallbackProjects = useMemo(() => normalizeFallbackProjects(projects), [projects])
  const [projectItems, setProjectItems] = useState(fallbackProjects)
  const [syncMessage, setSyncMessage] = useState('Sincronizando projetos do GitHub...')
  const [currentIndex, setCurrentIndex] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const githubUsername = extractGithubUsername(githubUrl)
    if (!githubUsername) {
      setSyncMessage('Nao foi possivel identificar o usuario do GitHub. Exibindo projetos locais.')
      setProjectItems(fallbackProjects)
      return undefined
    }

    const cachedProjects = readProjectsCache(githubUsername)
    if (cachedProjects.length) {
      setProjectItems(cachedProjects)
      setSyncMessage(`Exibindo versao em cache (${formatSyncTimestamp()}).`)
    }

    const abortController = new AbortController()

    async function syncProjects() {
      try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated`, {
          signal: abortController.signal,
          headers: {
            Accept: 'application/vnd.github+json',
          },
        })

        if (!response.ok) {
          throw new Error(`Falha na API do GitHub (${response.status})`)
        }

        const repositories = await response.json()
        const eligibleRepositories = repositories
          .filter((repository) => !repository.fork && !repository.archived)
          .filter((repository) => !isPortfolioRepository(repository.name))
          .filter((repository) => !isProfileRepository(repository.name, githubUsername))
          .sort((first, second) => {
            const firstDate = new Date(first.pushed_at || first.updated_at || 0).getTime()
            const secondDate = new Date(second.pushed_at || second.updated_at || 0).getTime()
            return secondDate - firstDate
          })

        const syncedProjects = eligibleRepositories.map((repository, index) => mapGithubRepoToProject(repository, index))

        if (!syncedProjects.length) {
          setProjectItems(cachedProjects.length ? cachedProjects : fallbackProjects)
          setSyncMessage(
            cachedProjects.length
              ? 'Nenhum repositorio elegivel encontrado no GitHub. Mantendo versao em cache.'
              : 'Nenhum repositorio elegivel encontrado no GitHub. Exibindo projetos locais.',
          )
          return
        }

        setProjectItems(syncedProjects)
        writeProjectsCache(githubUsername, syncedProjects)
        setSyncMessage(`Sincronizado com GitHub em ${formatSyncTimestamp()}.`)
      } catch (error) {
        if (error.name === 'AbortError') {
          return
        }

        if (cachedProjects.length) {
          setProjectItems(cachedProjects)
          setSyncMessage('Nao foi possivel sincronizar agora. Exibindo ultima versao em cache.')
          return
        }

        setProjectItems(fallbackProjects)
        setSyncMessage('Nao foi possivel sincronizar agora. Exibindo projetos locais.')
      }
    }

    syncProjects()

    return () => {
      abortController.abort()
    }
  }, [githubUrl, fallbackProjects])

  useEffect(() => {
    if (!projectItems.length) {
      setCurrentIndex(0)
      return
    }

    if (currentIndex > projectItems.length - 1) {
      setCurrentIndex(0)
    }
  }, [currentIndex, projectItems.length])

  useEffect(() => {
    if (projectItems.length <= 1 || shouldReduceMotion) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((previous) => (previous + 1) % projectItems.length)
    }, 7500)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [projectItems.length, shouldReduceMotion])

  const hasNavigation = projectItems.length > 1

  function handlePreviousSlide() {
    if (!projectItems.length) {
      return
    }

    setCurrentIndex((previous) => (previous - 1 + projectItems.length) % projectItems.length)
  }

  function handleNextSlide() {
    if (!projectItems.length) {
      return
    }

    setCurrentIndex((previous) => (previous + 1) % projectItems.length)
  }

  return (
    <section id="projetos" className="section-anchor">
      <Reveal>
        <SectionHeader
          eyebrow="Projetos"
          title="Projetos sincronizados com o GitHub"
          description="Selecao atualizada automaticamente e exibida em carrossel, priorizando iniciativas conectadas a produtividade, automacao e operacao industrial."
        />
      </Reveal>

      <Reveal delay={80}>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <p className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs text-brand-muted">
            {syncMessage}
          </p>

          {hasNavigation ? (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePreviousSlide}
                className="fx-btn inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-brand-text transition hover:border-brand-cyan/45 hover:bg-white/10"
                aria-label="Projeto anterior"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={handleNextSlide}
                className="fx-btn inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-brand-text transition hover:border-brand-cyan/45 hover:bg-white/10"
                aria-label="Proximo projeto"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          ) : null}
        </div>

        {projectItems.length ? (
          <div className="overflow-hidden">
            <Motion.div
              className="flex will-change-transform"
              animate={{ x: `${currentIndex * -100}%` }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {projectItems.map((project) => (
                <article key={project.name} className="w-full shrink-0 px-1">
                  <TiltCard
                    className={`fx-card flex h-full flex-col rounded-3xl border p-6 transition duration-300 hover:bg-white/[0.06] ${
                      project.featured
                        ? 'border-brand-cyan/35 bg-gradient-to-br from-brand-cyan/10 via-brand-accent/5 to-transparent'
                        : 'border-white/10 bg-white/[0.03]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold leading-tight text-brand-text">{project.name}</h3>
                      <span className="whitespace-nowrap rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-brand-muted">
                        {project.status}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-slate-200">{project.description}</p>
                    <p className="mt-3 rounded-xl border border-brand-cyan/25 bg-brand-cyan/10 px-3 py-2 text-sm text-brand-muted">
                      {project.context}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <Motion.span
                          key={`${project.name}-${item}`}
                          className="rounded-full border border-white/15 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-200"
                          whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.03 }}
                        >
                          {item}
                        </Motion.span>
                      ))}
                    </div>

                    <ul className="mt-5 space-y-2">
                      {project.highlightPoints.map((point) => (
                        <li key={point} className="text-sm leading-relaxed text-brand-muted">
                          - {point}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-4 text-xs leading-relaxed text-brand-muted/90">{project.sourceNote}</p>

                    {project.dataLimited ? (
                      <p className="mt-2 text-xs text-brand-cyan/90">
                        Estrutura do repositorio ainda em fase inicial. O card esta pronto para ser enriquecido conforme
                        novas entregas forem publicadas.
                      </p>
                    ) : null}

                    <div className="mt-auto flex flex-wrap gap-3 pt-6">
                      <Motion.a
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="fx-btn inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-brand-text transition hover:border-brand-cyan/45 hover:bg-white/10"
                        whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
                        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                      >
                        <Github size={15} />
                        Repositorio
                      </Motion.a>

                      <Motion.a
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="fx-btn inline-flex items-center gap-2 rounded-xl border border-brand-cyan/35 bg-brand-cyan/10 px-4 py-2 text-sm font-semibold text-brand-text transition hover:border-brand-cyan/55 hover:bg-brand-cyan/15"
                        whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
                        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                      >
                        Ver Detalhes
                        <ExternalLink size={15} />
                      </Motion.a>
                    </div>
                  </TiltCard>
                </article>
              ))}
            </Motion.div>
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-white/20 bg-white/[0.02] p-6 text-sm text-brand-muted">
            Nenhum projeto foi encontrado para exibicao no momento.
          </div>
        )}

        {hasNavigation ? (
          <div className="mt-5 flex items-center justify-center gap-2">
            {projectItems.map((project, index) => (
              <button
                key={`indicator-${project.name}`}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition ${
                  index === currentIndex ? 'w-8 bg-brand-cyan' : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Ir para o projeto ${project.name}`}
              />
            ))}
          </div>
        ) : null}
      </Reveal>
    </section>
  )
}

export default ProjectsSection
