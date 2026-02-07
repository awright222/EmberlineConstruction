import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TestimonialCard from '@/components/TestimonialCard'
import testimonials from '@/data/testimonials.json'

interface Testimonial {
  id: number
  name: string
  project: string
  quote: string
  rating: number
}

export default function Testimonials() {
  const allTestimonials = testimonials as Testimonial[]

  return (
    <>
      <Head>
        <title>Testimonials | Emberline Construction</title>
        <meta name="description" content="Read what our clients say about working with Emberline Construction on their home renovation and construction projects." />
      </Head>

      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-wood-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from the homeowners we&apos;ve had the privilege to work with.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.map((t) => (
              <TestimonialCard
                key={t.id}
                name={t.name}
                project={t.project}
                quote={t.quote}
                rating={t.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Submit Review */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Worked With Us?</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            We&apos;d love to hear about your experience. Your feedback helps us improve and helps future clients make informed decisions.
          </p>
          <a
            href="mailto:info@emberlineconstruction.com?subject=Testimonial"
            className="inline-block border-2 border-ember text-ember px-8 py-3 rounded-lg font-semibold hover:bg-ember hover:text-white transition-colors duration-200"
          >
            Share Your Experience
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
