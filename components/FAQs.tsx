"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { HeroHeading, Tagline, BodyText } from '@/components/ui/typography'

export default function FAQs() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Do you offer wholesale pricing?',
      answer: 'Yes, we offer competitive wholesale pricing for bulk orders. Our minimum order quantity varies by product. Please contact us for detailed wholesale pricing and terms.'
    },
    {
      question: 'Where are you located?',
      answer: 'Mother Bird\'s is headquartered in India with distribution centers across major cities. We serve customers pan-India through our network of distributors and online platforms.'
    },
    {
      question: 'How do I place a bulk order?',
      answer: 'You can place bulk orders by contacting our sales team through WhatsApp, phone, or email. We\'ll provide you with a detailed quotation and arrange delivery as per your requirements.'
    },
    {
      question: 'What is the shelf life of your products?',
      answer: 'Our products have varying shelf lives depending on the category. Pickles and preserves typically last 12-18 months, while sauces and syrups last 18-24 months when stored properly.'
    },
    {
      question: 'Do you provide private labeling services?',
      answer: 'Yes, we offer private labeling and co-packing services for businesses looking to launch their own food product lines. Contact us to discuss your requirements.'
    },
    {
      question: 'What are your payment terms?',
      answer: 'We accept various payment methods including bank transfers, cheques, and digital payments. For wholesale customers, we offer flexible payment terms based on order volume and relationship.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF8E1] via-[#FFFBEA] to-[#FFD700]/10 font-sans border-b border-[#FFD700]/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Tagline className="mb-3 text-[#8B4513] text-sm md:text-base font-medium tracking-[0.2em] uppercase animate-fade-in-up block"
            style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}>
            Need Help?
          </Tagline>
          <HeroHeading className="mb-3 text-[#1a1a1a] text-3xl md:text-4xl font-light tracking-tight"
            style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}>
            Frequently Asked Questions
          </HeroHeading>
          <BodyText className="text-[#666] text-base md:text-lg opacity-80 font-light leading-relaxed"
            style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}>
            Find answers to common questions about our products and services.
          </BodyText>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 animate-fade-in-up"
              style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full bg-white rounded-2xl p-6 text-left shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-[#FFD700]/30 hover:border-[#DA1414] flex items-center justify-between group`}
              >
                <h3 className="font-extrabold text-lg sm:text-xl text-[#B91C1C] pr-4 group-hover:text-[#DA1414] transition-colors font-serif"
                  style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronUp size={24} className="text-[#DA1414] flex-shrink-0" />
                ) : (
                  <ChevronDown size={24} className="text-[#DA1414] flex-shrink-0" />
                )}
              </button>
              {openFAQ === index && (
                <div className="bg-white rounded-b-2xl px-6 pb-6 shadow-lg border-x-2 border-b-2 border-[#FFD700]/30">
                  <p className="text-[#444] opacity-80 font-sans leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Custom Animations for sparkle and fade-in-up */}
      <style jsx>{`
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
