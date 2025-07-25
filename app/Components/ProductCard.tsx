import { useState } from 'react'
import Image from 'next/image'

interface ProductCardProps {
  title: string
  description: string
  imageUrl?: string
  imageAlt?: string
}

export default function ProductCard({ title, description, imageUrl, imageAlt }: ProductCardProps) {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  // Function to get product icon based on title
  const getProductIcon = (title: string) => {
    const lowerTitle = title.toLowerCase()
    if (lowerTitle.includes('shea butter')) return '🧴'
    if (lowerTitle.includes('shea nuts')) return '🥥'
    if (lowerTitle.includes('cashew')) return '🥜'
    if (lowerTitle.includes('soybean')) return '🌾'
    return '🌱'
  }

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-earth-100 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 cursor-pointer">
      {/* Image section with hover effects */}
      <div className="relative h-48 bg-gradient-to-br from-earth-200 to-sage-200 overflow-hidden">
        {!imageError && imageUrl ? (
          <>
            <Image
              src={imageUrl}
              alt={imageAlt || title}
              width={400}
              height={192}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={handleImageError}
              priority={true}
            />
            {/* Image overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </>
        ) : (
          // Fallback design when no image or image fails to load
          <div className="flex items-center justify-center h-full text-earth-400 transition-all duration-500 group-hover:text-earth-600">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-3 bg-earth-300 rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-earth-400 group-hover:scale-110 group-hover:rotate-12">
                <span className="text-2xl transition-transform duration-500 group-hover:scale-125">
                  {getProductIcon(title)}
                </span>
              </div>
              <span className="text-sm font-medium">{title}</span>
            </div>
          </div>
        )}
        
        {/* Floating badge on hover */}
        <div className="absolute top-4 right-4 bg-sage-600 text-white px-3 py-1 rounded-full text-xs font-medium transform translate-x-12 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          Premium
        </div>

        {/* Quality indicator */}
        <div className="absolute top-4 left-4 bg-white/90 text-earth-800 px-2 py-1 rounded-full text-xs font-semibold transform -translate-x-12 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          Grade A
        </div>
      </div>
      
      {/* Content with hover effects */}
      <div className="p-6 relative">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-sage-50/50 to-earth-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-b-2xl" />
        
        <div className="relative z-10">
          <h3 className="font-display text-xl font-semibold text-earth-800 mb-3 transition-colors duration-300 group-hover:text-sage-700">
            {title}
          </h3>
          <p className="text-earth-600 leading-relaxed mb-4 transition-colors duration-300 group-hover:text-earth-700 text-sm">
            {description}
          </p>
          
          {/* Product specifications hint */}
          <div className="flex flex-wrap gap-1 mb-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
            {description.includes('Grade A') && (
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Grade A</span>
            )}
            {description.includes('Organic') && (
              <span className="text-xs bg-earth-100 text-earth-700 px-2 py-1 rounded">Organic</span>
            )}
            {description.includes('Premium') && (
              <span className="text-xs bg-sage-100 text-sage-700 px-2 py-1 rounded">Premium</span>
            )}
          </div>
          
          {/* Animated learn more button */}
          <button className="text-sage-600 hover:text-sage-700 font-medium text-sm flex items-center group/button transition-all duration-300 group-hover:text-sage-800">
            <span className="transition-transform duration-300 group-hover/button:translate-x-1">
              Learn More
            </span>
            <svg 
              className="w-4 h-4 ml-1 transition-all duration-300 group-hover/button:translate-x-2 group-hover/button:scale-110" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Subtle border animation */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-sage-500 to-earth-500 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-left" />
      </div>
      
      {/* Card shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-0 -left-4 w-8 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-transform duration-1000 group-hover:translate-x-full" />
      </div>
    </div>
  )
}