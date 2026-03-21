import { motion as Motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import TiltCard from './TiltCard'

function CaseField({ label, text }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-accent">{label}</p>
      <p className="mt-1 text-sm leading-relaxed text-brand-muted">{text}</p>
    </div>
  )
}

function CaseLinks({ links }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {links?.github ? (
        <Motion.a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          className="btn-outline"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          <Github size={15} />
          GitHub
        </Motion.a>
      ) : null}

      {links?.demo ? (
        <Motion.a
          href={links.demo}
          target="_blank"
          rel="noreferrer"
          className="btn-soft"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          Demo
          <ExternalLink size={15} />
        </Motion.a>
      ) : (
        <span className="btn-soft cursor-default opacity-80">
          Demo em evolução
          <ExternalLink size={15} />
        </span>
      )}
    </div>
  )
}

function ProjectsSection({ projects }) {
  const featured = projects.featured

  return (
    <section id="cases" className="section-anchor">
      <Reveal>
        <SectionHeader eyebrow="Cases" title={projects.title} description={projects.description} />
      </Reveal>

      <Reveal delay={70}>
        <TiltCard className="fx-card rounded-3xl border border-brand-accent/30 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-accent/25 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent">
              <Star size={13} />
              Projeto principal
            </p>

            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">
              {featured.status}
            </span>
          </div>

          <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-brand-text sm:text-3xl">{featured.title}</h3>

          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            <CaseField label="Problema" text={featured.problem} />
            <CaseField label="Solução" text={featured.solution} />
          </div>

          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-accent">Stack</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {featured.stack.map((item) => (
                <span
                  key={`${featured.title}-${item}`}
                  className="rounded-full border border-white bg-white px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-brand-cyan/25 bg-teal-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-cyan">Resultado</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-800">{featured.result}</p>
          </div>

          <CaseLinks links={featured.links} />
        </TiltCard>
      </Reveal>

      <div className="mt-6 grid gap-4 xl:grid-cols-3">
        {projects.secondary.map((project, index) => (
          <Reveal key={project.title} delay={index * 60}>
            <TiltCard className="fx-card flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-brand-text">{project.title}</h3>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
                  {project.status}
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <CaseField label="Problema" text={project.problem} />
                <CaseField label="Solução" text={project.solution} />
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-accent">Stack</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={`${project.title}-${item}`}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-brand-cyan/25 bg-teal-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-cyan">Resultado</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-800">{project.result}</p>
              </div>

              <div className="mt-auto">
                <CaseLinks links={project.links} />
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
