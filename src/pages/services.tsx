import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceCard from '@/components/ServiceCard'
import services from '@/data/services.json'

const serviceIcons: Record<string, React.ReactNode> = {
  kitchen: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 6h18M3 14h18M3 18h18M8 6v12M16 6v12" />
    </svg>
  ),
  bathroom: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v2M4 12h16M6 12v5a3 3 0 003 3h6a3 3 0 003-3v-5" />
    </svg>
  ),
  additions: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" />
    </svg>
  ),
  home: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  deck: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  custom: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  ),
}

interface Service {
  id: string
  icon: string
  title: string
  description: string
  features: string[]
}

export default function Services() {
  const allServices = services as Service[]

  return (
    <>
      <Head>
        <title>Services | Emberline Construction</title>
        <meta name="description" content="Explore our full range of general contracting services — kitchen remodels, bathroom renovations, home additions, decks, and custom finish work." />
      </Head>

      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-wood-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From concept to completion, we deliver quality craftsmanship across every type of residential project.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service) => (
              <div key={service.id} className="flex flex-col">
                <ServiceCard
                  icon={serviceIcons[service.icon] || serviceIcons['custom']}
                  title={service.title}
                  description={service.description}
                />
                {/* Feature list */}
                <div className="mt-4 px-6">
                  <ul className="space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-ember mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Not Sure Where to Start?</h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto mb-8">
            We&apos;re happy to discuss your ideas and help you figure out the best approach. Reach out for a free consultation.
          </p>
          <Link
            href="/estimate"
            className="inline-block bg-ember text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-ember-dark transition-colors duration-200"
          >
            Book Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
