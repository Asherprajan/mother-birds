import Image from 'next/image'
import { HeroHeading, Tagline, BodyText } from '@/components/ui/typography'

export default function Awards() {
  const awards = [
    {
      title: 'Best Food Product 2023',
      organization: 'Indian Food Awards',
      image: '/placeholder.svg?height=100&width=100&text=Award+1'
    },
    {
      title: 'Quality Excellence',
      organization: 'Food Safety Standards',
      image: '/placeholder.svg?height=100&width=100&text=Award+2'
    },
    {
      title: 'Customer Choice Award',
      organization: 'Retail Association',
      image: '/placeholder.svg?height=100&width=100&text=Award+3'
    },
    {
      title: 'ISO 22000 Certified',
      organization: 'International Standards',
      image: '/placeholder.svg?height=100&width=100&text=ISO+22000'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF8E1] via-[#FFFBEA] to-[#FFD700]/10 font-sans border-b border-[#FFD700]/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Tagline className="mb-3 text-[#8B4513] text-sm md:text-base font-medium tracking-[0.2em] uppercase animate-fade-in-up"
            style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}>
            Our Achievements
          </Tagline>
          <HeroHeading className="mb-3 text-[#1a1a1a] text-3xl md:text-4xl font-light tracking-tight"
            style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}>
            Awards & Recognition
          </HeroHeading>
          <BodyText className="text-[#666] text-base md:text-lg opacity-80 font-light leading-relaxed"
            style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}>
            Recognized for our commitment to quality and excellence
          </BodyText>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-[#FFD700]/30 hover:border-[#DA1414] relative animate-fade-in-up"
              style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
            >
              <div className="aspect-square overflow-hidden bg-[#FFF8E1] flex items-center justify-center relative">
                <Image
                  src={award.image || "/placeholder.svg"}
                  alt={award.title}
                  width={100}
                  height={100}
                  className="w-20 h-20 object-contain group-hover:scale-105 transition-transform duration-300"
                  draggable={false}
                />
                {/* Decorative sparkle */}
                <span className="absolute top-3 right-3 text-[#FFD700] text-xl opacity-80 group-hover:animate-sparkle pointer-events-none select-none">✨</span>
              </div>
              <div className="p-5 flex flex-col items-center text-center">
                <h3 className="font-extrabold text-lg sm:text-xl text-[#B91C1C] mb-2 group-hover:text-[#DA1414] transition-colors font-serif"
                  style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                  {award.title}
                </h3>
                <p className="text-sm sm:text-base text-[#444] opacity-80 font-sans">
                  {award.organization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Custom Animations for sparkle */}
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
