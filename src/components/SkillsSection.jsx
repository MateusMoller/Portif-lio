import { motion as Motion } from 'framer-motion'
import { BarChart3, Cog, Factory, Wrench } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import TiltCard from './TiltCard'

function SkillsSection({ skills }) {
  const groupConfig = [
    {
      title: 'Dados',
      icon: BarChart3,
      description: 'Leitura de indicadores e apoio a decisao operacional.',
      categories: ['Gestao', 'Eficiencia'],
    },
    {
      title: 'Automacao',
      icon: Cog,
      description: 'Automacao, integracao e fluxo de execucao mais rapido.',
      categories: ['Produtividade', 'Integracao', 'IA Aplicada', 'Validacao'],
    },
    {
      title: 'Ferramentas',
      icon: Wrench,
      description: 'Base tecnica para construir, testar e evoluir solucoes.',
      categories: ['Ferramentas'],
    },
    {
      title: 'Processos / Industria',
      icon: Factory,
      description: 'Processo, governanca e contexto de operacao fabril.',
      categories: [
        'Processos',
        'Operacao',
        'Arquitetura',
        'Governanca',
        'Entrega',
        'Colaboracao',
        'Formacao Tecnica',
        'Dominio',
      ],
    },
  ]

  const groupedSkills = groupConfig
    .map((group) => ({
      ...group,
      items: skills.filter((skill) => group.categories.includes(skill.category)),
    }))
    .filter((group) => group.items.length > 0)

  return (
    <section id="stack" className="section-anchor">
      <Reveal>
        <SectionHeader
          eyebrow="Competencias"
          title="Stack Tecnico em Blocos"
          description="Visao rapida das competencias por frente de atuacao."
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {groupedSkills.map((group, index) => {
          const Icon = group.icon
          const visibleItems = group.items.slice(0, 6)
          const extraCount = Math.max(group.items.length - visibleItems.length, 0)

          return (
            <Reveal key={group.title} delay={index * 70}>
              <TiltCard className="fx-card h-full rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-brand-cyan/45 hover:bg-white/[0.06]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex rounded-xl border border-brand-cyan/30 bg-brand-cyan/10 p-2 text-brand-cyan">
                      <Icon size={18} />
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-brand-text">{group.title}</h3>
                    <p className="mt-2 text-sm text-brand-muted">{group.description}</p>
                  </div>

                  <span className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.12em] text-brand-muted">
                    {group.items.length} skills
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {visibleItems.map((item) => (
                    <Motion.span
                      key={item.name}
                      className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs text-slate-200"
                      whileHover={{ y: -2, scale: 1.02 }}
                    >
                      {item.name}
                    </Motion.span>
                  ))}

                  {extraCount ? (
                    <span className="rounded-full border border-brand-cyan/25 bg-brand-cyan/10 px-3 py-1 text-xs text-brand-cyan">
                      +{extraCount}
                    </span>
                  ) : null}
                </div>
              </TiltCard>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

export default SkillsSection
