import { motion as Motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import Reveal from './Reveal'
import TiltCard from './TiltCard'

function buildWhatsAppUrl(whatsapp) {
  if (!whatsapp?.number) {
    return null
  }

  const cleanNumber = whatsapp.number.replace(/\D/g, '')
  const message = encodeURIComponent(whatsapp.message ?? 'Olá! Vi seu portfólio e gostaria de conversar.')
  return `https://wa.me/${cleanNumber}?text=${message}`
}

function ContactSection({ personal, links, contact }) {
  const whatsappUrl = buildWhatsAppUrl(links.whatsapp)

  return (
    <section id="contato" className="section-anchor">
      <Reveal>
        <TiltCard className="fx-card rounded-3xl border border-brand-accent/25 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 sm:p-8">
          <p className="inline-flex rounded-full border border-brand-accent/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent">
            Contato
          </p>

          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-brand-text sm:text-4xl">{contact.title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-brand-muted">{contact.description}</p>
          <p className="mt-2 text-sm font-medium text-slate-700">{contact.availabilityNote}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {personal.email ? (
              <Motion.a
                href={`mailto:${personal.email}`}
                className="btn-primary"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={15} />
                E-mail
                <ArrowUpRight size={15} />
              </Motion.a>
            ) : null}

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
              <ArrowUpRight size={15} />
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
                <ArrowUpRight size={15} />
              </Motion.a>
            ) : (
              <span className="btn-outline cursor-not-allowed opacity-70">
                <Linkedin size={15} />
                LinkedIn (adicionar)
              </span>
            )}

            {whatsappUrl ? (
              <Motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle size={15} />
                WhatsApp
                <ArrowUpRight size={15} />
              </Motion.a>
            ) : null}
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-white bg-white/85 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-cyan">Nome</p>
              <p className="mt-1 text-sm font-medium text-brand-text">{personal.fullName}</p>
            </div>
            <div className="rounded-2xl border border-white bg-white/85 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-cyan">Área de atuação</p>
              <p className="mt-1 text-sm font-medium text-brand-text">{personal.area}</p>
            </div>
            <div className="rounded-2xl border border-white bg-white/85 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-cyan">Disponibilidade</p>
              <p className="mt-1 text-sm font-medium text-brand-text">{personal.availability}</p>
            </div>
          </div>
        </TiltCard>
      </Reveal>
    </section>
  )
}

export default ContactSection
