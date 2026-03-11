function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`mb-10 ${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">{eyebrow}</p>
      ) : null}
      <h2 className="font-serif text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  )
}

export default SectionHeading

