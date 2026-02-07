interface TestimonialCardProps {
  name: string
  project: string
  quote: string
  rating: number
}

export default function TestimonialCard({ name, project, quote, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      {/* Stars */}
      <div className="flex space-x-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-ember' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Attribution */}
      <div>
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-wood">{project}</p>
      </div>
    </div>
  )
}
