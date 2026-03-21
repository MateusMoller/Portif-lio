import { motion as Motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import Reveal from './Reveal'
import TiltCard from './TiltCard'

function HeroSection({ personal, links, highlights }) {
  const initials = personal.name
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()

  return (
    <section id="inicio" className="section-anchor">
      <Reveal className="glass-panel rounded-[2rem] border border-slate-200 p-6 shadow-soft sm:p-8 lg:p-10">
        <div className="grid items-start gap-8 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <p className="inline-flex rounded-full border border-brand-accent/20 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent">
              Tecnologia aplicada à indústria
            </p>

            <p className="font-display text-4xl font-semibold tracking-tight text-brand-text sm:text-5xl">{personal.name}</p>

            <h1 className="max-w-3xl font-display text-3xl font-semibold leading-tight text-brand-text sm:text-4xl lg:text-[2.6rem]">
              {personal.heroHeadline}
            </h1>

            <p className="max-w-3xl text-lg font-medium leading-relaxed text-slate-800">{personal.heroSubheadline}</p>
            <p className="max-w-3xl text-base leading-relaxed text-brand-muted">{personal.heroAudience}</p>
            <p className="max-w-3xl rounded-2xl border border-brand-cyan/25 bg-teal-50 px-4 py-3 text-sm leading-relaxed text-slate-800">
              {personal.heroOutcome}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Motion.a href="#cases" className="btn-primary" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                Ver Projetos
                <ArrowRight size={15} />
              </Motion.a>

              <Motion.a href="#contato" className="btn-secondary" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Mail size={15} />
                Entrar em Contato
              </Motion.a>

              <Motion.a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github size={15} />
                GitHub
              </Motion.a>

              {links.linkedin ? (
                <Motion.a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Linkedin size={15} />
                  LinkedIn
                </Motion.a>
              ) : (
                <span className="btn-outline cursor-not-allowed opacity-70">
                  <Linkedin size={15} />
                  LinkedIn (adicionar)
                </span>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <TiltCard className="fx-card rounded-3xl border border-slate-200 bg-white p-5">
              <div className="flex items-start gap-4">
                {personal.avatarUrl ? (
                  <img
                    src={personal.avatarUrl}
                    alt={`Foto profissional de ${personal.fullName}`}
                    className="h-16 w-16 rounded-2xl border border-slate-200 object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 font-display text-lg font-semibold text-brand-text">
                    {initials}
                  </div>
                )}

                <div className="min-w-0 space-y-1">
                  <p className="text-sm font-semibold text-brand-text">{personal.fullName}</p>
                  <p className="text-sm text-brand-muted">{personal.role}</p>
                  <p className="text-sm text-slate-700">{personal.area}</p>
                  <p className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.1em] text-brand-accent">
                    <MapPin size={12} />
                    {personal.location}
                  </p>
                </div>
              </div>

              <p className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-brand-muted">
                {personal.availability}
              </p>
            </TiltCard>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <TiltCard key={highlight.label} className="fx-card rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-cyan">{highlight.label}</p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-brand-text">{highlight.value}</p>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default HeroSection
