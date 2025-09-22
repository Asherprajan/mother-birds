import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, MessageCircle, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="bg-black text-white font-sans"
      style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/placeholder.svg?height=50&width=120&text=Mother+Bird's+Logo"
              alt="Mother Bird's Logo"
              width={120}
              height={50}
              className="h-12 w-auto mb-4 brightness-0 invert"
              draggable={false}
            />
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              Traditional taste, trusted quality. Bringing authentic flavors to your table since decades.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-[#FFD700] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#FFD700] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#FFD700] transition-colors"
                aria-label="Message"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFD700] tracking-wide">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors text-base"
                  style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-white transition-colors text-base"
                  style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors text-base"
                  style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors text-base"
                  style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFD700] tracking-wide">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products?category=Pickles%20%26%20Chutney"
                  className="text-gray-300 hover:text-white transition-colors text-base"
                  style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
                >
                  Pickles & Chutney
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Sauces%20%26%20Ketchup"
                  className="text-gray-300 hover:text-white transition-colors text-base"
                  style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
                >
                  Sauces & Ketchup
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Jams"
                  className="text-gray-300 hover:text-white transition-colors text-base"
                  style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
                >
                  Jams
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Fruit%20Syrups%20%26%20Mixes"
                  className="text-gray-300 hover:text-white transition-colors text-base"
                  style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
                >
                  Fruit Syrups & Mixes
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Other%20Repacked%20Products"
                  className="text-gray-300 hover:text-white transition-colors text-base"
                  style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
                >
                  Other Repacked Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFD700] tracking-wide">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#DA1414]" />
                <span className="text-gray-300 text-base">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#DA1414]" />
                <span className="text-gray-300 text-base">info@motherbirds.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={18} className="text-[#228B22]" />
                <span className="text-gray-300 text-base">WhatsApp Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Mother Bird's. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
              >
                Refund Policy
              </Link>
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
    </footer>
  )
}
