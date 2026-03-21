import { Briefcase, GraduationCap, Languages, Target } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import TiltCard from './TiltCard'

function ProfileSection({ profile }) {
  const timelineItems = profile.experiences?.length > 0 ? profile.experiences : profile.trajectory ?? []

  return (
    <section id="perfil" className="section-anchor">
      <Reveal>
        <SectionHeader eyebrow="Perfil" title={profile.title} description={profile.overview} />
      </Reveal>

      <div className="grid items-stretch gap-5 lg:grid-cols-[1fr_1.2fr]">
        <Reveal delay={80}>
          <TiltCard className="glass-panel fx-card h-full rounded-3xl border border-white/10 p-6">
            <div className="mb-5 flex items-center gap-2">
              <span className="inline-flex rounded-xl border border-brand-cyan/30 bg-brand-cyan/10 p-2 text-brand-cyan">
                <Target size={18} />
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-cyan">Direcionamento</p>
            </div>

            <ul className="space-y-2.5">
              {profile.pillars.map((pillar) => (
                <li key={pillar} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200">
                  {pillar}
                </li>
              ))}
            </ul>

            {profile.profileTraits?.length ? (
              <>
                <p className="mb-3 mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-cyan/90">
                  Caracteristicas
                </p>
                <div className="flex flex-wrap gap-2">
                  {profile.profileTraits.map((trait) => (
                    <span
                      key={trait}
                      className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs text-brand-muted"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </>
            ) : null}
          </TiltCard>
        </Reveal>

        <Reveal delay={120}>
          <TiltCard className="fx-card h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-6 flex items-center gap-2">
              <span className="inline-flex rounded-xl border border-brand-cyan/30 bg-brand-cyan/10 p-2 text-brand-cyan">
                <Briefcase size={18} />
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-cyan">Experiencia</p>
            </div>

            <div className="relative border-l border-white/15 pl-5">
              {timelineItems.map((item) => {
                const key = `${item.title ?? item.role}-${item.company ?? ''}-${item.period ?? ''}`
                const heading = item.title ?? item.role
                const metaParts = [item.company, item.location, item.period].filter(Boolean)

                return (
                  <article key={key} className="relative mb-5 last:mb-0">
                    <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full border border-brand-cyan/45 bg-brand-bg" />
                    <h3 className="text-base font-semibold text-brand-text">{heading}</h3>
                    {metaParts.length ? (
                      <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-brand-cyan/90">
                        {metaParts.join(' - ')}
                      </p>
                    ) : null}
                    <p className="mt-2 text-sm leading-relaxed text-brand-muted">{item.description}</p>
                  </article>
                )
              })}
            </div>
          </TiltCard>
        </Reveal>
      </div>

      <div className="mt-5 grid items-stretch gap-5 lg:grid-cols-2">
        {profile.education?.length ? (
          <Reveal delay={160}>
            <TiltCard className="fx-card h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="inline-flex rounded-xl border border-brand-cyan/30 bg-brand-cyan/10 p-2 text-brand-cyan">
                  <GraduationCap size={18} />
                </span>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-cyan">Formacao</p>
              </div>

              <div className="space-y-3">
                {profile.education.map((item) => (
                  <article key={`${item.course}-${item.institution}`} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <h3 className="text-sm font-semibold text-brand-text">{item.course}</h3>
                    <p className="mt-1 text-sm text-brand-muted">{item.institution}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-brand-cyan/90">{item.status}</p>
                  </article>
                ))}
              </div>
            </TiltCard>
          </Reveal>
        ) : null}

        {profile.languages?.length ? (
          <Reveal delay={190}>
            <TiltCard className="fx-card h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="inline-flex rounded-xl border border-brand-cyan/30 bg-brand-cyan/10 p-2 text-brand-cyan">
                  <Languages size={18} />
                </span>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-cyan">Idiomas</p>
              </div>

              <ul className="space-y-2">
                {profile.languages.map((language) => (
                  <li key={language} className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-slate-200">
                    {language}
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}

export default ProfileSection
