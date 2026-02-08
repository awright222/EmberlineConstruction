import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import services from '@/data/services.json'
import testimonials from '@/data/testimonials.json'

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

export default function Home() {
  const featuredTestimonials = (testimonials as Array<{id: number; name: string; project: string; quote: string; rating: number}>).slice(0, 3)
  const featuredServices = (services as Array<{id: string; icon: string; title: string; description: string; features: string[]}>).slice(0, 3)

  return (
    <>
      <Head>
        <title>Emberline Construction | Quality General Contracting</title>
        <meta
          name="description"
          content="Emberline Construction — quality general contracting with a craftsman's eye for detail. Kitchen remodels, bathroom renovations, home additions, and more in Portland, OR."
        />
      </Head>

      <Header />

      {/* Hero */}
      <Hero
        title="Built with Purpose. Finished with Pride."
        subtitle="Quality general contracting with a craftsman's eye for detail. From renovations to new builds, we bring your vision to life."
        ctaText="Get a Free Estimate"
        ctaHref="/estimate"
        backgroundImage="/images/homeimages/premium-kitchen.jpg"
      />

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From kitchens to custom builds, we handle every phase of your project with precision and care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                icon={serviceIcons[service.icon] || serviceIcons['custom']}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block border-2 border-wood text-wood px-8 py-3 rounded-lg font-semibold hover:bg-wood hover:text-white transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Emberline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Emberline?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-ember mb-2">100%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Hands-On Ownership</div>
              <p className="text-gray-600">The owner is on every job site, ensuring quality at every stage.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-ember mb-2">Licensed</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">& Fully Insured</div>
              <p className="text-gray-600">Complete peace of mind with proper licensing and insurance coverage.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-ember mb-2">Craftsman</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Quality Standards</div>
              <p className="text-gray-600">Rooted in fine woodworking, we bring artisan-level detail to every build.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((t) => (
              <TestimonialCard
                key={t.id}
                name={t.name}
                project={t.project}
                quote={t.quote}
                rating={t.rating}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/testimonials"
              className="inline-block border-2 border-wood text-wood px-8 py-3 rounded-lg font-semibold hover:bg-wood hover:text-white transition-colors duration-200"
            >
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-wood-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Get a free, no-obligation estimate. We&apos;ll discuss your vision, timeline, and budget — then craft a plan to make it happen.
          </p>
          <Link
            href="/estimate"
            className="inline-block bg-ember text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-ember-dark transition-colors duration-200 shadow-lg"
          >
            Request Your Free Estimate
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
