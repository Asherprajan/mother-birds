import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { HeroHeading, Tagline, BodyText } from '@/components/ui/typography'

export default function Partners() {
  // Only unique partners for a smooth loop
  const uniquePartners = [
    { name: 'BigBasket', logo: '/placeholder.svg?height=60&width=120&text=BigBasket' },
    { name: 'Grofers', logo: '/placeholder.svg?height=60&width=120&text=Grofers' },
    { name: 'Amazon Fresh', logo: '/placeholder.svg?height=60&width=120&text=Amazon' },
    { name: 'Flipkart', logo: '/placeholder.svg?height=60&width=120&text=Flipkart' },
    { name: 'Reliance Fresh', logo: '/placeholder.svg?height=60&width=120&text=Reliance' },
    { name: "Spencer's", logo: '/placeholder.svg?height=60&width=120&text=Spencers' },
    { name: 'Dmart', logo: '/placeholder.svg?height=60&width=120&text=Dmart' },
    { name: 'Dmart', logo: '/placeholder.svg?height=60&width=120&text=Dmart' },
    { name: 'Dmart', logo: '/placeholder.svg?height=60&width=120&text=Dmart' },
    { name: 'Dmart', logo: '/placeholder.svg?height=60&width=120&text=Dmart' },
    { name: 'Dmart', logo: '/placeholder.svg?height=60&width=120&text=Dmart' },
    { name: 'Dmart', logo: '/placeholder.svg?height=60&width=120&text=Dmart' },
    { name: 'Dmart', logo: '/placeholder.svg?height=60&width=120&text=Dmart' },
    { name: 'Dmart', logo: '/placeholder.svg?height=60&width=120&text=Dmart' },
    { name: 'Dmart', logo: '/placeholder.svg?height=60&width=120&text=Dmart' },
    { name: 'Dmart', logo: '/placeholder.svg?height=60&width=120&text=Dmart' },
    { name: 'Dmart', logo: '/placeholder.svg?height=60&width=120&text=Dmart' },
    { name: 'Dmart', logo: '/placeholder.svg?height=60&width=120&text=Dmart' },
  ]
  // Repeat the list to make the loop seamless
  const partners = [...uniquePartners, ...uniquePartners]

  const marqueeRef = useRef<HTMLDivElement>(null)

  // Pause on hover (optional, for accessibility)
  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return
    const handleMouseEnter = () => {
      marquee.style.animationPlayState = 'paused'
    }
    const handleMouseLeave = () => {
      marquee.style.animationPlayState = 'running'
    }
    marquee.addEventListener('mouseenter', handleMouseEnter)
    marquee.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      marquee.removeEventListener('mouseenter', handleMouseEnter)
      marquee.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <Tagline className="mb-4 text-[#8B4513] text-sm md:text-base font-medium tracking-[0.2em] uppercase">
            Trusted by food suppliers across India
          </Tagline>
          <HeroHeading className="mb-3 text-[#1a1a1a] text-3xl md:text-4xl font-light tracking-tight">
            Our Trusted Partners
          </HeroHeading>
        
          <BodyText className="text-[#666] text-base md:text-lg opacity-80 font-light leading-relaxed">
            We are proud to be associated with India's leading retailers and distributors.
          </BodyText>
        </div>
        <div className="relative overflow-x-hidden">
          <div
            ref={marqueeRef}
            className="flex gap-8 items-center min-w-[600px] md:min-w-0 animate-partner-marquee"
            style={{
              animation: 'partner-marquee 30s linear infinite',
              willChange: 'transform',
            }}
          >
            {partners.map((partner, index) => (
              <div key={index} className="flex-shrink-0 flex justify-center">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 rounded-lg shadow-md bg-white/80 border border-[#FFD700]"
                  style={{
                    fontFamily: 'var(--font-poppins), var(--font-playfair-display), sans-serif'
                  }}
                />
              </div>
            ))}
          </div>
          <style jsx>{`
            @keyframes partner-marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-partner-marquee {
              width: max-content;
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}
