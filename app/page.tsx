'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import Categories from '@/components/Categories'
import FeaturedProducts from '@/components/FeaturedProducts'
import CustomerReviews from '@/components/CustomerReviews'
import FAQs from '@/components/FAQs'
import Awards from '@/components/Awards'
import ConnectWithUs from '@/components/ConnectWithUs'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { motion } from 'framer-motion'

export default function Home() {
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div>
      <Header/>
      <Hero/>
      <motion.div
        variants={sectionVariants as any}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Partners/>
      </motion.div>

        <Categories/>

     
        <FeaturedProducts/>
      <motion.div
        variants={sectionVariants as any}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <CustomerReviews/>
      </motion.div>
      <motion.div
        variants={sectionVariants as any}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <FAQs/>
      </motion.div>
      <motion.div
        variants={sectionVariants as any}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Awards/>
      </motion.div>
      <motion.div
        variants={sectionVariants as any}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <ConnectWithUs/>
      </motion.div>
      <motion.div
        variants={sectionVariants as any}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Footer/>
      </motion.div>
      <WhatsAppFloat/>
    </div>  
  )
}
