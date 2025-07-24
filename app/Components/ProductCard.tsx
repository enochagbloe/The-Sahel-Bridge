import Image from 'next/image';
import React from 'react'

interface ProductCardsProps {
    title: string;
    description: string;
    imageUrl?: string;
}

const ProductCard = ({title, description, imageUrl}: ProductCardsProps) => {
  return (
    <div className="card-hover bg-white rounded-2xl shadow-lg overflow-hidden border border-earth-100">
      {/* Image placeholder */}
      <div className="h-48 bg-gradient-to-br from-earth-200 to-sage-200 flex items-center justify-center">
        {imageUrl ? (
          <Image src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-earth-400 text-center p-6">
            <div className="w-16 h-16 mx-auto mb-3 bg-earth-300 rounded-full flex items-center justify-center">
              <span className="text-2xl">🌱</span>
            </div>
            <span className="text-sm font-medium">{title}</span>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-earth-800 mb-3">
          {title}
        </h3>
        <p className="text-earth-600 leading-relaxed mb-4">
          {description}
        </p>
        <button className="text-sage-600 hover:text-sage-700 font-medium text-sm flex items-center group transition-colors">
          Learn More
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}


export default ProductCard
