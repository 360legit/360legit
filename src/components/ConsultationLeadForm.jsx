import { useState } from 'react'

const serviceOptions = [
  'Taxation Consultancy',
  'GST Services',
  'Business Registration',
  'Legal Compliance',
  'Accounting Services',
  'Startup Support',
]

const initialFormState = {
  name: '',
  phone: '',
  email: '',
  service: serviceOptions[0],
  message: '',
}

function ConsultationLeadForm({
  title = 'Book a Consultation',
  subtitle = 'Share your requirement and our team will contact you shortly.',
  buttonLabel = 'Submit Enquiry',
}) {
  const [formData, setFormData] = useState(initialFormState)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
    setFormData(initialFormState)
  }

  return (
    <div className="card-surface p-6 sm:p-8">
      <h3 className="text-2xl font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{subtitle}</p>

      {isSubmitted ? (
        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
          Thank you. Your consultation request has been received. Our advisor will contact you soon.
        </div>
      ) : null}

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-slate-700">
            Name
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-orange-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
              placeholder="Your full name"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-700">
            Phone
            <input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-orange-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
              placeholder="+91"
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-slate-700">
            Email
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-orange-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
              placeholder="name@company.com"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-700">
            Service
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full rounded-xl border border-orange-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
            >
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="space-y-2 text-sm font-medium text-slate-700">
          Message
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-xl border border-orange-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
            placeholder="Tell us your current requirement."
          />
        </label>

        <button type="submit" className="button-primary w-full sm:w-auto">
          {buttonLabel}
        </button>
      </form>
    </div>
  )
}

export default ConsultationLeadForm

