import { motion as Motion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import TiltCard from './TiltCard'

function AboutSection({ about }) {
  return (
    <section id="sobre" className="section-anchor">
      <Reveal>
        <SectionHeader eyebrow="Sobre" title={about.title} description={about.intro} />
      </Reveal>

      <div className="grid items-stretch gap-5 lg:grid-cols-[1.55fr_1fr]">
        <Reveal delay={80}>
          <TiltCard className="glass-panel fx-card h-full rounded-3xl border border-white/10 p-6 sm:p-7">
            <div className="space-y-4 text-base leading-relaxed text-brand-muted">
              {about.paragraphs.map((paragraph, index) => (
                <Motion.p
                  key={paragraph}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.42, delay: index * 0.07 }}
                >
                  {paragraph}
                </Motion.p>
              ))}
            </div>
          </TiltCard>
        </Reveal>

        <Reveal delay={150}>
          <TiltCard className="fx-card h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-cyan">Foco Tecnico</p>
            <ul className="grid gap-2.5">
              {about.focusTags.map((tag, index) => (
                <Motion.li
                  key={tag}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.36, delay: index * 0.05 }}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200"
                >
                  {tag}
                </Motion.li>
              ))}
            </ul>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  )
}

export default AboutSection

