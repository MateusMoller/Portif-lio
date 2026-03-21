import { motion as Motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'

function NavActions({ links, resumeUrl, closeMenu }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Motion.a
        href={links.github}
        target="_blank"
        rel="noreferrer"
        className="btn-outline"
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        onClick={closeMenu}
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
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          onClick={closeMenu}
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

      <Motion.a
        href="#contato"
        className="btn-outline"
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        onClick={closeMenu}
      >
        <Mail size={15} />
        Contato
      </Motion.a>

      {resumeUrl ? (
        <Motion.a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-soft"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          onClick={closeMenu}
        >
          <Download size={15} />
          Currículo
        </Motion.a>
      ) : null}
    </div>
  )
}

function Navbar({ name, navigation, links, resumeUrl }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/85 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#inicio" className="font-display text-sm font-semibold tracking-[0.08em] text-brand-text">
          {name}
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-muted transition hover:text-brand-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden xl:block">
          <NavActions links={links} resumeUrl={resumeUrl} />
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-brand-text transition hover:border-brand-accent/35 hover:text-brand-accent lg:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden sm:px-6">
          <nav className="grid gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-brand-muted transition hover:bg-slate-50 hover:text-brand-accent"
                onClick={handleCloseMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-4">
            <NavActions links={links} resumeUrl={resumeUrl} closeMenu={handleCloseMenu} />
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
