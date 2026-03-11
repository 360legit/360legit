import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you requested could not be found."
        keywords="404, page not found"
      />

      <section className="section-shell section-space text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">404 Error</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold text-ink sm:text-5xl">Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-lg text-slate-600">The page you are looking for does not exist or may have been moved.</p>
        <Link to="/" className="button-primary mt-8">
          Back to Home
        </Link>
      </section>
    </>
  )
}

export default NotFoundPage

