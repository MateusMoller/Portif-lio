function Footer({ name, navigation, statement }) {
  return (
    <footer className="border-t border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-brand-text">{statement}</p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-brand-muted">
            © {new Date().getFullYear()} {name}. Portfólio profissional.
          </p>

          <nav className="flex flex-wrap gap-4 text-sm">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="text-brand-muted transition hover:text-brand-accent">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
