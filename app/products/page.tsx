"use client"

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Image from 'next/image'
import { Filter, Grid, List, Star, Search, ShoppingBag, Package, TrendingUp, X, Info, Award, Leaf, ChevronRight, MessageCircle, Phone } from 'lucide-react'
import { getCategories, getProducts } from '@/lib/api'
import { productToDisplay, type ProductDisplay } from '@/lib/types'

function ProductsContent() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [sortBy, setSortBy] = useState('name')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [categories, setCategories] = useState<string[]>(['All Products'])
  const [products, setProducts] = useState<ProductDisplay[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState<ProductDisplay | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.8])
  const heroY = useTransform(scrollY, [0, 300], [0, -50])

  // Fetch categories and products from Supabase
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        
        // Fetch categories
        const categoriesData = await getCategories()
        const categoryNames = ['All Products', ...categoriesData.map(cat => cat.name)]
        setCategories(categoryNames)
        
        // Fetch products
        const productsData = await getProducts()
        const displayProducts = productsData.map(productToDisplay)
        setProducts(displayProducts)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }, [])

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || selectedCategory === 'All Products' || product.category === selectedCategory
    const matchesSearch = searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name)
      case 'featured':
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0)
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

        {/* Quick Stats Banner */}
        <section className="py-8 bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 border-y border-amber-200/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-1" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                  {products.length}+
                </div>
                <div className="text-sm text-gray-600 font-medium">Premium Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                  {categories.length - 1}+
                </div>
                <div className="text-sm text-gray-600 font-medium">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                  100%
                </div>
                <div className="text-sm text-gray-600 font-medium">Quality Assured</div>
              </div>
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
                  <Filter size={20} aria-hidden="true" />
                  <span className="hidden sm:inline">Category</span>
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-6 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 bg-white font-medium text-gray-700 shadow-sm transition-all duration-200 hover:border-gray-300"
                  style={{ fontFamily: 'var(--font-poppins), var(--font-sans), sans-serif' }}
                  aria-label="Filter by category"
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
                  aria-label="Sort products"
                >
                  <option value="name">Sort by Name</option>
                  <option value="featured">Featured First</option>
                </select>

                {/* View Mode */}
                <div className="flex border-2 border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm" role="group" aria-label="View mode">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setViewMode('grid')}
                    className={`p-3 transition-all duration-200 ${viewMode === 'grid' ? 'bg-red-500 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-50'}`}
                    aria-label="Grid view"
                    aria-pressed={viewMode === 'grid'}
                  >
                    <Grid size={20} aria-hidden="true" />
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setViewMode('list')}
                    className={`p-3 transition-all duration-200 ${viewMode === 'list' ? 'bg-red-500 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-50'}`}
                    aria-label="List view"
                    aria-pressed={viewMode === 'list'}
                  >
                    <List size={20} aria-hidden="true" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Products Grid/List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-red-500 mx-auto mb-4"></div>
                  <p className="text-gray-600 font-medium text-lg">Loading products...</p>
                </div>
              </div>
            ) : (
              <>
                <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedCategory}-${sortBy}-${viewMode}-${searchQuery}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`${
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'
                    : 'space-y-4'
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
                      delay: index * 0.05,
                      ease: "easeOut"
                    }}
                    className={`group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden border border-gray-200 hover:border-red-400 relative cursor-pointer ${viewMode === 'list' ? 'flex' : ''}`}
                    onClick={() => {
                      setSelectedProduct(product)
                      setIsModalOpen(true)
                    }}
                  >
                    {/* Status Badges */}
                    <div className="absolute top-2 left-2 right-2 z-10 flex justify-between items-start pointer-events-none">
                      <div className="flex gap-1.5">
                        {product.isFeatured && (
                          <span className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-2 py-1 rounded-md text-[10px] font-bold shadow-lg flex items-center gap-1">
                            <Award size={10} aria-hidden="true" />
                            Featured
                          </span>
                        )}
                        {product.isPopular && (
                          <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-md text-[10px] font-bold shadow-lg flex items-center gap-1">
                            <TrendingUp size={10} aria-hidden="true" />
                            Popular
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Product Image */}
                    <div className={`${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'aspect-square'} overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 relative`}>
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={`${product.name} - ${product.category}`}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        draggable={false}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {/* Product Info */}
                    <div className="p-5 flex flex-col flex-1">
                      {/* Category Badge */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-md uppercase tracking-wide">
                          {product.category}
                        </span>
                      </div>

                      {/* Product Name */}
                      <h3 className="font-bold text-base text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors leading-tight" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                        {product.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-[11px] text-gray-600 mb-3 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Tags */}
                      {product.tags && product.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {product.tags.slice(0, 2).map((tag, idx) => (
                            <span key={idx} className="bg-amber-50 text-amber-700 px-2 py-0.5 rounded text-[10px] font-semibold border border-amber-200">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="mt-auto">
                        {/* Pack Size & Stock */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-1.5 text-gray-700">
                            <Package size={14} className="text-red-500" aria-hidden="true" />
                            <span className="text-xs font-semibold">{product.packSize}</span>
                          </div>
                          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border-2 ${
                            product.stockStatus === 'In Stock' 
                              ? 'bg-green-50 text-green-700 border-green-200' 
                              : 'bg-red-50 text-red-700 border-red-200'
                          }`}>
                            {product.stockStatus}
                          </span>
                        </div>
                        
                        {/* View Details Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedProduct(product)
                            setIsModalOpen(true)
                          }}
                          className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-2.5 px-4 rounded-lg font-bold text-sm transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2 group"
                          aria-label={`View details for ${product.name}`}
                        >
                          View Details
                          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </button>
                      </div>
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
              </>
            )}
          </div>
        </section>

        {/* Product Detail Modal */}
        <AnimatePresence>
          {isModalOpen && selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative bg-gradient-to-r from-red-600 via-red-500 to-amber-500 p-8 text-white">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 p-2.5 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200 hover:scale-110"
                    aria-label="Close modal"
                  >
                    <X size={24} aria-hidden="true" />
                  </button>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-bold">
                      <Award size={16} aria-hidden="true" />
                      {selectedProduct.category}
                    </span>
                    {selectedProduct.isFeatured && (
                      <span className="inline-flex items-center gap-1 bg-amber-500 px-2 py-1 rounded-full text-xs font-bold">
                        <Star size={12} className="fill-current" aria-hidden="true" />
                        Featured
                      </span>
                    )}
                  </div>
                  <h2 className="text-4xl font-bold mb-3 leading-tight" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                    {selectedProduct.name}
                  </h2>
                  <p className="text-white/90 text-sm leading-relaxed max-w-2xl">
                    {selectedProduct.description}
                  </p>
                </div>

                {/* Modal Content */}
                <div className="overflow-y-auto max-h-[calc(90vh-180px)]">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Product Image */}
                    <div className="space-y-4">
                      <div className="aspect-square bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                        <Image
                          src={selectedProduct.image || "/placeholder.svg"}
                          alt={`${selectedProduct.name} - Product Image`}
                          width={600}
                          height={600}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          priority
                        />
                      </div>
                      {selectedProduct.tags && selectedProduct.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {selectedProduct.tags.map((tag, idx) => (
                            <span key={idx} className="bg-gradient-to-r from-amber-50 to-orange-50 text-amber-800 px-3 py-1.5 rounded-lg text-sm font-bold border-2 border-amber-200">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="space-y-6">
                      {/* Description */}
                      {selectedProduct.fullDescription && (
                        <div className="bg-gradient-to-br from-gray-50 to-amber-50 rounded-xl p-4 border-2 border-gray-200">
                          <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Info size={20} className="text-red-500" aria-hidden="true" />
                            Product Description
                          </h3>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {selectedProduct.fullDescription}
                          </p>
                        </div>
                      )}

                      {/* Ingredients */}
                      {selectedProduct.ingredients && selectedProduct.ingredients.length > 0 && (
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Leaf size={20} className="text-green-600" aria-hidden="true" />
                            Ingredients
                          </h3>
                          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border-2 border-green-200 shadow-sm">
                            <ul className="grid grid-cols-2 gap-3">
                              {selectedProduct.ingredients.map((ingredient, idx) => (
                                <li key={idx} className="text-sm text-gray-800 flex items-center gap-2 font-medium">
                                  <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" aria-hidden="true"></span>
                                  {ingredient}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* Product Specifications */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <Package size={20} className="text-blue-600" aria-hidden="true" />
                          Specifications
                        </h3>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 space-y-3 border-2 border-blue-200 shadow-sm">
                          {selectedProduct.packSize && (
                            <div className="flex justify-between items-center py-2 border-b border-blue-200/50">
                              <span className="text-sm text-gray-700 font-semibold">Pack Size</span>
                              <span className="text-sm font-bold text-gray-900 bg-white px-3 py-1 rounded-lg shadow-sm">{selectedProduct.packSize}</span>
                            </div>
                          )}
                          {selectedProduct.weightVolume && (
                            <div className="flex justify-between items-center py-2 border-b border-blue-200/50">
                              <span className="text-sm text-gray-700 font-semibold">Weight/Volume</span>
                              <span className="text-sm font-bold text-gray-900 bg-white px-3 py-1 rounded-lg shadow-sm">{selectedProduct.weightVolume}</span>
                            </div>
                          )}
                          {selectedProduct.packagingType && (
                            <div className="flex justify-between items-center py-2 border-b border-blue-200/50">
                              <span className="text-sm text-gray-700 font-semibold">Packaging</span>
                              <span className="text-sm font-bold text-gray-900 bg-white px-3 py-1 rounded-lg shadow-sm">{selectedProduct.packagingType}</span>
                            </div>
                          )}
                          {selectedProduct.stockStatus && (
                            <div className="flex justify-between items-center py-2">
                              <span className="text-sm text-gray-700 font-semibold">Availability</span>
                              <span className={`text-sm font-bold px-3 py-1.5 rounded-lg shadow-sm ${
                                selectedProduct.stockStatus === 'In Stock' 
                                  ? 'bg-green-500 text-white' 
                                  : 'bg-red-500 text-white'
                              }`}>
                                {selectedProduct.stockStatus}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-3 pt-4">
                        <a
                          href="https://wa.me/919876543210"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                          aria-label="Contact us on WhatsApp"
                        >
                          <MessageCircle size={18} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                          WhatsApp
                        </a>
                        <a
                          href="tel:+919876543210"
                          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                          aria-label="Call us"
                        >
                          <Phone size={18} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                          Call Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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
