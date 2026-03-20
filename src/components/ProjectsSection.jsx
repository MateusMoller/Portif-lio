import { motion as Motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import TiltCard from './TiltCard'

function ProjectsSection({ projects }) {
  return (
    <section id="projetos" className="section-anchor">
      <Reveal>
        <SectionHeader
          eyebrow="Projetos"
          title="Projetos com aplicacao pratica"
          description="Selecao baseada em repositorios publicos do GitHub, priorizando iniciativas conectadas a produtividade, automacao e operacao industrial."
        />
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 70}>
            <TiltCard
              className={`fx-card rounded-3xl border p-6 transition duration-300 hover:bg-white/[0.06] ${
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
              <p className="mt-3 rounded-xl border border-brand-emerald/25 bg-brand-emerald/10 px-3 py-2 text-sm text-brand-muted">
                {project.context}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Motion.span
                    key={`${project.name}-${item}`}
                    className="rounded-full border border-white/15 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-200"
                    whileHover={{ y: -2, scale: 1.03 }}
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
                <p className="mt-2 text-xs text-amber-300/90">
                  Estrutura do repositorio ainda em fase inicial. O card esta pronto para ser enriquecido conforme
                  novas entregas forem publicadas.
                </p>
              ) : null}

              <div className="mt-6 flex flex-wrap gap-3">
                <Motion.a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="fx-btn inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-brand-text transition hover:border-brand-cyan/45 hover:bg-white/10"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github size={15} />
                  Repositorio
                </Motion.a>

                <Motion.a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="fx-btn inline-flex items-center gap-2 rounded-xl border border-brand-cyan/35 bg-brand-cyan/10 px-4 py-2 text-sm font-semibold text-brand-text transition hover:border-brand-cyan/55 hover:bg-brand-cyan/15"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Ver Detalhes
                  <ExternalLink size={15} />
                </Motion.a>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection

