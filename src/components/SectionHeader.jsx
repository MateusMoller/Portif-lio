function SectionHeader({ eyebrow, title, description }) {
  return (
    <header className="mb-10 max-w-3xl">
      {eyebrow ? (
        <p className="mb-4 inline-flex rounded-full border border-brand-accent/20 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="font-display text-3xl font-semibold leading-tight text-brand-text sm:text-[2.2rem]">{title}</h2>

      {description ? <p className="mt-4 text-[15px] leading-relaxed text-brand-muted sm:text-base">{description}</p> : null}
    </header>
  )
}

export default SectionHeader
