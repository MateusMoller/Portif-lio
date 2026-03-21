import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import TiltCard from './TiltCard'

function ValueSection({ value }) {
  return (
    <section id="valor" className="section-anchor">
      <Reveal>
        <SectionHeader eyebrow="Valor" title={value.title} description={value.description} />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {value.pillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={index * 50}>
            <TiltCard className="fx-card h-full rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-base font-semibold text-brand-text">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">{pillar.description}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <TiltCard className="fx-card mt-5 rounded-3xl border border-brand-cyan/25 bg-teal-50 p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-brand-cyan">Benefícios entregues</p>
          <ul className="grid gap-2 text-sm text-slate-800 md:grid-cols-2">
            {value.outcomes.map((outcome) => (
              <li key={outcome} className="rounded-xl border border-white/70 bg-white/60 px-3 py-2">
                {outcome}
              </li>
            ))}
          </ul>
        </TiltCard>
      </Reveal>
    </section>
  )
}

export default ValueSection
