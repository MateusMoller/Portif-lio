import { motion as Motion } from 'framer-motion'

function Footer({ name, navigation }) {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-brand-muted">
          Â© {new Date().getFullYear()} {name}. Todos os direitos reservados.
        </p>

        <nav className="flex flex-wrap gap-3 text-sm">
          {navigation.map((item) => (
            <Motion.a
              key={item.href}
              href={item.href}
              className="text-brand-muted transition hover:text-brand-text"
              whileHover={{ y: -2, color: '#e2e8f0' }}
            >
              {item.label}
            </Motion.a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer

