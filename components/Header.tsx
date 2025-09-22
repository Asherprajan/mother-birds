"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      } font-sans`}
      style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Mother Bird's Logo"
              width={120}
              height={50}
              className="h-10 lg:h-12 w-auto"
              draggable={false}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[#B91C1C] hover:text-[#DA1414] font-extrabold text-base transition-colors tracking-wide"
              style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
            >
              HOME
            </Link>
            <Link
              href="/products"
              className="text-[#B91C1C] hover:text-[#DA1414] font-extrabold text-base transition-colors tracking-wide"
              style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
            >
             PRODUCTS
            </Link>
            <Link
              href="/about"
              className="text-[#B91C1C] hover:text-[#DA1414] font-extrabold text-base transition-colors tracking-wide"
              style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className="text-[#B91C1C] hover:text-[#DA1414] font-extrabold text-base transition-colors tracking-wide"
              style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
            >
                CONTACT
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#B91C1C] hover:text-[#DA1414] transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#FFD700]/30 shadow-lg animate-fade-in-up"
            style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
          >
            <nav className="py-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-3 text-[#B91C1C] hover:text-[#DA1414] hover:bg-[#FFF8E1] font-extrabold text-base rounded-lg transition-colors tracking-wide"
                onClick={() => setIsMenuOpen(false)}
                style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="block px-4 py-3 text-[#B91C1C] hover:text-[#DA1414] hover:bg-[#FFF8E1] font-extrabold text-base rounded-lg transition-colors tracking-wide"
                onClick={() => setIsMenuOpen(false)}
                style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
              >
                Categories
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 text-[#B91C1C] hover:text-[#DA1414] hover:bg-[#FFF8E1] font-extrabold text-base rounded-lg transition-colors tracking-wide"
                onClick={() => setIsMenuOpen(false)}
                style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 text-[#B91C1C] hover:text-[#DA1414] hover:bg-[#FFF8E1] font-extrabold text-base rounded-lg transition-colors tracking-wide"
                onClick={() => setIsMenuOpen(false)}
                style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
      {/* Animations for mobile menu */}
      <style jsx>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(-20px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in-up { animation: fade-in-up 0.4s cubic-bezier(.4,0,.2,1) both; }
      `}</style>
    </header>
  )
}
