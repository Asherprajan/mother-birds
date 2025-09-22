"use client"

import { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { HeroHeading, Tagline, BodyText } from '@/components/ui/typography'

export default function ConnectWithUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF8E1] via-[#FFFBEA] to-[#FFD700]/10 font-sans border-b border-[#FFD700]/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Tagline
            className="mb-3 text-[#8B4513] text-sm md:text-base font-medium tracking-[0.2em] uppercase animate-fade-in-up block"
            style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
          >
            Let's Connect
          </Tagline>
          <HeroHeading
            className="mb-3 text-[#1a1a1a] text-3xl md:text-4xl font-light tracking-tight"
            style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
          >
            Connect With Us
          </HeroHeading>
          <BodyText
            className="text-[#666] text-base md:text-lg opacity-80 font-light leading-relaxed"
            style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
          >
            Get in touch for wholesale inquiries, partnerships, or any questions.
          </BodyText>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-[#FFD700]/30 hover:border-[#DA1414] relative animate-fade-in-up"
            style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}>
            <div className="p-8 md:p-10">
              <h3 className="font-extrabold text-lg sm:text-2xl text-[#B91C1C] mb-6 group-hover:text-[#DA1414] transition-colors font-serif"
                style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-[#DA1414]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent font-sans"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-[#DA1414]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent font-sans"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent font-sans"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message <span className="text-[#DA1414]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent resize-vertical font-sans"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#DA1414] text-white py-3 px-6 rounded-lg font-bold hover:bg-[#B91C1C] transition-colors flex items-center justify-center gap-2"
                  style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </div>
            {/* Decorative sparkle */}
            <span className="absolute top-3 right-3 text-[#FFD700] text-xl opacity-80 animate-sparkle pointer-events-none select-none">✨</span>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-[#FFD700]/30 hover:border-[#DA1414] relative animate-fade-in-up"
              style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}>
              <div className="p-8 md:p-10">
                <h3 className="font-extrabold text-lg sm:text-2xl text-[#B91C1C] mb-6 group-hover:text-[#DA1414] transition-colors font-serif"
                  style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#DA1414] p-3 rounded-lg flex items-center justify-center">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">Phone</h4>
                      <p className="text-gray-600 font-sans">+91 98765 43210</p>
                      <p className="text-gray-600 font-sans">+91 87654 32109</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-[#228B22] p-3 rounded-lg flex items-center justify-center">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">Email</h4>
                      <p className="text-gray-600 font-sans">info@motherbirds.com</p>
                      <p className="text-gray-600 font-sans">sales@motherbirds.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FFD700] p-3 rounded-lg flex items-center justify-center">
                      <MapPin size={24} className="text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">Address</h4>
                      <p className="text-gray-600 font-sans">
                        123 Food Street, Industrial Area<br />
                        Mumbai, Maharashtra 400001<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative sparkle */}
              <span className="absolute top-3 right-3 text-[#FFD700] text-xl opacity-80 animate-sparkle pointer-events-none select-none">✨</span>
            </div>
          </div>
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
