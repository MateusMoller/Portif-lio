import { motion as Motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import TiltCard from './TiltCard'

function ContactSection({ personal, links, contact }) {
  const hasEmail = Boolean(personal.email)
  const hasPhone = Boolean(personal.phone)
  const hasWhatsapp = Boolean(links.whatsapp?.number)

  const cleanNumber = links.whatsapp?.number?.replace(/\D/g, '')
  const whatsappText = encodeURIComponent(
    links.whatsapp?.message ?? 'Ola! Vi seu portfolio e gostaria de conversar sobre oportunidades.',
  )
  const whatsappUrl = hasWhatsapp ? `https://wa.me/${cleanNumber}?text=${whatsappText}` : null

  return (
    <section id="contato" className="section-anchor">
      <Reveal>
        <SectionHeader eyebrow="Contato" title={contact.title} description={contact.description} />
      </Reveal>

      <Reveal delay={80}>
        <TiltCard className="glass-panel fx-card relative overflow-hidden rounded-3xl border border-white/10 p-6 sm:p-7">
          <div className="pointer-events-none absolute -right-12 -top-8 h-40 w-40 rounded-full bg-brand-cyan/12 blur-3xl" />

          <div className="relative">
            <p className="max-w-2xl text-base text-slate-100">{contact.callToAction}</p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {hasEmail ? (
                <Motion.a
                  href={`mailto:${personal.email}`}
                  className="fx-btn inline-flex items-center justify-between gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-brand-text transition hover:border-brand-cyan/45 hover:bg-white/10"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="inline-flex items-center gap-2">
                    <Mail size={15} />
                    E-mail
                  </span>
                  <ArrowUpRight size={14} />
                </Motion.a>
              ) : null}

              <Motion.a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="fx-btn inline-flex items-center justify-between gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-brand-text transition hover:border-brand-cyan/45 hover:bg-white/10"
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="inline-flex items-center gap-2">
                  <Linkedin size={15} />
                  LinkedIn
                </span>
                <ArrowUpRight size={14} />
              </Motion.a>

              <Motion.a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="fx-btn inline-flex items-center justify-between gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-brand-text transition hover:border-brand-cyan/45 hover:bg-white/10"
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="inline-flex items-center gap-2">
                  <Github size={15} />
                  GitHub
                </span>
                <ArrowUpRight size={14} />
              </Motion.a>

              {whatsappUrl ? (
                <Motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="fx-btn inline-flex items-center justify-between gap-2 rounded-xl border border-brand-cyan/35 bg-brand-cyan/10 px-4 py-3 text-sm font-semibold text-brand-text transition hover:border-brand-cyan/55 hover:bg-brand-cyan/15"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="inline-flex items-center gap-2">
                    <MessageCircle size={15} />
                    WhatsApp
                  </span>
                  <ArrowUpRight size={14} />
                </Motion.a>
              ) : null}
            </div>
          </div>
        </TiltCard>
      </Reveal>

      <div className="mt-4 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Reveal delay={130}>
          <TiltCard className="fx-card rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-brand-cyan/90">Disponibilidade</p>
            <p className="mt-2 text-sm text-brand-muted">{personal.availability}</p>
          </TiltCard>
        </Reveal>

        <Reveal delay={170}>
          <TiltCard className="fx-card rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-brand-cyan/90">Localizacao</p>
            <p className="mt-2 inline-flex items-center gap-2 text-sm text-brand-muted">
              <MapPin size={14} />
              {personal.location}
            </p>
          </TiltCard>
        </Reveal>

        <Reveal delay={210}>
          <TiltCard className="fx-card rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-brand-cyan/90">Canal direto</p>
            {hasPhone ? (
              <p className="mt-2 inline-flex items-center gap-2 text-sm text-brand-muted">
                <Phone size={14} />
                {personal.phone}
              </p>
            ) : (
              <p className="mt-2 text-sm text-brand-muted">Telefone sera exibido quando disponivel.</p>
            )}
          </TiltCard>
        </Reveal>
      </div>
    </section>
  )
}

export default ContactSection
