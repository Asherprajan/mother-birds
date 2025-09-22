"use client"

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', phone: '', subject: '', message: '', inquiryType: 'general' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#DA1414] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl opacity-90">Get in touch with us for any inquiries or support</p>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-[#DA1414] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
                <p className="text-gray-600">+91 87654 32109</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#228B22] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Email</h3>
                <p className="text-gray-600">info@motherbirds.com</p>
                <p className="text-gray-600">sales@motherbirds.com</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#FFD700] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={32} className="text-black" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">WhatsApp</h3>
                <p className="text-gray-600">+91 98765 43210</p>
                <p className="text-gray-600">Business Support</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#DA1414] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Business Hours</h3>
                <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form and Map */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-black mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DA1414] focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DA1414] focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DA1414] focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-700 mb-2">
                        Inquiry Type
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DA1414] focus:border-transparent"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="wholesale">Wholesale Partnership</option>
                        <option value="retail">Retail Inquiry</option>
                        <option value="support">Customer Support</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DA1414] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DA1414] focus:border-transparent resize-vertical"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#DA1414] text-white py-3 px-6 rounded-lg font-bold hover:bg-[#B91C1C] transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={20} />
                  </button>
                </form>
              </div>
              
              {/* Map and Address */}
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-black mb-6">Visit Our Office</h3>
                  
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-[#DA1414] p-3 rounded-lg">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Head Office</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Mother Bird's Food Products Pvt. Ltd.<br />
                        123 Food Street, Industrial Area<br />
                        Sector 15, Mumbai, Maharashtra 400001<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  {/* Embedded Map Placeholder */}
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                    <p className="text-gray-600">Interactive Map</p>
                  </div>
                </div>
                
                {/* Quick Contact */}
                <div className="bg-[#228B22] rounded-xl shadow-lg p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                  <p className="mb-6">
                    For urgent inquiries or wholesale orders, contact us directly through WhatsApp or phone.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+919876543210"
                      className="bg-white text-[#228B22] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-center"
                    >
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/919876543210"
                      className="bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#20B858] transition-colors text-center"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
