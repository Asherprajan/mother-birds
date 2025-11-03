"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Package, FolderOpen, TrendingUp, Star } from 'lucide-react'
import { getAllProductsAdmin, getAllCategoriesAdmin } from '@/lib/admin-api'
import Link from 'next/link'

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalCategories: 0,
    featuredProducts: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStats() {
      try {
        const [products, categories] = await Promise.all([
          getAllProductsAdmin(),
          getAllCategoriesAdmin(),
        ])

        setStats({
          totalProducts: products.length,
          totalCategories: categories.length,
          featuredProducts: products.filter(p => p.is_featured).length,
        })
      } catch (error) {
        console.error('Error loading stats:', error)
      } finally {
        setLoading(false)
      }
    }

    loadStats()
  }, [])

  const cards = [
    {
      title: 'Total Products',
      value: stats.totalProducts,
      icon: Package,
      color: 'from-blue-500 to-indigo-500',
      href: '/admin/products',
    },
    {
      title: 'Categories',
      value: stats.totalCategories,
      icon: FolderOpen,
      color: 'from-green-500 to-emerald-500',
      href: '/admin/categories',
    },
    {
      title: 'Featured Products',
      value: stats.featuredProducts,
      icon: Star,
      color: 'from-amber-500 to-yellow-500',
      href: '/admin/products',
    },
  ]

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
          Dashboard Overview
        </h1>
        <p className="text-gray-600 text-lg">Welcome to the Mother Birds admin panel</p>
      </div>

      {loading ? (
        <div className="grid grid-cols-3 gap-6 mb-10">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm animate-pulse">
              <div className="h-14 bg-gray-200 rounded-xl mb-6"></div>
              <div className="h-10 bg-gray-200 rounded w-24"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6 mb-10">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={card.href}
                className="block bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <card.icon className="text-white" size={30} />
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">{card.title}</h3>
                <p className="text-4xl font-bold text-gray-900">{card.value}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>Quick Actions</h2>
        <div className="grid grid-cols-2 gap-6">
          <Link
            href="/admin/products"
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-red-300 group"
          >
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                <Package className="text-red-600" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Manage Products</h3>
                <p className="text-sm text-gray-600">Add, edit, or delete products</p>
              </div>
            </div>
          </Link>

          <Link
            href="/admin/categories"
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-green-300 group"
          >
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                <FolderOpen className="text-green-600" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Manage Categories</h3>
                <p className="text-sm text-gray-600">Organize product categories</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
