import { AnimatePresence, Motion } from '../utils/motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { getSkillIcon } from '../utils/skillIconMap'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import TiltCard from './TiltCard'

function SkillsSection({ skills }) {
  const [expandedSkill, setExpandedSkill] = useState(null)

  const handleToggleSkill = (skillName) => {
    setExpandedSkill((currentSkill) => (currentSkill === skillName ? null : skillName))
  }

  return (
    <section id="stack" className="section-anchor">
      <Reveal>
        <SectionHeader
          eyebrow="Competencias"
          title="Competencias e Insights de Tecnologia"
          description="Uma visao mais ampla da minha atuacao: pensamento de processo, integracao operacional e tecnologia como meio para resolver problemas reais."
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((skill, index) => {
          const Icon = getSkillIcon(skill.icon)
          const isExpanded = expandedSkill === skill.name
          const detailsId = `skill-details-${index + 1}`

          return (
            <Reveal key={skill.name} delay={index * 40}>
              <TiltCard
                className={`fx-card h-full rounded-2xl border bg-white/[0.03] p-5 transition duration-300 hover:bg-white/[0.06] ${
                  isExpanded ? 'border-brand-cyan/45' : 'border-white/10 hover:border-brand-cyan/45'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={detailsId}
                  onClick={() => handleToggleSkill(skill.name)}
                  className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex rounded-xl border border-white/15 bg-brand-accent/12 p-2 text-brand-cyan">
                      <Icon size={20} />
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-brand-muted">
                      {skill.category}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-brand-text">{skill.name}</h3>
                    <Motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.26 }}>
                      <ChevronDown size={18} className={isExpanded ? 'text-brand-cyan' : 'text-brand-muted'} />
                    </Motion.span>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">{skill.summary}</p>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded ? (
                    <Motion.div
                      id={detailsId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-3">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-cyan">
                          Mais Informacoes
                        </p>
                        <ul className="space-y-2">
                          {skill.details?.map((detail, detailIndex) => (
                            <Motion.li
                              key={detail}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.28, delay: detailIndex * 0.05 }}
                              className="text-sm leading-relaxed text-slate-200"
                            >
                              - {detail}
                            </Motion.li>
                          ))}
                        </ul>
                      </div>
                    </Motion.div>
                  ) : null}
                </AnimatePresence>
              </TiltCard>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

export default SkillsSection

