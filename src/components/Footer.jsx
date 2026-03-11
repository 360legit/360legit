import { FiFacebook, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone, FiYoutube, FiHeart, FiPhoneCall } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { companyName, contactInfo, navLinks, serviceOverview, socialLinks } from '../data/siteData'

function Footer() {
  const serviceLinks = serviceOverview.slice(0, 5)

  return (
    <footer className="relative mt-20 overflow-hidden bg-gradient-to-b from-[#FDFCFB] to-slate-50 pt-20 border-t border-orange-100">
      {/* Gentle Animated Background Effect */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[400px] -translate-x-1/2 bg-orange-100/30 blur-[120px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
      
      <div className="section-shell relative z-10 pb-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="group">
            <div className="mb-8">
              <img src="logo.png" alt={companyName} className="h-28 sm:h-32 w-auto object-contain drop-shadow-md" />
            </div>
            <p className="inline-block px-3 py-1 mb-4 rounded-full bg-orange-50 border border-orange-100 text-[10px] font-extrabold uppercase tracking-[0.2em] text-orange-500 shadow-sm transition-all group-hover:scale-105">
              About Company
            </p>
            <h3 className="font-serif text-3xl font-bold text-[#1B3942] tracking-tight">{companyName}</h3>
            <p className="mt-5 text-sm leading-relaxed text-slate-500 font-medium">
              Your trusted partner for taxation, compliance and strategic startup advisory. We help businesses build untouchable regulatory foundations for consistent, compliant growth.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold text-[#1B3942] mb-6 tracking-wide">Quick Links</p>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link className="group/link flex items-center text-sm font-medium text-slate-500 transition-all hover:text-orange-600" to={item.path}>
                    <span className="h-px w-0 bg-orange-500 transition-all duration-300 group-hover/link:w-3 group-hover/link:mr-2"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold text-[#1B3942] mb-6 tracking-wide">Expertise</p>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.title}>
                  <Link className="group/link flex items-center text-sm font-medium text-slate-500 transition-all hover:text-orange-600" to="/services">
                    <span className="h-px w-0 bg-orange-500 transition-all duration-300 group-hover/link:w-3 group-hover/link:mr-2"></span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold text-[#1B3942] mb-6 tracking-wide">Contact Us</p>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li className="flex items-start gap-4 group/contact">
                <div className="mt-0.5 p-2 rounded-lg bg-orange-50 text-orange-500 group-hover/contact:bg-orange-500 group-hover/contact:text-white transition-colors duration-300">
                  <FiMapPin size={16} />
                </div>
                <span className="leading-relaxed">{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-4 group/contact">
                <div className="p-2 rounded-lg bg-orange-50 text-orange-500 group-hover/contact:bg-orange-500 group-hover/contact:text-white transition-colors duration-300">
                  <FiPhone size={16} />
                </div>
                <a className="hover:text-orange-600 transition-colors" href={`tel:${contactInfo.phonePrimary.replace(/\s+/g, '')}`}>{contactInfo.phonePrimary}</a>
              </li>
              <li className="flex items-center gap-4 group/contact">
                <div className="p-2 rounded-lg bg-orange-50 text-orange-500 group-hover/contact:bg-orange-500 group-hover/contact:text-white transition-colors duration-300">
                  <FiMail size={16} />
                </div>
                <a className="hover:text-orange-600 transition-colors" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
            </ul>
            <div className="mt-8 flex items-center gap-3">
              {[
                { icon: FiLinkedin, link: socialLinks.linkedin },
                { icon: FiFacebook, link: socialLinks.facebook },
                { icon: FiInstagram, link: socialLinks.instagram },
                { icon: FaXTwitter, link: socialLinks.twitter },
                { icon: FiYoutube, link: socialLinks.youtube }
              ].map((social, idx) => {
                const Icon = social.icon
                return (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-slate-100 text-slate-400 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-500 hover:shadow-md"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-50"></div>

        {/* Footer Bottom with Yuvan Creations Attribution */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 bg-white py-2.5 px-6 rounded-full border border-orange-100 shadow-sm">
            <div className="flex items-center gap-2">
              Crafted with <span className="text-orange-600 font-bold mx-1">Trust</span> by 
              <a 
                href="https://yuvancreations.github.io/yuvancreations/" 
                target="_blank" 
                rel="noreferrer" 
                className="font-bold text-[#1B3942] hover:text-orange-600 transition-colors uppercase tracking-wide ml-1"
              >
                YUVAN CREATIONS
              </a>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-200"></div>
            <a 
              href="tel:+919557300217" 
              className="flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors group"
            >
              <div className="p-1 rounded-md bg-orange-50 group-hover:bg-orange-100 transition-colors">
                <FiPhoneCall size={12} />
              </div>
              +91-9557300217
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
