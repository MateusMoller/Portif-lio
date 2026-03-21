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

      <div className="grid items-stretch gap-5 lg:grid-cols-[1.45fr_1fr]">
        <Reveal delay={80}>
          <TiltCard className="glass-panel fx-card h-full rounded-3xl border border-slate-200 p-6 sm:p-7">
            <div className="space-y-4 text-base leading-relaxed text-brand-muted">
              {about.paragraphs.map((paragraph, index) => (
                <Motion.p
                  key={paragraph}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  {paragraph}
                </Motion.p>
              ))}
            </div>
          </TiltCard>
        </Reveal>

        <Reveal delay={130}>
          <TiltCard className="fx-card h-full rounded-3xl border border-slate-200 bg-white p-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-brand-cyan">Áreas de atuação</p>
            <ul className="grid gap-2.5">
              {about.focusTags.map((tag, index) => (
                <Motion.li
                  key={tag}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.34, delay: index * 0.05 }}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
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
