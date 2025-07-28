'use client'

import { useEffect, useRef, useState } from 'react'
import ProductCard from './ProductCard'

const products = [
  {
    title: "Premium Shea Butter",
    description: "Grade A – Unrefined, Ivory/Yellowish Tint Cold-pressed and filtered for purity. Ideal for cosmetics, skincare, and pharmaceuticals. Moisture content <0.05%, free fatty acid ≤3%. No additives or preservatives.",
    image: "/images/products/shea-butter.jpg",
    imageAlt: "Premium Grade A Shea Butter in natural ivory color"
  },
  {
    title: "Organic Shea Nuts",
    description: "Grade A – Cleaned, Sun-Dried, and Fully Matured Harvested from wild-grown trees in Ghana and Benin. Low moisture (<7%), high fat content, and minimal impurities (<0.5%). Suitable for processing into butter or further industrial use.",
    image: "/images/products/shea-nuts.jpg",
    imageAlt: "Organic Grade A shea nuts, cleaned and sun-dried"
  },
  {
    title: "Premium Cashews",
    description: "WW320 – White Whole Grade, Premium Export Quality Uniform kernel size, creamy white colour, moisture <5%, and nut count per kg: 300–320. Ideal for roasting, confectionery, and retail packaging.",
    image: "/images/products/cashew-nuts.jpg",
    imageAlt: "Premium WW320 white whole cashews"
  },
  {
    title: "Organic Soybeans",
    description: "Grade 1 – Non-GMO, Food and Feed Grade Sourced from smallholder farms in northern Ghana. Protein content ≥35%, moisture ≤12%, foreign matter ≤1%. High oil yield and suitable for human and animal consumption",
    image: "/images/products/soya-beans.jpg",
    imageAlt: "Organic Grade 1 non-GMO soybeans"
  }
]

export default function ProductsSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(products.length).fill(false))
  const [headerVisible, setHeaderVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Handle header visibility
          if (entry.target === headerRef.current) {
            setHeaderVisible(entry.isIntersecting)
          }
          
          // Check each card and reset/trigger animations
          cardsRef.current.forEach((cardRef, index) => {
            if (entry.target === cardRef) {
              if (entry.isIntersecting) {
                // Card is entering viewport - trigger staggered animation
                setTimeout(() => {
                  setVisibleCards(prev => {
                    const newVisible = [...prev]
                    newVisible[index] = true
                    return newVisible
                  })
                }, index * 150) // Stagger animation by 150ms per card
              } else {
                // Card is leaving viewport - reset animation immediately
                setVisibleCards(prev => {
                  const newVisible = [...prev]
                  newVisible[index] = false
                  return newVisible
                })
              }
            }
          })
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px' // Trigger when 100px before entering viewport
      }
    )

    // Observe header
    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    // Observe each card
    cardsRef.current.forEach(cardRef => {
      if (cardRef) observer.observe(cardRef)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="products" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Animation */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-earth-800 mb-6">
            Our Premium Products
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated selection of sustainable agricultural products, 
            each one representing the finest quality from African soil to your doorstep.
          </p>
        </div>
        
        {/* Products Grid with Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className={`transition-all duration-700 ease-out ${
                visibleCards[index]
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-16 scale-95'
              }`}
              style={{
                transitionDelay: visibleCards[index] ? '0ms' : `${index * 100}ms`
              }}
            >
              <ProductCard
                title={product.title}
                description={product.description}
                imageUrl={product.image}
                imageAlt={product.imageAlt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}