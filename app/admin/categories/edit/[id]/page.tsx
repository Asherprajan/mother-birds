"use client"

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft, Save } from 'lucide-react'
import Link from 'next/link'
import { updateCategory, getAllCategoriesAdmin } from '@/lib/admin-api'
import { toast } from 'sonner'
import ImageUpload from '@/components/ImageUpload'

export default function EditCategoryPage() {
  const router = useRouter()
  const params = useParams()
  const categoryId = parseInt(params.id as string)
  
  const [loading, setLoading] = useState(false)
  const [loadingData, setLoadingData] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image_url: '',
  })

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    try {
      setLoadingData(true)
      const categories = await getAllCategoriesAdmin()
      
      const category = categories.find(c => c.id === categoryId)
      if (!category) {
        toast.error('Category not found')
        router.push('/admin/categories')
        return
      }

      setFormData({
        name: category.name,
        description: category.description || '',
        image_url: category.image_url || '',
      })
    } catch (error: any) {
      toast.error('Failed to load category: ' + error.message)
      router.push('/admin/categories')
    } finally {
      setLoadingData(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setLoading(true)
      await updateCategory(categoryId, formData)
      toast.success('Category updated successfully')
      router.push('/admin/categories')
    } catch (error: any) {
      toast.error('Failed to update category: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  if (loadingData) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading category...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/admin/categories"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 font-medium"
        >
          <ArrowLeft size={20} />
          Back to Categories
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
          Edit Category
        </h1>
        <p className="text-gray-600 text-lg">Update category information</p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Category Image */}
          <div>
            <label className="block text-base font-bold text-gray-900 mb-3">
              Category Image (Optional)
            </label>
            <ImageUpload
              value={formData.image_url}
              onChange={(url) => setFormData({ ...formData, image_url: url })}
              onRemove={() => setFormData({ ...formData, image_url: '' })}
            />
          </div>

          {/* Category Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 border-b pb-3">Category Details</h3>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all outline-none text-base"
                placeholder="e.g., Pickles & Chutney"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all outline-none resize-none text-base"
                placeholder="Brief description of this category..."
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-6 border-t">
            <Link
              href="/admin/categories"
              className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-colors text-center text-base"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-6 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 text-base"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Updating...</span>
                </>
              ) : (
                <>
                  <Save size={20} />
                  <span>Update Category</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
