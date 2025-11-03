'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeroHeading, Tagline, BodyText } from '@/components/ui/typography'
import { getFeaturedProducts } from '@/lib/api'
import type { ProductWithCategory } from '@/lib/types'

export default function FeaturedProducts() {
  const [products, setProducts] = useState<ProductWithCategory[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFeaturedProducts() {
      try {
        const data = await getFeaturedProducts()
        setProducts(data.slice(0, 4)) // Show only 4 products
      } catch (error) {
        console.error('Error loading featured products:', error)
      } finally {
        setLoading(false)
      }
    }

    loadFeaturedProducts()
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF8E1] via-[#FFFBEA] to-[#FFD700]/10 font-sans border-b border-[#FFD700]/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Tagline className="mb-3 text-[#8B4513] text-sm md:text-base font-medium tracking-[0.2em] uppercase animate-fade-in-up">
            Bestsellers & Customer Favorites
          </Tagline>
          <HeroHeading className="mb-3 text-[#1a1a1a] text-3xl md:text-4xl font-light tracking-tight">
            Featured Products
          </HeroHeading>
          <BodyText className="text-[#666] text-base md:text-lg opacity-80 font-light leading-relaxed">
            Our most popular and loved products by customers.
          </BodyText>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-8 mb-12">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-[#FFD700]/30 animate-pulse"
              >
                <div className="aspect-square bg-gray-200" />
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-24 mx-auto" />
                  <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto" />
                  <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto" />
                  <div className="h-8 bg-gray-200 rounded w-full" />
                  <div className="h-10 bg-gray-200 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12 mb-12">
            <p className="text-gray-500 text-lg">No featured products available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-8 mb-12">
            {products.map((product, idx) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-[#FFD700]/30 hover:border-[#DA1414] relative animate-fade-in-up"
                style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
              >
                <div className="aspect-square overflow-hidden bg-[#FFF8E1] flex items-center justify-center relative">
                  <Image
                    src={product.image_url || "/placeholder.svg"}
                    alt={product.product_name}
                    width={250}
                    height={250}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    draggable={false}
                  />
                  <span className="absolute top-3 right-3 text-[#FFD700] text-xl opacity-80 group-hover:animate-sparkle pointer-events-none select-none">✨</span>
                </div>
                <div className="p-6 flex flex-col items-center text-center">
                  <h3
                    className="font-extrabold text-lg sm:text-xl text-[#B91C1C] mb-2 group-hover:text-[#DA1414] transition-colors font-serif"
                    style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                  >
                    {product.product_name}
                  </h3>
                  <p className="text-gray-600 mb-2 text-sm sm:text-base">Pack Size: {product.weight_volume || 'N/A'}</p>
                  <p className="text-sm text-[#666] mb-4 line-clamp-2">
                    {product.short_description}
                  </p>
                  <button className="w-full bg-[#DA1414] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#B91C1C] transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#228B22] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#1F7A1F] transition-colors"
            style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
          >
            View All Products
          </Link>
        </div>
      </div>
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
        .delay-100 { animation-delay: 0.1s; }
      `}</style>
    </section>
  )
}
