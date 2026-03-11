import { FiMessageCircle, FiPhoneCall } from 'react-icons/fi'
import { contactInfo, socialLinks } from '../data/siteData'

function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-3">
      <a
        href={socialLinks.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:-translate-y-1"
        aria-label="Chat on WhatsApp"
      >
        <FiMessageCircle size={22} />
      </a>
      <a
        href={`tel:${contactInfo.phonePrimary.replace(/\s+/g, '')}`}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform duration-300 hover:-translate-y-1"
        aria-label="Call now"
      >
        <FiPhoneCall size={20} />
      </a>
    </div>
  )
}

export default FloatingActions
