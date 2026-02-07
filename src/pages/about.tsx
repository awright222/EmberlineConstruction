import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Emberline Construction</title>
        <meta name="description" content="Learn about Emberline Construction — our story, values, and commitment to quality craftsmanship in every project we build." />
      </Head>

      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-wood-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Emberline</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Where woodworking roots meet general contracting expertise.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                Emberline Construction grew out of a deep love for building things by hand. What started as a custom furniture 
                and woodworking studio — <a href="https://emberlinewoodworks.vercel.app" target="_blank" rel="noopener noreferrer" className="text-ember hover:text-ember-dark">Emberline Woodworks</a> — 
                naturally evolved as clients began asking for more: a kitchen to match their custom table, a deck to showcase their 
                outdoor furniture, a whole-home renovation that reflected their taste.
              </p>
              <p>
                We realized that the same principles that make great furniture — precision, quality materials, attention to detail, 
                and pride in the finished product — are exactly what make great construction. So we expanded, bringing that craftsman&apos;s 
                mentality to general contracting.
              </p>
              <p>
                Today, Emberline Construction handles projects of all sizes, from kitchen and bathroom remodels to full home 
                renovations and additions. But no matter the scale, the approach is the same: hands-on ownership, clear communication, 
                and a relentless focus on doing the job right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-ember/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-ember" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">Honest estimates, transparent communication, and work we stand behind.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-ember/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-ember" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Craftsmanship</h3>
              <p className="text-gray-600 text-sm">Fine woodworking roots that show in every joint, cut, and finish.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-ember/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-ember" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 text-sm">Proudly serving Portland and surrounding areas — our neighbors are our clients.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-ember/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-ember" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Reliability</h3>
              <p className="text-gray-600 text-sm">On time, on budget, and always available to answer your questions.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
