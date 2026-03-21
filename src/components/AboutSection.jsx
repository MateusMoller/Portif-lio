import { motion as Motion } from 'framer-motion'
import { BarChart3, Cog, Factory, Workflow } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import TiltCard from './TiltCard'

function AboutSection({ about }) {
  const focusAreas = [
    {
      icon: BarChart3,
      title: 'Dados',
      summary: 'ERP, Excel e Power BI para leitura operacional.',
    },
    {
      icon: Cog,
      title: 'Automacao',
      summary: 'Rotinas repetitivas convertidas em fluxo padronizado.',
    },
    {
      icon: Workflow,
      title: 'Eficiencia Operacional',
      summary: 'Processos mais claros, rapidos e confiaveis.',
    },
    {
      icon: Factory,
      title: 'Industria',
      summary: 'Tecnologia aplicada ao contexto fabril real.',
    },
  ]

  return (
    <section id="sobre" className="section-anchor">
      <Reveal>
        <SectionHeader eyebrow="Sobre" title={about.title} description={about.intro} />
      </Reveal>

      <div className="grid items-stretch gap-5 xl:grid-cols-[1.25fr_1fr]">
        <Reveal delay={80}>
          <TiltCard className="glass-panel fx-card h-full rounded-3xl border border-white/10 p-6 sm:p-7">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-brand-cyan">
              Visao Profissional
            </p>

            <div className="grid gap-3">
              {about.paragraphs.map((paragraph, index) => (
                <Motion.div
                  key={paragraph}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.42, delay: index * 0.07 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <p className="text-sm leading-relaxed text-slate-200">{paragraph}</p>
                </Motion.div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {about.focusTags.slice(0, 6).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs text-brand-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </TiltCard>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid h-full gap-4 sm:grid-cols-2">
            {focusAreas.map((area, index) => {
              const Icon = area.icon

              return (
                <TiltCard
                  key={area.title}
                  className="fx-card rounded-3xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <Motion.div
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{ duration: 0.36, delay: index * 0.06 }}
                  >
                    <span className="inline-flex rounded-xl border border-brand-cyan/30 bg-brand-cyan/10 p-2 text-brand-cyan">
                      <Icon size={18} />
                    </span>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-brand-text">
                      {area.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-brand-muted">{area.summary}</p>
                  </Motion.div>
                </TiltCard>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default AboutSection
