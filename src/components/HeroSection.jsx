import { AnimatePresence, motion as Motion } from 'framer-motion'
import {
  Activity,
  ArrowRight,
  Database,
  Download,
  Factory,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Workflow,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import Reveal from './Reveal'
import TiltCard from './TiltCard'

const rotatingInsights = [
  'Dados para decidir com mais velocidade.',
  'Automacao focada em rotina industrial real.',
  'Tecnologia conectada ao chao de fabrica.',
  'Processos claros, mediveis e escalaveis.',
]

function HeroSection({ personal, links, highlights }) {
  const [activeInsight, setActiveInsight] = useState(0)
  const capabilityPills = [
    { icon: Database, label: 'Dados operacionais' },
    { icon: Workflow, label: 'Automacao de processos' },
    { icon: Factory, label: 'Foco industrial' },
    { icon: Activity, label: 'Eficiencia real' },
  ]

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveInsight((previous) => (previous + 1) % rotatingInsights.length)
    }, 3000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section id="inicio" className="section-anchor">
      <Reveal className="glass-panel relative overflow-hidden rounded-4xl border border-white/10 p-6 shadow-soft sm:p-8 lg:p-10">
        <div className="hero-grid-overlay" />
        <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-brand-cyan/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-2 h-64 w-64 rounded-full bg-brand-accent/15 blur-3xl" />

        <div className="relative grid items-start gap-8 xl:grid-cols-[minmax(0,1.18fr)_minmax(0,0.95fr)]">
          <div className="flex flex-col gap-6">
            <p className="inline-flex w-fit rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-cyan">
              Tecnologia Aplicada a Industria
            </p>

            <h1 className="text-shimmer font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-[3.55rem]">
              {personal.name}
            </h1>

            <p className="max-w-2xl text-xl font-semibold leading-relaxed text-slate-100">{personal.headline}</p>
            <p className="max-w-xl text-sm leading-relaxed text-brand-muted sm:text-base">{personal.subtitle}</p>

            <div className="h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <Motion.p
                  key={rotatingInsights[activeInsight]}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1 text-xs font-medium text-brand-cyan"
                >
                  <Sparkles size={13} />
                  {rotatingInsights[activeInsight]}
                </Motion.p>
              </AnimatePresence>
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2">
              {capabilityPills.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200"
                  >
                    <span className="inline-flex rounded-lg border border-brand-cyan/25 bg-brand-cyan/10 p-1.5 text-brand-cyan">
                      <Icon size={14} />
                    </span>
                    {item.label}
                  </div>
                )
              })}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Motion.a
                href="#projetos"
                className="fx-btn inline-flex items-center gap-2 rounded-xl bg-brand-accent px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-500"
                whileHover={{ y: -2, scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
              >
                Ver Projetos
                <ArrowRight size={15} />
              </Motion.a>

              <Motion.a
                href="#contato"
                className="fx-btn inline-flex items-center gap-2 rounded-xl border border-brand-cyan/35 bg-brand-cyan/10 px-4 py-3 text-sm font-semibold text-brand-text transition hover:border-brand-cyan/55 hover:bg-brand-cyan/15"
                whileHover={{ y: -2, scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
              >
                <Mail size={15} />
                Entrar em Contato
              </Motion.a>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Motion.a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="fx-btn inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-brand-muted transition hover:border-brand-cyan/45 hover:text-brand-text"
                whileHover={{ y: -1, scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
              >
                <Github size={13} />
                GitHub
              </Motion.a>
              <Motion.a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="fx-btn inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-brand-muted transition hover:border-brand-cyan/45 hover:text-brand-text"
                whileHover={{ y: -1, scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
              >
                <Linkedin size={13} />
                LinkedIn
              </Motion.a>
              {personal.resumeUrl ? (
                <Motion.a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="fx-btn inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-brand-muted transition hover:border-brand-cyan/45 hover:text-brand-text"
                  whileHover={{ y: -1, scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                >
                  <Download size={13} />
                  Curriculo
                </Motion.a>
              ) : null}
            </div>
          </div>

          <div className="grid gap-4">
            <TiltCard className="fx-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="pointer-events-none absolute inset-x-6 top-0 h-24 rounded-b-full bg-brand-cyan/10 blur-2xl" />
              <div className="relative flex items-center gap-3">
                <img
                  src={personal.avatarUrl}
                  alt={`Foto de perfil de ${personal.name}`}
                  className="h-14 w-14 rounded-xl border border-white/15 object-cover"
                  loading="lazy"
                />

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-brand-text">{personal.role}</p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-brand-muted">
                    <MapPin size={12} />
                    {personal.location}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-brand-muted">{personal.availability}</p>
            </TiltCard>

            <div className="grid grid-cols-2 gap-3">
              {highlights.slice(0, 4).map((highlight) => (
                <TiltCard
                  key={highlight.label}
                  className="fx-card h-full rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <p className="font-display text-2xl font-semibold text-brand-text">{highlight.value}</p>
                  <p className="mt-1 text-[11px] leading-snug text-brand-muted">{highlight.label}</p>
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
