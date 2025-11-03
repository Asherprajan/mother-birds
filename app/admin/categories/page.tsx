"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2, FolderOpen, Search } from 'lucide-react'
import { getAllCategoriesAdmin, deleteCategory } from '@/lib/admin-api'
import type { Category } from '@/lib/types'
import { toast } from 'sonner'
import Link from 'next/link'

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    loadCategories()
  }, [])

  async function loadCategories() {
    try {
      setLoading(true)
      const data = await getAllCategoriesAdmin()
      setCategories(data)
    } catch (error: any) {
      toast.error('Failed to load categories: ' + error.message)
    } finally {
      setLoading(false)
    }
  }



  const handleDelete = async (id: number, name: string) => {
    if (!confirm(`Are you sure you want to delete "${name}"? This will affect all products in this category.`)) {
      return
    }

    try {
      await deleteCategory(id)
      toast.success('Category deleted successfully')
      loadCategories()
    } catch (error: any) {
      toast.error('Failed to delete category: ' + error.message)
    }
  }

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.description?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
            Categories
          </h1>
          <p className="text-gray-600 text-lg">Manage product categories</p>
        </div>
        <Link
          href="/admin/categories/add"
          className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-3 text-lg"
        >
          <Plus size={24} />
          Add Category
        </Link>
      </div>

      {/* Search */}
      <div className="mb-8 relative">
        <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={22} />
        <input
          type="text"
          placeholder="Search categories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-14 pr-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all outline-none shadow-sm"
        />
      </div>

      {/* Categories Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm animate-pulse">
              <div className="h-6 bg-gray-200 rounded mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      ) : filteredCategories.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl shadow-md">
          <FolderOpen className="mx-auto text-gray-400 mb-6" size={64} />
          <h3 className="text-2xl font-bold text-gray-700 mb-3">No categories found</h3>
          <p className="text-gray-500 mb-6 text-lg">Get started by creating your first category</p>
          <Link
            href="/admin/categories/add"
            className="inline-block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg transition-all"
          >
            Create Category
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border-2 border-gray-100 hover:border-gray-200"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{category.name}</h3>
                  {category.description && (
                    <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">{category.description}</p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-3 pt-5 border-t-2 border-gray-100">
                <Link
                  href={`/admin/categories/edit/${category.id}`}
                  className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-600 px-5 py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 border border-blue-200"
                >
                  <Edit size={18} />
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(category.id, category.name)}
                  className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 px-5 py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 border border-red-200"
                >
                  <Trash2 size={18} />
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}


    </div>
  )
}
