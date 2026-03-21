import { motion as Motion } from 'framer-motion'
import { ExternalLink, Github, Workflow } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import TiltCard from './TiltCard'

function ProjectsSection({ projects }) {
  return (
    <section id="projetos" className="section-anchor">
      <Reveal>
        <SectionHeader
          eyebrow="Projetos"
          title="Projetos com foco em resultado"
          description="Cards objetivos com stack, impacto e acesso rapido ao repositorio."
        />
      </Reveal>

      <div className="grid items-stretch gap-6 xl:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 70}>
            <TiltCard
              className={`fx-card group flex h-full flex-col rounded-3xl border p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06] ${
                project.featured
                  ? 'border-brand-cyan/35 bg-gradient-to-br from-brand-cyan/10 via-brand-accent/5 to-transparent'
                  : 'border-white/10 bg-white/[0.03]'
              }`}
            >
              <div className="project-preview rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-brand-muted">
                    {project.status}
                  </span>
                  <span className="text-xs uppercase tracking-[0.14em] text-brand-cyan/85">
                    Projeto {index + 1}
                  </span>
                </div>

                <div className="mt-7">
                  <span className="inline-flex items-center gap-1 rounded-full border border-brand-cyan/25 bg-brand-cyan/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-brand-cyan">
                    <Workflow size={12} />
                    Tecnologia Aplicada
                  </span>

                  <h3 className="mt-3 text-xl font-semibold leading-tight text-brand-text">{project.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">{project.context}</p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-200">{project.description}</p>

              {project.highlightPoints?.length ? (
                <p className="mt-2 text-sm text-brand-muted">
                  {project.highlightPoints[0]}
                </p>
              ) : null}

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.slice(0, 5).map((item) => (
                  <Motion.span
                    key={`${project.name}-${item}`}
                    className="rounded-full border border-white/15 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-200"
                    whileHover={{ y: -2, scale: 1.03 }}
                  >
                    {item}
                  </Motion.span>
                ))}
              </div>

              {project.dataLimited ? (
                <p className="mt-3 rounded-xl border border-brand-cyan/25 bg-brand-cyan/10 px-3 py-2 text-xs text-brand-cyan/90">
                  Estrutura inicial: pronto para receber prints, mockups e dashboard do projeto.
                </p>
              ) : null}

              <div className="mt-auto flex flex-wrap gap-3 pt-5">
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
