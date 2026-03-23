import { useEffect, useState } from 'react'
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react'
import { AnimatePresence, Motion, useReducedMotion } from '../utils/motion'
import Reveal from './Reveal'
import TiltCard from './TiltCard'

const rotatingInsights = [
  'Automacao de rotinas com impacto no chao de fabrica.',
  'Integracao entre TI, processos e engenharia.',
  'Interfaces funcionais para decisao operacional.',
  'Solucoes praticas para desafios industriais reais.',
]

function HeroSection({ personal, links, highlights }) {
  const [activeInsight, setActiveInsight] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveInsight((previous) => (previous + 1) % rotatingInsights.length)
    }, 3000)

    return () => window.clearInterval(intervalId)
  }, [shouldReduceMotion])

  return (
    <section id="inicio" className="section-anchor">
      <Reveal className="glass-panel relative overflow-hidden rounded-4xl border border-white/10 p-6 shadow-soft sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-14 -top-14 h-56 w-56 rounded-full bg-brand-cyan/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-12 bottom-0 h-44 w-44 rounded-full bg-brand-accent/15 blur-3xl" />

        <div className="relative grid items-start gap-8 xl:grid-cols-[minmax(0,1.25fr)_minmax(0,0.95fr)]">
          <div className="flex flex-col gap-5">
            <p className="inline-flex w-fit rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-cyan">
              Portfolio Profissional
            </p>

            <h1 className="text-shimmer font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {personal.name}
            </h1>

            <p className="max-w-2xl text-lg font-medium leading-relaxed text-slate-200">{personal.headline}</p>
            <p className="max-w-2xl text-base leading-relaxed text-brand-muted">{personal.subtitle}</p>

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
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="fx-btn inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-brand-text transition hover:border-brand-cyan/45 hover:bg-white/10"
                whileHover={{ y: -2, scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
              >
                <Github size={15} />
                GitHub
              </Motion.a>

              <Motion.a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="fx-btn inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-brand-text transition hover:border-brand-cyan/45 hover:bg-white/10"
                whileHover={{ y: -2, scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
              >
                <Linkedin size={15} />
                LinkedIn
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

              {personal.resumeUrl ? (
                <Motion.a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="fx-btn inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-brand-text transition hover:border-brand-cyan/45 hover:bg-white/10"
                  whileHover={{ y: -2, scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                >
                  <Download size={15} />
                  Baixar Curriculo
                </Motion.a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-xl border border-dashed border-white/20 bg-white/5 px-4 py-3 text-sm font-medium text-brand-muted">
                  <Download size={15} />
                  Curriculo (adicionar depois)
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <TiltCard className="fx-card h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-3">
                <img
                  src={personal.avatarUrl}
                  alt={`Foto de perfil de ${personal.name}`}
                  className="h-12 w-12 rounded-xl border border-white/15 object-cover"
                  width="48"
                  height="48"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
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

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <TiltCard
                  key={highlight.label}
                  className="fx-card h-full rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <p className="font-display text-xl font-semibold text-brand-text">{highlight.value}</p>
                  <p className="mt-1 text-xs leading-relaxed text-brand-muted">{highlight.label}</p>
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
