"use client"

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Image from 'next/image'
import { Filter, Grid, List, Star, Search, ShoppingBag, Package, TrendingUp } from 'lucide-react'

function ProductsContent() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [sortBy, setSortBy] = useState('name')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')

  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.8])
  const heroY = useTransform(scrollY, [0, 300], [0, -50])

  const categories = [
    'All Products',
    'Pickles & Chutney',
    'Sauces & Ketchup',
    'Jams',
    'Fruit Syrups & Mixes',
    'Other Repacked Products'
  ]

  const products = [
    {
      id: 1,
      name: 'Mango Pickle Premium',
      category: 'Pickles & Chutney',
      image: '/placeholder.svg?height=300&width=300&text=Mango+Pickle',
      packSize: '500g',
      mrp: 180,
      wholesalePrice: 150,
      tax: 'Inclusive of all taxes',
      wholesaleBox: '12 units/box',
      rating: 4.8,
      description: 'Traditional mango pickle made with authentic spices and premium quality mangoes.',
      isPopular: true,
      discount: 15
    },
    {
      id: 2,
      name: 'Mixed Fruit Jam',
      category: 'Jams',
      image: '/placeholder.svg?height=300&width=300&text=Mixed+Jam',
      packSize: '400g',
      mrp: 220,
      wholesalePrice: 185,
      tax: 'Inclusive of all taxes',
      wholesaleBox: '24 units/box',
      rating: 4.7,
      description: 'Delicious mixed fruit jam made from fresh seasonal fruits.',
      isPopular: false,
      discount: 0
    },
    {
      id: 3,
      name: 'Tomato Ketchup',
      category: 'Sauces & Ketchup',
      image: '/placeholder.svg?height=300&width=300&text=Ketchup',
      packSize: '1kg',
      mrp: 150,
      wholesalePrice: 125,
      tax: 'Inclusive of all taxes',
      wholesaleBox: '12 units/box',
      rating: 4.6,
      description: 'Rich and tangy tomato ketchup perfect for all your meals.',
      isPopular: true,
      discount: 20
    },
    {
      id: 4,
      name: 'Rose Syrup',
      category: 'Fruit Syrups & Mixes',
      image: '/placeholder.svg?height=300&width=300&text=Rose+Syrup',
      packSize: '750ml',
      mrp: 120,
      wholesalePrice: 100,
      tax: 'Inclusive of all taxes',
      wholesaleBox: '12 units/box',
      rating: 4.9,
      description: 'Refreshing rose syrup made with natural rose essence.',
      isPopular: false,
      discount: 0
    },
    {
      id: 5,
      name: 'Green Chili Pickle',
      category: 'Pickles & Chutney',
      image: '/placeholder.svg?height=300&width=300&text=Chili+Pickle',
      packSize: '300g',
      mrp: 160,
      wholesalePrice: 135,
      tax: 'Inclusive of all taxes',
      wholesaleBox: '24 units/box',
      rating: 4.5,
      description: 'Spicy green chili pickle that adds flavor to every meal.',
      isPopular: false,
      discount: 0
    },
    {
      id: 6,
      name: 'Orange Marmalade',
      category: 'Jams',
      image: '/placeholder.svg?height=300&width=300&text=Marmalade',
      packSize: '450g',
      mrp: 200,
      wholesalePrice: 170,
      tax: 'Inclusive of all taxes',
      wholesaleBox: '12 units/box',
      rating: 4.8,
      description: 'Premium orange marmalade with real orange pieces.',
      isPopular: true,
      discount: 10
    },
    {
      id: 7,
      name: 'Tamarind Sauce',
      category: 'Sauces & Ketchup',
      image: '/placeholder.svg?height=300&width=300&text=Tamarind+Sauce',
      packSize: '500g',
      mrp: 140,
      wholesalePrice: 120,
      tax: 'Inclusive of all taxes',
      wholesaleBox: '12 units/box',
      rating: 4.4,
      description: 'Sweet and tangy tamarind sauce perfect for snacks.',
      isPopular: false,
      discount: 0
    },
    {
      id: 8,
      name: 'Mango Syrup',
      category: 'Fruit Syrups & Mixes',
      image: '/placeholder.svg?height=300&width=300&text=Mango+Syrup',
      packSize: '750ml',
      mrp: 130,
      wholesalePrice: 110,
      tax: 'Inclusive of all taxes',
      wholesaleBox: '12 units/box',
      rating: 4.7,
      description: 'Tropical mango syrup made from fresh mangoes.',
      isPopular: false,
      discount: 0
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || selectedCategory === 'All Products' || product.category === selectedCategory
    const matchesSearch = searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.mrp - b.mrp
      case 'price-high':
        return b.mrp - a.mrp
      case 'rating':
        return b.rating - a.rating
      default:
        return a.name.localeCompare(b.name)
    }
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-orange-50 font-sans" style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}>
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <motion.section 
          style={{ 
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY
          }}
          className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-amber-500 text-white py-20"
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-6 text-5xl md:text-7xl font-bold tracking-tight font-serif drop-shadow-2xl"
                style={{ fontFamily: 'var(--font-playfair-display), serif' }}
              >
                Premium Food Products
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-xl md:text-2xl opacity-95 font-light mb-8 max-w-2xl mx-auto leading-relaxed"
              >
                Discover our curated collection of traditional Indian delicacies, crafted with authentic recipes and premium ingredients
              </motion.p>
              
              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="max-w-md mx-auto relative"
              >
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/95 backdrop-blur-sm rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50 focus:bg-white transition-all duration-300 shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <section className="py-16 bg-white/80 backdrop-blur-sm hidden md:block">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Package, title: "50+ Products", subtitle: "Premium quality food items", delay: 0 },
                { icon: TrendingUp, title: "4.8★ Rating", subtitle: "Customer satisfaction", delay: 0.2 },
                { icon: ShoppingBag, title: "1000+ Orders", subtitle: "Trusted by businesses", delay: 0.4 }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: stat.delay, ease: "easeOut" }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`w-16 h-16 ${
                      index === 0 ? 'bg-gradient-to-br from-red-500 to-amber-500' :
                      index === 1 ? 'bg-gradient-to-br from-green-500 to-emerald-500' :
                      'bg-gradient-to-br from-blue-500 to-indigo-500'
                    } rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <stat.icon className="text-white" size={28} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{stat.title}</h3>
                  <p className="text-gray-600">{stat.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters and Controls */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="py-8 bg-white/60 backdrop-blur-sm border-b border-gray-200/50 sticky top-20 z-40"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Category Filter */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-red-600 font-semibold">
                  <Filter size={20} />
                  <span>Category</span>
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-6 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 bg-white font-medium text-gray-700 shadow-sm transition-all duration-200 hover:border-gray-300"
                  style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
                >
                  {categories.map((category) => (
                    <option key={category} value={category === 'All Products' ? 'all' : category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-4">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-6 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 bg-white font-medium text-gray-700 shadow-sm transition-all duration-200 hover:border-gray-300"
                  style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>

                {/* View Mode */}
                <div className="flex border-2 border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setViewMode('grid')}
                    className={`p-3 transition-all duration-200 ${viewMode === 'grid' ? 'bg-red-500 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <Grid size={20} />
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setViewMode('list')}
                    className={`p-3 transition-all duration-200 ${viewMode === 'list' ? 'bg-red-500 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <List size={20} />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Products Grid/List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedCategory}-${sortBy}-${viewMode}-${searchQuery}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`${
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
                    : 'space-y-6'
                }`}
              >
                {sortedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      y: -10,
                      transition: { duration: 0.2 }
                    }}
                    className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-red-200 relative ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                    style={{ 
                      fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif'
                    }}
                  >
                    {/* Popular Badge */}
                    {product.isPopular && (
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 500, damping: 20 }}
                        className="absolute top-4 left-4 z-10 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                      >
                        Popular
                      </motion.div>
                    )}
                    
                    {/* Discount Badge */}
                    {product.discount > 0 && (
                      <motion.div
                        initial={{ scale: 0, rotate: 45 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.4, type: "spring", stiffness: 500, damping: 20 }}
                        className="absolute top-4 right-4 z-10 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                      >
                        {product.discount}% OFF
                      </motion.div>
                    )}

                    <div className={`${viewMode === 'list' ? 'w-80 flex-shrink-0' : 'aspect-square'} overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center relative`}>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full"
                      >
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover"
                          draggable={false}
                        />
                      </motion.div>
                      
                      {/* Overlay on hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/20"
                      />
                      
                      {/* Sparkle effect */}
                      <motion.span
                        initial={{ opacity: 0, scale: 0, rotate: 0 }}
                        whileHover={{ 
                          opacity: 1, 
                          scale: [1, 1.2, 1], 
                          rotate: [0, 180, 360] 
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute top-4 right-4 text-amber-400 text-2xl pointer-events-none select-none"
                      >
                        ✨
                      </motion.span>
                    </div>
                    
                    <div className={`p-6 flex flex-col justify-between ${viewMode === 'list' ? 'flex-1' : 'items-center text-center'}`}>
                      <div>
                        {/* Rating */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                          className="flex items-center gap-2 mb-3 justify-center"
                        >
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.3 + i * 0.1 }}
                              >
                                <Star
                                  size={16}
                                  className={`${
                                    i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'
                                  }`}
                                />
                              </motion.div>
                            ))}
                          </div>
                          <span className="text-sm text-gray-500 font-medium">({product.rating})</span>
                        </motion.div>
                        
                        {/* Product Name */}
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.4 }}
                          className="font-bold text-xl text-gray-800 mb-3 group-hover:text-red-600 transition-colors font-serif line-clamp-2"
                          style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                        >
                          {product.name}
                        </motion.h3>
                        
                        {/* Description */}
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                          className="text-gray-600 mb-4 opacity-90 font-light line-clamp-2 leading-relaxed"
                        >
                          {product.description}
                        </motion.p>
                        
                        {/* Pack Size */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.6 }}
                          className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 font-medium mb-4"
                        >
                          <Package size={14} />
                          {product.packSize}
                        </motion.div>
                        
                        {/* Pricing */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.7 }}
                          className="space-y-3 mb-6"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600 font-medium">Retail Price:</span>
                            <span className="text-2xl font-bold text-red-600">₹{product.mrp}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600 font-medium">Wholesale Price:</span>
                            <span className="text-xl font-bold text-green-600">₹{product.wholesalePrice}</span>
                          </div>
                          <p className="text-xs text-gray-500 text-center">{product.tax}</p>
                        </motion.div>
                        
                        {/* Wholesale Info */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.8 }}
                          className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-xl mb-6 border border-green-200"
                        >
                          <p className="text-sm text-green-700 font-semibold text-center">
                            Wholesale: {product.wholesaleBox}
                          </p>
                        </motion.div>
                      </div>
                      
                      {/* Action Buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.9 }}
                        className="flex gap-3 mt-4"
                      >
                        <motion.button
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          Retail Inquiry
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          Wholesale Inquiry
                        </motion.button>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {sortedProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center py-20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
                  className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Search className="text-gray-400" size={40} />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold text-gray-600 mb-2 font-serif"
                  style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                >
                  No products found
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-500 max-w-md mx-auto"
                >
                  Try adjusting your search criteria or browse all categories to discover our products.
                </motion.p>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
      
      {/* Custom Animations */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading products...</p>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  )
}
