import { Motion } from '../utils/motion'
import { Download, Github, Linkedin, Mail } from 'lucide-react'

function Navbar({ name, navigation, links, resumeUrl }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-bg/78 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="font-display text-sm font-semibold tracking-[0.08em] text-brand-text transition hover:text-brand-cyan"
        >
          {name}
        </a>

        <nav className="hidden items-center gap-5 md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-brand-muted transition hover:text-brand-text">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Motion.a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 bg-white/5 p-2 text-brand-muted transition hover:border-brand-cyan/50 hover:text-brand-cyan"
            aria-label="GitHub"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Github size={16} />
          </Motion.a>

          <Motion.a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 bg-white/5 p-2 text-brand-muted transition hover:border-brand-cyan/50 hover:text-brand-cyan"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Linkedin size={16} />
          </Motion.a>

          <Motion.a
            href="#contato"
            className="rounded-full border border-white/15 bg-white/5 p-2 text-brand-muted transition hover:border-brand-cyan/50 hover:text-brand-cyan"
            aria-label="Entrar em contato"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail size={16} />
          </Motion.a>

          {resumeUrl ? (
            <Motion.a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="fx-btn ml-1 hidden items-center gap-2 rounded-full border border-brand-accent/40 bg-brand-accent/10 px-3 py-1.5 text-xs font-semibold text-brand-text transition hover:border-brand-cyan/60 hover:bg-brand-accent/20 sm:inline-flex"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={14} />
              Curriculo
            </Motion.a>
          ) : null}
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl gap-4 overflow-x-auto px-4 pb-3 text-sm text-brand-muted md:hidden sm:px-6 lg:px-8">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} className="whitespace-nowrap transition hover:text-brand-text">
            {item.label}
          </a>
        ))}
      </div>
    </header>
  )
}

export default Navbar
