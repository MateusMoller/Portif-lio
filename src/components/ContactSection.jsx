import { motion as Motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail, Wrench } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import TiltCard from './TiltCard'

function ContactSection({ personal, links, contact }) {
  const hasEmail = Boolean(personal.email)
  const hasPhone = Boolean(personal.phone)

  return (
    <section id="contato" className="section-anchor">
      <Reveal>
        <SectionHeader eyebrow="Contato" title={contact.title} description={contact.description} />
        <p className="mt-3 max-w-2xl text-sm text-brand-muted">{contact.callToAction}</p>
      </Reveal>

      <div className="grid items-stretch gap-4 lg:grid-cols-3">
        <Reveal delay={80}>
          <TiltCard className="glass-panel fx-card flex h-full flex-col rounded-3xl border border-white/10 p-5">
            <p className="mb-3 inline-flex rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-brand-muted">
              GitHub
            </p>
            <h3 className="text-base font-semibold text-brand-text">Repositorios e codigo</h3>
            <p className="mt-2 text-sm text-brand-muted">Acesse projetos, historico tecnico e evolucao dos estudos.</p>

            <Motion.a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="fx-btn mt-auto inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-brand-text transition hover:border-brand-cyan/45 hover:bg-white/10"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github size={15} />
              Abrir GitHub
              <ArrowUpRight size={14} />
            </Motion.a>
          </TiltCard>
        </Reveal>

        <Reveal delay={130}>
          <TiltCard className="fx-card flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="mb-3 inline-flex rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-brand-muted">
              LinkedIn
            </p>
            <h3 className="text-base font-semibold text-brand-text">Networking profissional</h3>
            <p className="mt-2 text-sm text-brand-muted">
              Perfil pronto para conexoes e futuras atualizacoes automaticas de carreira.
            </p>

            <Motion.a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="fx-btn mt-auto inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-brand-text transition hover:border-brand-cyan/45 hover:bg-white/10"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Linkedin size={15} />
              Abrir LinkedIn
              <ArrowUpRight size={14} />
            </Motion.a>
          </TiltCard>
        </Reveal>

        <Reveal delay={180}>
          <TiltCard className="fx-card flex h-full flex-col rounded-3xl border border-dashed border-brand-emerald/35 bg-brand-emerald/10 p-5">
            <p className="mb-3 inline-flex rounded-full border border-brand-emerald/30 bg-brand-emerald/15 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-brand-muted">
              E-mail
            </p>
            <h3 className="text-base font-semibold text-brand-text">Canal direto</h3>

            {hasEmail ? (
              <>
                <p className="mt-2 text-sm text-brand-muted">
                  Preferencia para propostas, projetos e contato profissional.
                </p>
                {hasPhone ? (
                  <p className="mt-2 text-xs uppercase tracking-[0.12em] text-brand-cyan/90">
                    Telefone: {personal.phone}
                  </p>
                ) : null}
                <Motion.a
                  href={`mailto:${personal.email}`}
                  className="fx-btn mt-auto inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-brand-text transition hover:border-brand-cyan/45 hover:bg-white/10"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail size={15} />
                  {personal.email}
                </Motion.a>
              </>
            ) : (
              <>
                <p className="mt-2 text-sm text-brand-muted">
                  Campo reservado para e-mail profissional. Edite em{' '}
                  <code className="text-slate-100">src/data/portfolioData.js</code>.
                </p>
                <span className="mt-auto inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-brand-muted">
                  <Wrench size={15} />
                  Adicionar e-mail depois
                </span>
              </>
            )}
          </TiltCard>
        </Reveal>
      </div>
    </section>
  )
}

export default ContactSection

