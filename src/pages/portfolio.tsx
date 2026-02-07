import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PortfolioCard from '@/components/PortfolioCard'
import portfolio from '@/data/portfolio.json'

interface PortfolioItem {
  id: number
  title: string
  category: string
  description: string
  images: string[]
}

export default function Portfolio() {
  const allProjects = portfolio as PortfolioItem[]

  return (
    <>
      <Head>
        <title>Portfolio | Emberline Construction</title>
        <meta name="description" content="Browse our portfolio of completed kitchen remodels, bathroom renovations, home additions, decks, and custom builds." />
      </Head>

      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-wood-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of our recent projects. Each one reflects our commitment to quality craftsmanship and client satisfaction.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {allProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project) => (
                <PortfolioCard
                  key={project.id}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  images={project.images}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Portfolio images coming soon.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
