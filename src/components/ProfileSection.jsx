import { motion as Motion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import TiltCard from './TiltCard'

function ProfileSection({ profile }) {
  return (
    <section id="perfil" className="section-anchor">
      <Reveal>
        <SectionHeader eyebrow="Perfil Profissional" title={profile.title} description={profile.overview} />
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-[1.05fr_1.35fr]">
        <Reveal delay={80}>
          <TiltCard className="glass-panel fx-card rounded-3xl border border-white/10 p-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-brand-cyan">
              Frentes de Atuacao
            </p>
            <ul className="space-y-3">
              {profile.pillars.map((pillar, index) => (
                <Motion.li
                  key={pillar}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200"
                >
                  {pillar}
                </Motion.li>
              ))}
            </ul>
          </TiltCard>
        </Reveal>

        <Reveal delay={140}>
          <TiltCard className="fx-card rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-brand-cyan">
              Trajetoria e Direcao
            </p>

            <div className="relative border-l border-white/15 pl-5">
              {profile.trajectory.map((step, index) => (
                <Motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="relative mb-5 last:mb-0"
                >
                  <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full border border-brand-cyan/40 bg-brand-bg" />
                  <h3 className="text-base font-semibold text-brand-text">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">{step.description}</p>
                </Motion.article>
              ))}
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  )
}

export default ProfileSection

