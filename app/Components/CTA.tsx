export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-sage-600 to-sage-700">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Experience Pure Nature
        </h2>
        <p className="text-lg md:text-xl text-sage-100 mb-8 leading-relaxed">
          Join thousands of satisfied customers who trust us for premium, 
          sustainable agricultural products. Start your journey with nature&apos;s finest today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-sage-700 hover:bg-sage-50 font-semibold px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg">
            Get Free Quote
          </button>
          <button className="border-2 border-white text-black hover:bg-white hover:text-sage-700 font-semibold px-10 py-4 rounded-lg transition-all duration-300 text-lg">
            Shop Now
          </button>
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-sage-100">
          <div className="flex items-center">
            <span className="text-2xl mr-2">🌱</span>
            <span>100% Organic</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">🤝</span>
            <span>Fair Trade</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">🌍</span>
            <span>Sustainable</span>
          </div>
        </div>
      </div>
    </section>
  )
}