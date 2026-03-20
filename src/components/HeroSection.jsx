import { AnimatePresence, motion as Motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
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

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveInsight((previous) => (previous + 1) % rotatingInsights.length)
    }, 2800)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section id="inicio" className="section-anchor pt-8">
      <Reveal className="glass-panel relative overflow-hidden rounded-4xl border border-white/10 p-6 shadow-soft sm:p-8 lg:p-10">
        <Motion.div
          className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-brand-cyan/15 blur-3xl"
          animate={{
            x: [0, 20, -18, 0],
            y: [0, -12, 16, 0],
            scale: [1, 1.1, 0.94, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <Motion.div
          className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-brand-emerald/15 blur-3xl"
          animate={{
            x: [0, -22, 20, 0],
            y: [0, 14, -10, 0],
            scale: [1, 0.9, 1.08, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Motion.p
              className="mb-4 inline-flex rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-cyan"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              Portfolio Profissional
            </Motion.p>

            <Motion.h1
              className="text-shimmer font-display text-4xl font-semibold tracking-tight text-brand-text sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
            >
              {personal.name}
            </Motion.h1>

            <Motion.p
              className="mt-4 text-lg font-medium leading-relaxed text-slate-200"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
            >
              {personal.headline}
            </Motion.p>
            <Motion.p
              className="mt-4 max-w-2xl text-base leading-relaxed text-brand-muted"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
            >
              {personal.subtitle}
            </Motion.p>

            <div className="mt-4 h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <Motion.p
                  key={rotatingInsights[activeInsight]}
                  initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1 text-xs font-medium text-brand-cyan"
                >
                  <Sparkles size={13} />
                  {rotatingInsights[activeInsight]}
                </Motion.p>
              </AnimatePresence>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Motion.a
                href="#projetos"
                className="fx-btn inline-flex items-center gap-2 rounded-xl bg-brand-accent px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-500"
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Ver Projetos
                <ArrowRight size={15} />
              </Motion.a>

              <Motion.a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="fx-btn inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-brand-text transition hover:border-brand-cyan/45 hover:bg-white/10"
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Github size={15} />
                GitHub
              </Motion.a>

              <Motion.a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="fx-btn inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-brand-text transition hover:border-brand-cyan/45 hover:bg-white/10"
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Linkedin size={15} />
                LinkedIn
              </Motion.a>

              <Motion.a
                href="#contato"
                className="fx-btn inline-flex items-center gap-2 rounded-xl border border-brand-emerald/35 bg-brand-emerald/10 px-4 py-3 text-sm font-semibold text-brand-text transition hover:border-brand-emerald/55 hover:bg-brand-emerald/15"
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
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
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
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

          <div className="space-y-4">
            <TiltCard className="fx-card rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-3">
                <img
                  src={personal.avatarUrl}
                  alt={`Foto de perfil de ${personal.name}`}
                  className="h-12 w-12 rounded-xl border border-white/15 object-cover"
                  loading="lazy"
                />

                <div>
                  <p className="text-sm font-semibold text-brand-text">{personal.role}</p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-brand-muted">
                    <MapPin size={12} />
                    {personal.location}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-brand-muted">{personal.availability}</p>
            </TiltCard>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {highlights.map((highlight, index) => (
                <Motion.article
                  key={highlight.label}
                  className="fx-card rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-brand-cyan/35 hover:bg-white/[0.05]"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 + index * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <p className="font-display text-xl font-semibold text-brand-text">{highlight.value}</p>
                  <p className="mt-1 text-xs leading-relaxed text-brand-muted">{highlight.label}</p>
                </Motion.article>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default HeroSection

