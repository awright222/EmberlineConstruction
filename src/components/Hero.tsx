import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaHref?: string
  backgroundImage?: string
}

export default function Hero({ title, subtitle, ctaText, ctaHref, backgroundImage }: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : undefined}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">
          {subtitle}
        </p>
        {ctaText && ctaHref && (
          <Link
            href={ctaHref}
            className="inline-block bg-ember text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-ember-dark transition-colors duration-200 shadow-lg"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  )
}
