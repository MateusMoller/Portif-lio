import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import TiltCard from './TiltCard'

function SkillsSection({ technologies }) {
  return (
    <section id="tecnologias" className="section-anchor">
      <Reveal>
        <SectionHeader
          eyebrow="Tecnologias"
          title={technologies.title}
          description={technologies.description}
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {technologies.categories.map((category, index) => (
          <Reveal key={category.name} delay={index * 45}>
            <TiltCard className="fx-card h-full rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-accent">{category.name}</p>

              <ul className="mt-3 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={`${category.name}-${item}`}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
