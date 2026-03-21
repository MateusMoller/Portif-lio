import { motion as Motion } from 'framer-motion'
import { Award, BriefcaseBusiness, Download, Github, GraduationCap, Linkedin } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import TiltCard from './TiltCard'

function getLinkIcon(label) {
  if (label === 'GitHub') return Github
  if (label === 'LinkedIn') return Linkedin
  return Download
}

function ProfileSection({ credibility }) {
  return (
    <section id="credibilidade" className="section-anchor">
      <Reveal>
        <SectionHeader
          eyebrow="Credibilidade"
          title={credibility.title}
          description={credibility.description}
        />
      </Reveal>

      <div className="grid items-stretch gap-5 xl:grid-cols-[1.05fr_1.1fr_1fr]">
        <Reveal delay={70}>
          <TiltCard className="fx-card h-full rounded-3xl border border-slate-200 bg-white p-6">
            <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand-accent">
              <BriefcaseBusiness size={15} />
              Presença profissional
            </p>

            <div className="space-y-3">
              {credibility.links.map((item) => {
                const Icon = getLinkIcon(item.label)

                return (
                  <Motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-brand-accent/40 hover:bg-blue-50"
                    whileHover={{ y: -2 }}
                  >
                    <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand-text">
                      <Icon size={15} />
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-brand-muted">{item.description}</p>
                  </Motion.a>
                )
              })}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-brand-muted">{credibility.appliedProjectsNote}</p>
          </TiltCard>
        </Reveal>

        <Reveal delay={110}>
          <TiltCard className="fx-card h-full rounded-3xl border border-slate-200 bg-white p-6">
            <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand-accent">
              <GraduationCap size={15} />
              Formação e certificações
            </p>

            <div className="space-y-4">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-cyan">Formação</p>
                <div className="space-y-3">
                  {credibility.formation.map((item) => (
                    <article key={`${item.course}-${item.institution}`} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                      <h3 className="text-sm font-semibold text-brand-text">{item.course}</h3>
                      <p className="mt-1 text-sm text-brand-muted">{item.institution}</p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-brand-accent">
                        {item.status}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-cyan">Certificações</p>
                <div className="space-y-3">
                  {credibility.certifications.map((item) => (
                    <article key={`${item.name}-${item.institution}`} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                      <h3 className="text-sm font-semibold text-brand-text">{item.name}</h3>
                      <p className="mt-1 text-sm text-brand-muted">{item.institution}</p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-brand-accent">
                        {item.status}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard>
        </Reveal>

        <Reveal delay={150}>
          <TiltCard className="fx-card h-full rounded-3xl border border-slate-200 bg-white p-6">
            <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand-accent">
              <Award size={15} />
              Evidências de atuação
            </p>

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-cyan">Experiência aplicada</p>
            <ul className="space-y-2">
              {credibility.experienceFocus.map((item) => (
                <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-brand-muted">
                  {item}
                </li>
              ))}
            </ul>

            <p className="mb-3 mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-cyan">
              Tecnologias dominadas
            </p>
            <div className="flex flex-wrap gap-2">
              {credibility.dominantTechnologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  )
}

export default ProfileSection
