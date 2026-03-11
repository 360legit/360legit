import { FiAward, FiCompass, FiEye, FiUsers, FiTarget, FiActivity, FiShield, FiTrendingUp } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import { companyName, industriesServed } from '../data/siteData'

function AboutPage() {
  return (
    <>
      <SEO
        title="About Our Legacy & Expertise"
        description={`${companyName} is a premium business consultancy firm specializing in taxation, legal compliance, and startup advisory. Discover our mission to empower Indian enterprises.`}
        keywords="about business consultancy, financial advisory delhi, startup consultants india, compliance experts"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#1B3942] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </div>
        
        <div className="section-shell relative z-10">
          <div className="max-w-4xl">
            <Reveal duration={800}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400 mb-8">
                Since 2020
              </span>
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
                Pioneering <span className="text-orange-400 italic">Trusted</span> Business Advisory.
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl font-light">
                {companyName} was founded with a singular purpose: to bridge the gap between complex regulation and entrepreneurial growth.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Side by Side */}
      <section className="section-space relative -mt-16 z-20 pt-0">
        <div className="section-shell">
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={100}>
              <article className="group bg-white rounded-3xl p-10 shadow-2xl shadow-slate-200/50 border border-slate-50 transition-all hover:scale-[1.02]">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                  <FiEye size={28} />
                </div>
                <h2 className="text-3xl font-bold text-[#1B3942] mb-6 tracking-tight">Our Vision</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To become India's most respected consultancy partner, known for absolute transparency, strategic foresight, and unwavering commitment to client success.
                </p>
              </article>
            </Reveal>
            <Reveal delay={300}>
              <article className="group bg-white rounded-3xl p-10 shadow-2xl shadow-slate-200/50 border border-slate-50 transition-all hover:scale-[1.02]">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <FiTarget size={28} />
                </div>
                <h2 className="text-3xl font-bold text-[#1B3942] mb-6 tracking-tight">Our Mission</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To simplify the regulatory landscape for businesses through proactive advisory, modern technical integration, and human-centric delivery.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Founder / Message Section */}
      <section className="section-space overflow-hidden">
        <div className="section-shell">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                  <img 
                    src="owner.png" 
                    alt="Founder Aditya Sharma" 
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B3942] via-transparent to-transparent opacity-60" />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={200}>
                <div className="flex flex-col gap-8">
                  <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1B3942] leading-tight">
                    A message from our <span className="text-orange-600">leadership</span>
                  </h2>
                  <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                    <p>
                      The business landscape for Indian enterprises is evolving rapidly. Compliance is no longer a chore; it's a competitive advantage.
                    </p>
                    <p className="font-medium italic text-slate-800">
                      "We started {companyName} to ensure that no business, regardless of size, feels intimidated by statutory requirements. Our goal is to make your backend as strong as your frontend."
                    </p>
                    <div className="pt-6">
                      <p className="font-extrabold text-[#1B3942] text-xl">Aditya Sharma</p>
                      <p className="text-orange-600 font-bold uppercase tracking-widest text-xs mt-1">Founder / Managing Director</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-space bg-[#FDFCFB]">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Global Reach"
              title="Expertise Across Diverse Sectors"
              description="We provide vertical-specific advisory to ensure localized compliance and strategic relevance."
              centered
            />
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
            {industriesServed.map((industry, index) => (
              <Reveal key={industry} delay={index * 50}>
                <div className="group bg-white p-8 rounded-2xl border border-slate-100 text-center transition-all hover:border-orange-200 hover:shadow-xl hover:shadow-orange-50">
                  <FiActivity className="mx-auto mb-4 text-orange-500 opacity-40 group-hover:opacity-100 transition-opacity" size={20} />
                  <p className="text-sm font-extrabold text-[#1B3942] uppercase tracking-tighter">{industry}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise & Values */}
      <section className="section-space">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Core Expertise"
              title="Built on Solid Principles"
              description="Our delivery model is centered around four pillars of excellence."
            />
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {[
              {
                icon: FiShield,
                title: 'High Accountability',
                text: 'We take full ownership of your compliance deadlines and reporting quality.',
              },
              {
                icon: FiUsers,
                title: 'Dedicated Teams',
                text: 'Specialists for every domain—from GST filing to legal ROC compliances.',
              },
              {
                icon: FiTrendingUp,
                title: 'Growth Strategy',
                text: 'Proactive planning that saves you taxes and prepares you for investment.',
              },
              {
                icon: FiAward,
                title: 'Ethics First',
                text: 'Absolute integrity in every advisory session and regulatory interaction.',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={index * 100}>
                  <article className="h-full p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-orange-100 transition-all duration-300">
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-orange-600 shadow-sm">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-[#1B3942] mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-500">{item.text}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage

