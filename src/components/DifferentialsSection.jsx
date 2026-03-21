import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import TiltCard from './TiltCard'

function DifferentialsSection({ differentials }) {
  return (
    <section id="diferenciais" className="section-anchor">
      <Reveal>
        <SectionHeader
          eyebrow="Diferenciais"
          title={differentials.title}
          description={differentials.description}
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {differentials.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 45}>
            <TiltCard className="fx-card h-full rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-base font-semibold text-brand-text">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{item.description}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default DifferentialsSection
