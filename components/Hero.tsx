'use client'

import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { HeroHeading, Tagline } from '@/components/ui/typography'
import { motion } from 'framer-motion'

/**
 * ✨ Minimal Hero section with background video/image support - fully responsive with Framer Motion animations.
 */
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video/Image Container */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Background Image (fallback) */}
        <img
          src="/images/hero-bg.jpg"
          alt="Mother Bird's Background"
          className="w-full h-full object-cover"
          draggable={false}
        />
        
        {/* Background Video (optional - uncomment to use) */}
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          <source src="/videos/hero-bg.webm" type="video/webm" />
        </video> */}
        
        {/* Overlay for better text readability */}
        <motion.div 
          className="absolute inset-0 bg-black/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center h-full w-full px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Minimal Brand Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-white/50 rounded-full px-4 py-2 mb-8 shadow-lg"
            variants={badgeVariants as any}
          >
            <motion.div 
              className="w-3 h-3 bg-[#FFD700] rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <span className="text-xs font-medium text-gray-800 tracking-wide uppercase">Est. 2000</span>
          </motion.div>

          {/* Main Headline - Minimal */}
          <motion.div variants={itemVariants as any}>
            <HeroHeading className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-none text-white mb-6 drop-shadow-2xl">
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                MOTHER
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-[#FFD700] via-[#FFD700] to-[#FFD700] bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                BIRD'S
              </motion.span>
            </HeroHeading>
          </motion.div>

          {/* Minimal Tagline */}
          <motion.div variants={itemVariants as any}>    
            <Tagline className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-white/90 font-light tracking-wide mb-8 drop-shadow-lg">
              Traditional Taste • Modern Joy
            </Tagline>
          </motion.div>

          {/* Single CTA Button */}
          <motion.div variants={itemVariants as any}>
            <Link href="/products">
              <motion.div
                className="group inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm text-gray-900 px-6 xs:px-8 sm:px-10 py-3 xs:py-4 rounded-full font-medium text-sm xs:text-base sm:text-lg shadow-xl border border-white/50 cursor-pointer"
                variants={buttonVariants as any}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Play className="w-4 h-4 xs:w-5 xs:h-5" />
                </motion.div>
                Explore Now
                <motion.div
                  className="w-4 h-4 xs:w-5 xs:h-5"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-full h-full" />
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
        }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div 
          className="w-5 h-8 border border-white/50 rounded-full flex justify-center bg-white/20 backdrop-blur-sm"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-1 h-2 bg-white/70 rounded-full mt-2"
            animate={{ 
              opacity: [1, 0.5, 1],
              scale: [1, 0.8, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </motion.div>
      </motion.div>

      {/* Responsive Breakpoints for all devices */}
      <style jsx global>{`
        /* Extra small devices (phones, 320px and up) */
        @media (min-width: 320px) {
          .xs\\:text-4xl { font-size: 2.25rem; }
          .xs\\:text-xl { font-size: 1.25rem; }
          .xs\\:px-8 { padding-left: 2rem; padding-right: 2rem; }
          .xs\\:py-4 { padding-top: 1rem; padding-bottom: 1rem; }
          .xs\\:text-base { font-size: 1rem; }
          .xs\\:w-5 { width: 1.25rem; }
          .xs\\:h-5 { height: 1.25rem; }
        }
        
        /* Small devices (landscape phones, 576px and up) */
        @media (min-width: 576px) {
          .sm\\:text-5xl { font-size: 3rem; }
          .sm\\:text-2xl { font-size: 1.5rem; }
          .sm\\:px-10 { padding-left: 2.5rem; padding-right: 2.5rem; }
          .sm\\:text-lg { font-size: 1.125rem; }
        }
        
        /* Medium devices (tablets, 768px and up) */
        @media (min-width: 768px) {
          .md\\:text-6xl { font-size: 3.75rem; }
          .md\\:text-3xl { font-size: 1.875rem; }
        }
        
        /* Large devices (desktops, 1024px and up) */
        @media (min-width: 1024px) {
          .lg\\:text-7xl { font-size: 4.5rem; }
        }
        
        /* Extra large devices (large desktops, 1280px and up) */
        @media (min-width: 1280px) {
          .xl\\:text-8xl { font-size: 6rem; }
        }
        
        /* Ensure 100vh on mobile devices */
        @media (max-height: 600px) {
          .h-screen { height: 100vh; min-height: 100vh; }
        }
        
        /* Landscape orientation adjustments */
        @media (orientation: landscape) and (max-height: 500px) {
          .mb-8 { margin-bottom: 1rem; }
          .mb-6 { margin-bottom: 0.75rem; }
          .py-3 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
          .py-4 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        }
      `}</style>
    </section>
  )
}
