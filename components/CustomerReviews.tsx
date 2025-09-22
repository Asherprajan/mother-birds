"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

export default function CustomerReviews() {
  const [currentReview, setCurrentReview] = useState(0)

  const reviews = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      review: "Mother Bird's pickles remind me of my grandmother's recipes. The taste is authentic and the quality is exceptional. I've been ordering for my family for over 2 years now.",
      image: '/placeholder.svg?height=80&width=80&text=PS'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      review: "As a retailer, I can confidently say that Mother Bird's products have the best shelf life and customer satisfaction. Their wholesale support is excellent too.",
      image: '/placeholder.svg?height=80&width=80&text=RK'
    },
    {
      name: 'Anita Patel',
      location: 'Ahmedabad',
      rating: 4,
      review: "The fruit jams are absolutely delicious! My kids love them and I feel good knowing they're made with quality ingredients. Highly recommended for families.",
      image: '/placeholder.svg?height=80&width=80&text=AP'
    }
  ]

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF8E1] via-[#FFFBEA] to-[#FFD700]/10 font-sans border-b border-[#FFD700]/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="mb-3 text-[#8B4513] text-sm md:text-base font-medium tracking-[0.2em] uppercase animate-fade-in-up block"
            style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}>
            Hear From Our Happy Customers
          </span>
          <h2 className="mb-3 text-[#1a1a1a] text-3xl md:text-4xl font-light tracking-tight"
            style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}>
            Customer Reviews
          </h2>
          <p className="text-[#666] text-base md:text-lg opacity-80 font-light leading-relaxed"
            style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}>
            Real stories and feedback from our valued customers.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div
            className="relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-[#FFD700]/30 hover:border-[#DA1414] animate-fade-in-up"
            style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
          >
            <div className="flex flex-col items-center text-center p-8 md:p-12">
              <div className="relative">
                <Image
                  src={reviews[currentReview].image || "/placeholder.svg"}
                  alt={reviews[currentReview].name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-4 border-[#FFD700]/40 shadow"
                  draggable={false}
                />
                {/* Decorative sparkle */}
                <span className="absolute top-0 right-0 text-[#FFD700] text-lg opacity-80 group-hover:animate-sparkle pointer-events-none select-none">✨</span>
              </div>
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={`${
                      i < reviews[currentReview].rating ? 'text-[#FFD700] fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl text-[#444] mb-6 italic font-serif"
                style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                "{reviews[currentReview].review}"
              </blockquote>
              <div>
                <h4 className="font-extrabold text-lg sm:text-xl text-[#B91C1C] mb-1 group-hover:text-[#DA1414] transition-colors font-serif"
                  style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                  {reviews[currentReview].name}
                </h4>
                <p className="text-sm sm:text-base text-[#444] opacity-80 font-sans">
                  {reviews[currentReview].location}
                </p>
              </div>
            </div>
            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow border border-[#FFD700]/40"
              aria-label="Previous review"
              type="button"
            >
              <ChevronLeft size={24} className="text-[#DA1414]" />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow border border-[#FFD700]/40"
              aria-label="Next review"
              type="button"
            >
              <ChevronRight size={24} className="text-[#DA1414]" />
            </button>
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors border border-[#FFD700]/40 ${
                  index === currentReview ? 'bg-[#DA1414]' : 'bg-gray-300'
                }`}
                aria-label={`Go to review ${index + 1}`}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
      {/* Custom Animations for sparkle and fade-in-up */}
      <style jsx>{`
        @keyframes sparkle {
          0%, 100% { opacity: 0.7; transform: scale(1);}
          50% { opacity: 1; transform: scale(1.3) rotate(-10deg);}
        }
        .animate-sparkle { animation: sparkle 1.5s ease-in-out infinite; }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in-up { animation: fade-in-up 1.2s cubic-bezier(.4,0,.2,1) both; }
      `}</style>
    </section>
  )
}
