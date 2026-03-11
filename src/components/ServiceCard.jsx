function ServiceCard({ icon, title, description }) {
  const IconComponent = icon

  return (
    <article className="card-surface group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-xl text-orange-600 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
        <IconComponent />
      </div>
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
    </article>
  )
}

export default ServiceCard
