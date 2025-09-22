"use client"

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Image from 'next/image'
import { Award, Heart, Users, Leaf, Star, Shield, Clock, Trophy, Target, Sparkles, CheckCircle } from 'lucide-react'

export default function AboutPage() {
  const { scrollY } = useScroll()
  const heroRef = useRef(null)
  const storyRef = useRef(null)
  const valuesRef = useRef(null)
  const founderRef = useRef(null)
  const teamRef = useRef(null)
  
  // Scroll transforms for hero section
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.8])
  const heroY = useTransform(scrollY, [0, 400], [0, -100])
  
  // Parallax effects for different sections
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -300])
  const sparklesX = useTransform(scrollY, [0, 1000], [0, 100])
  const sparklesY = useTransform(scrollY, [0, 1000], [0, -200])

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#DA1414] via-[#B91C1C] to-[#991B1B] text-white py-24 overflow-hidden">
          <motion.div 
            style={{ y: backgroundY }}
            className="absolute inset-0 bg-black/10"
          />
          
          <motion.div 
            style={{ x: sparklesX, y: sparklesY }}
            className="absolute top-10 left-10"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="text-yellow-300" size={24} />
            </motion.div>
          </motion.div>
          
          <motion.div 
            style={{ x: sparklesX, y: sparklesY }}
            className="absolute bottom-20 right-20"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 15, -15, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Star className="text-yellow-300" size={20} />
            </motion.div>
          </motion.div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              ref={heroRef}
              style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 80, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-5xl md:text-7xl font-bold mb-6 font-serif leading-tight" 
                style={{ fontFamily: 'var(--font-playfair-display), serif' }}
              >
                About Mother Bird's
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed"
              >
                Making memories, one bite at a time, since April 2000
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex items-center justify-center gap-8 text-sm"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex items-center gap-2"
                >
                  <Award className="text-yellow-300" size={20} />
                  <span>25 Years Strong</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex items-center gap-2"
                >
                  <Shield className="text-yellow-300" size={20} />
                  <span>Quality Promise</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex items-center gap-2"
                >
                  <Heart className="text-yellow-300" size={20} />
                  <span>Kerala's Loved</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Stats Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-16 bg-gradient-to-r from-gray-50 to-white"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "25+", label: "Years of Trust", delay: 0 },
                { value: "100+", label: "Manufacturing Team", delay: 0.1 },
                { value: "200+", label: "Distribution Network", delay: 0.2 },
                { value: "14", label: "Districts Covered", delay: 0.3 }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="text-center"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: stat.delay,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="text-4xl md:text-5xl font-bold text-[#DA1414] mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                ref={storyRef}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={slideInLeft}
                className="space-y-6"
              >
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 bg-[#DA1414] text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  <Clock size={16} />
                  Our Journey
                </motion.div>
                
                <motion.h2 
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl font-bold text-black font-serif leading-tight" 
                  style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                >
                  A Story of Dreams & Dedication
                </motion.h2>
                
                <motion.div 
                  variants={staggerContainer}
                  className="space-y-4"
                >
                  <motion.p 
                    variants={fadeInUp}
                    className="text-lg text-gray-700 leading-relaxed"
                  >
                    It was April 2000. In a small corner of Kerala, with just two products – a simple sauce and a sweet jam – 
                    and a team of only twenty people, Mother Birds Food Products took its very first step. At the heart of it all was 
                    one man with a dream, <strong className="text-[#DA1414]">Mr. Shenny Paul</strong>. He believed that food should do more than fill a plate – 
                    it should carry warmth, love, and the taste of home.
                  </motion.p>
                  
                  <motion.p 
                    variants={fadeInUp}
                    className="text-lg text-gray-700 leading-relaxed"
                  >
                    From that humble beginning, the aroma of our kitchen slowly began to travel. Families welcomed our flavors 
                    into their homes, and their trust gave us the courage to grow. We added biriyani kits, vinegar, pickles, 
                    and squash, each product carrying the same promise of quality and care that we started with.
                  </motion.p>
                </motion.div>
                
                <motion.div 
                  variants={staggerContainer}
                  className="grid grid-cols-2 gap-6 pt-4"
                >
                  {[
                    { icon: CheckCircle, title: "Authentic Recipes", subtitle: "Home-style preparations" },
                    { icon: CheckCircle, title: "Kerala's Trust", subtitle: "25 years of loyalty" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-3"
                    >
                      <item.icon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-black">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.subtitle}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={slideInRight}
                className="relative"
              >
                <motion.div 
                  animate={{ 
                    scale: [1, 1.02, 1],
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -inset-4 bg-gradient-to-r from-[#DA1414]/20 to-[#228B22]/20 rounded-2xl blur-lg"
                />
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Image
                    src="/placeholder.svg?height=600&width=700&text=Mother+Birds+Journey"
                    alt="Our Story"
                    width={700}
                    height={600}
                    className="relative rounded-2xl shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Current State */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50"
        >
          <div className="container mx-auto px-4">
            <motion.div 
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-black mb-4 font-serif" 
                style={{ fontFamily: 'var(--font-playfair-display), serif' }}
              >
                Twenty-Five Years Later
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-600 max-w-3xl mx-auto"
              >
                From a team of 20 to a family of 300+, our journey continues with the same heart
              </motion.p>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              className="max-w-4xl mx-auto space-y-8"
            >
              <motion.div 
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
              >
                <motion.p 
                  variants={fadeInUp}
                  className="text-lg text-gray-700 leading-relaxed mb-6"
                >
                  Twenty-five years later, that small family has grown to over <strong className="text-[#DA1414]">100 dedicated hands in manufacturing</strong> 
                  and nearly <strong className="text-[#DA1414]">200 in distribution</strong>, all working together to keep our promise alive. 
                  From Trivandrum to Palakkad, our team directly reaches households in <strong className="text-[#DA1414]">7 districts</strong>, 
                  while our trusted distributors ensure every other corner of Kerala gets a taste of Mother Birds.
                </motion.p>
                <motion.p 
                  variants={fadeInUp}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  What began as a modest venture is now a name loved across the state – but our heart remains the same as day one. 
                  We are still guided by the same values: <strong className="text-[#DA1414]">honesty, quality, and the real flavors that feel like home</strong>.
                </motion.p>
              </motion.div>
              
              <motion.div 
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-[#DA1414] to-[#B91C1C] text-white rounded-2xl p-8 text-center"
              >
                <motion.h3 
                  variants={fadeInUp}
                  className="text-2xl font-bold mb-4 font-serif" 
                  style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                >
                  Because at Mother Birds, we don't just make food.
                </motion.h3>
                <motion.p 
                  variants={fadeInUp}
                  className="text-xl opacity-90"
                >
                  We make memories, one bite at a time.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Values */}
        <motion.section 
          ref={valuesRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <motion.div 
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <motion.div 
                variants={scaleIn}
                className="inline-flex items-center gap-2 bg-[#DA1414] text-white px-6 py-3 rounded-full text-sm font-medium mb-6"
              >
                <Star size={16} />
                Our Values
              </motion.div>
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-black mb-6 font-serif" 
                style={{ fontFamily: 'var(--font-playfair-display), serif' }}
              >
                What Guides Us
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-600 max-w-3xl mx-auto"
              >
                The same values that started our journey continue to guide us today
              </motion.p>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: Shield,
                  title: "Honesty",
                  description: "Transparent in our practices, genuine in our promises, and truthful in every interaction with our customers.",
                  color: "from-[#DA1414] to-[#B91C1C]",
                  badgeIcon: Star,
                  badgeColor: "bg-yellow-400"
                },
                {
                  icon: Award,
                  title: "Quality",
                  description: "Never compromising on the standards that have earned us trust for over two decades across Kerala.",
                  color: "from-[#228B22] to-[#15803D]",
                  badgeIcon: Award,
                  badgeColor: "bg-yellow-400"
                },
                {
                  icon: Heart,
                  title: "Home-like Flavors",
                  description: "Creating tastes that carry warmth, love, and the authentic feeling of home in every bite.",
                  color: "from-[#FFD700] to-[#FFA500]",
                  badgeIcon: Heart,
                  badgeColor: "bg-red-400"
                }
              ].map((value, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="group text-center p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative">
                    <motion.div 
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -10, 10, 0]
                      }}
                      transition={{ duration: 0.5 }}
                      className={`bg-gradient-to-r ${value.color} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8`}
                    >
                      <value.icon size={48} className={value.title === "Home-like Flavors" ? "text-black" : "text-white"} />
                    </motion.div>
                    <motion.div 
                      animate={{ 
                        y: [0, -5, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`absolute -top-2 -right-2 w-8 h-8 ${value.badgeColor} rounded-full flex items-center justify-center`}
                    >
                      <value.badgeIcon size={16} className={value.title === "Home-like Flavors" ? "text-white" : "text-black"} />
                    </motion.div>
                  </div>
                  <motion.h3 
                    variants={fadeInUp}
                    className="text-xl font-bold text-black mb-4"
                  >
                    {value.title}
                  </motion.h3>
                  <motion.p 
                    variants={fadeInUp}
                    className="text-gray-600 leading-relaxed"
                  >
                    {value.description}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
        
        {/* Founder Section */}
        <motion.section 
          ref={founderRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              <motion.div 
                variants={slideInLeft}
                className="relative order-2 lg:order-1"
              >
                <motion.div 
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -inset-6 bg-gradient-to-r from-[#DA1414]/20 to-[#228B22]/20 rounded-3xl blur-2xl"
                />
                <motion.div 
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 5
                  }}
                  className="relative"
                >
                  <Image
                    src="/placeholder.svg?height=600&width=700&text=Mr.+Shenny+Paul"
                    alt="Mr. Shenny Paul - Founder"
                    width={700}
                    height={600}
                    className="rounded-3xl shadow-2xl"
                  />
                  <motion.div 
                    initial={{ opacity: 0, x: 50, y: 50 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl"
                  >
                    <div className="flex items-center gap-3">
                      <Trophy className="text-[#DA1414]" size={24} />
                      <div>
                        <div className="font-bold text-black">Since 2000</div>
                        <div className="text-sm text-gray-600">Visionary Leader</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                variants={slideInRight}
                className="space-y-8 order-1 lg:order-2"
              >
                <div>
                  <motion.div 
                    variants={scaleIn}
                    className="inline-flex items-center gap-2 bg-[#DA1414] text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
                  >
                    <Heart size={16} />
                    Founder
                  </motion.div>
                  <motion.h2 
                    variants={fadeInUp}
                    className="text-4xl md:text-5xl font-bold text-black mb-6 font-serif" 
                    style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                  >
                    Meet Our Visionary
                  </motion.h2>
                </div>
                
                <motion.div 
                  variants={staggerContainer}
                  className="space-y-6"
                >
                  <motion.p 
                    variants={fadeInUp}
                    className="text-lg text-gray-700 leading-relaxed"
                  >
                    <strong className="text-[#DA1414]">Mr. Shenny Paul</strong>, the heart and soul behind Mother Bird's, 
                    started this extraordinary journey in April 2000 with an unwavering belief that food should do more than 
                    fill a plate – it should carry warmth, love, and the taste of home.
                  </motion.p>
                  <motion.p 
                    variants={fadeInUp} 
                    className="text-lg text-gray-700 leading-relaxed"
                  >
                    From a humble beginning with just two products and twenty people, his vision has grown into Kerala's 
                    beloved food brand that reaches every corner of the state. His dedication to authentic flavors and 
                    unwavering quality continues to inspire our growing family of 300+ team members.
                  </motion.p>
                  <motion.p 
                    variants={fadeInUp}
                    className="text-lg text-gray-700 leading-relaxed"
                  >
                    Twenty-five years later, his original dream lives on in every product we create – bringing the warmth 
                    of home to families across Kerala.
                  </motion.p>
                </motion.div>
                
                <motion.div 
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-[#DA1414]/10 to-transparent p-8 rounded-2xl border-l-4 border-[#DA1414]"
                >
                  <motion.blockquote 
                    variants={fadeInUp}
                    className="text-xl text-gray-800 italic leading-relaxed mb-4"
                  >
                    "Food should do more than fill a plate – it should carry warmth, love, and the taste of home. 
                    Every product we create should bring families together and make every meal feel like a celebration 
                    of love and tradition."
                  </motion.blockquote>
                  <motion.footer 
                    variants={fadeInUp}
                    className="flex items-center gap-4"
                  >
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-[#DA1414] rounded-full flex items-center justify-center"
                    >
                      <Heart className="text-white" size={20} />
                    </motion.div>
                    <div>
                      <div className="font-bold text-black text-lg">Mr. Shenny Paul</div>
                      <div className="text-[#DA1414] font-medium">Founder & Visionary</div>
                    </div>
                  </motion.footer>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        {/* Team Section */}
        <motion.section 
          ref={teamRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <motion.div 
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <motion.div 
                variants={scaleIn}
                className="inline-flex items-center gap-2 bg-[#DA1414] text-white px-6 py-3 rounded-full text-sm font-medium mb-6"
              >
                <Users size={16} />
                Our Team
              </motion.div>
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-black mb-6 font-serif" 
                style={{ fontFamily: 'var(--font-playfair-display), serif' }}
              >
                The People Behind Excellence
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-600 max-w-3xl mx-auto"
              >
                Meet the passionate professionals who bring Mother Bird's vision to life every single day
              </motion.p>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
            >
              {[
                {
                  name: "Rajesh Kumar",
                  role: "Head of Production",
                  image: "/placeholder.svg?height=200&width=200&text=Rajesh+Kumar",
                  description: "With 15+ years of expertise, Rajesh ensures every product meets our exacting standards through meticulous quality control and innovative production processes.",
                  icon: Shield,
                  iconColor: "from-[#DA1414] to-[#B91C1C]",
                  tags: ["Quality Expert", "15+ Years"]
                },
                {
                  name: "Priya Patel",
                  role: "Quality Assurance Manager",
                  image: "/placeholder.svg?height=200&width=200&text=Priya+Patel",
                  description: "Priya maintains our unwavering commitment to quality and safety, ensuring every product exceeds industry standards and customer expectations.",
                  icon: CheckCircle,
                  iconColor: "from-[#228B22] to-[#15803D]",
                  tags: ["Safety Expert", "Certified"]
                },
                {
                  name: "Amit Singh",
                  role: "Sales & Distribution Head",
                  image: "/placeholder.svg?height=200&width=200&text=Amit+Singh",
                  description: "Amit orchestrates our nationwide distribution network, building strong partnerships and ensuring Mother Bird's reaches families across India.",
                  icon: Trophy,
                  iconColor: "from-[#3B82F6] to-[#1D4ED8]",
                  tags: ["Strategy", "Network"]
                }
              ].map((member, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="group text-center"
                >
                  <div className="relative mb-6">
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                      className={`absolute inset-0 bg-gradient-to-r ${member.iconColor} rounded-full blur-lg opacity-20`}
                    />
                    <motion.div
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: 15
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="relative w-40 h-40 rounded-full mx-auto object-cover border-4 border-white shadow-xl"
                      />
                    </motion.div>
                    <motion.div 
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 360
                      }}
                      transition={{ duration: 0.5 }}
                      className={`absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r ${member.iconColor} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <member.icon className="text-white" size={20} />
                    </motion.div>
                  </div>
                  <motion.h3 
                    variants={fadeInUp}
                    className="text-2xl font-bold text-black mb-2"
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p 
                    variants={fadeInUp}
                    className="text-[#DA1414] font-semibold mb-3 text-lg"
                  >
                    {member.role}
                  </motion.p>
                  <motion.p 
                    variants={fadeInUp}
                    className="text-gray-600 leading-relaxed"
                  >
                    {member.description}
                  </motion.p>
                  <motion.div 
                    variants={fadeInUp}
                    className="flex justify-center gap-2 mt-4"
                  >
                    {member.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tagIndex}
                        whileHover={{ scale: 1.1 }}
                        className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
        
        {/* Certifications */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50"
        >
          <div className="container mx-auto px-4">
            <motion.div 
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <motion.div 
                variants={scaleIn}
                className="inline-flex items-center gap-2 bg-[#DA1414] text-white px-6 py-3 rounded-full text-sm font-medium mb-6"
              >
                <Shield size={16} />
                Certifications
              </motion.div>
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-black mb-6 font-serif" 
                style={{ fontFamily: 'var(--font-playfair-display), serif' }}
              >
                Quality You Can Trust
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-600 max-w-3xl mx-auto"
              >
                Our commitment to excellence is validated by industry-leading certifications and standards
              </motion.p>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
            >
              {[
                {
                  name: "ISO 22000",
                  description: "Food Safety Management System",
                  image: "/placeholder.svg?height=80&width=80&text=ISO+22000",
                  color: "from-[#DA1414]/20 to-[#B91C1C]/20",
                  gradient: "from-[#DA1414] to-[#B91C1C]"
                },
                {
                  name: "FSSAI",
                  description: "Food Safety & Standards License",
                  image: "/placeholder.svg?height=80&width=80&text=FSSAI",
                  color: "from-[#228B22]/20 to-[#15803D]/20",
                  gradient: "from-[#228B22] to-[#15803D]"
                },
                {
                  name: "HACCP",
                  description: "Hazard Analysis Critical Control",
                  image: "/placeholder.svg?height=80&width=80&text=HACCP",
                  color: "from-[#3B82F6]/20 to-[#1D4ED8]/20",
                  gradient: "from-[#3B82F6] to-[#1D4ED8]"
                },
                {
                  name: "GMP",
                  description: "Good Manufacturing Practices",
                  image: "/placeholder.svg?height=80&width=80&text=GMP",
                  color: "from-[#F59E0B]/20 to-[#D97706]/20",
                  gradient: "from-[#F59E0B] to-[#D97706]"
                }
              ].map((cert, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="group text-center"
                >
                  <div className="relative">
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                      className={`absolute inset-0 bg-gradient-to-r ${cert.color} rounded-2xl blur-lg`}
                    />
                    <motion.div 
                      whileHover={{ 
                        scale: 1.05,
                        y: -10
                      }}
                      transition={{ duration: 0.3 }}
                      className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300"
                    >
                      <motion.div 
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1
                        }}
                        transition={{ duration: 0.8 }}
                        className="mb-6"
                      >
                        <Image
                          src={cert.image}
                          alt={cert.name}
                          width={80}
                          height={80}
                          className="mx-auto"
                        />
                      </motion.div>
                      <h3 className="font-bold text-black text-lg mb-2">{cert.name}</h3>
                      <p className="text-sm text-gray-600">{cert.description}</p>
                      <div className="mt-4 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ 
                            duration: 1.5, 
                            delay: index * 0.2,
                            ease: "easeOut"
                          }}
                          className={`h-2 bg-gradient-to-r ${cert.gradient} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="py-20 bg-gradient-to-r from-[#DA1414] to-[#B91C1C] text-white"
        >
          <div className="container mx-auto px-4 text-center">
            <motion.div 
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold mb-6 font-serif" 
                style={{ fontFamily: 'var(--font-playfair-display), serif' }}
              >
                Join the Mother Bird's Family
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl opacity-90 mb-8 leading-relaxed"
              >
                Experience the authentic taste of Kerala and become part of our growing community of food lovers
              </motion.p>
              <motion.div 
                variants={staggerContainer}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button 
                  variants={scaleIn}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#DA1414] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  Explore Our Products
                </motion.button>
                <motion.button 
                  variants={scaleIn}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#DA1414] transition-all duration-300"
                >
                  Contact Us
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
