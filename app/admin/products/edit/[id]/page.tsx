"use client"

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft, Save } from 'lucide-react'
import Link from 'next/link'
import { updateProduct, getAllCategoriesAdmin, getAllProductsAdmin } from '@/lib/admin-api'
import type { Category, ProductWithCategory } from '@/lib/types'
import { toast } from 'sonner'
import ImageUpload from '@/components/ImageUpload'

export default function EditProductPage() {
  const router = useRouter()
  const params = useParams()
  const productId = parseInt(params.id as string)
  
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(false)
  const [loadingData, setLoadingData] = useState(true)
  const [formData, setFormData] = useState({
    category_id: '',
    product_name: '',
    short_description: '',
    full_description: '',
    ingredients: '',
    packaging_type: '',
    weight_volume: '',
    image_url: '',
    stock_status: 'In Stock',
    tags: '',
    is_featured: false,
  })

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    try {
      setLoadingData(true)
      const [productsData, categoriesData] = await Promise.all([
        getAllProductsAdmin(),
        getAllCategoriesAdmin(),
      ])
      
      const product = productsData.find(p => p.id === productId)
      if (!product) {
        toast.error('Product not found')
        router.push('/admin/products')
        return
      }

      setFormData({
        category_id: product.category_id?.toString() || '',
        product_name: product.product_name,
        short_description: product.short_description,
        full_description: product.full_description || '',
        ingredients: product.ingredients?.join(', ') || '',
        packaging_type: product.packaging_type || '',
        weight_volume: product.weight_volume || '',
        image_url: product.image_url,
        stock_status: product.stock_status || 'In Stock',
        tags: product.tags?.join(', ') || '',
        is_featured: product.is_featured || false,
      })
      
      setCategories(categoriesData)
    } catch (error: any) {
      toast.error('Failed to load data: ' + error.message)
      router.push('/admin/products')
    } finally {
      setLoadingData(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.image_url) {
      toast.error('Please upload a product image')
      return
    }

    const productData = {
      category_id: formData.category_id ? parseInt(formData.category_id) : undefined,
      product_name: formData.product_name,
      short_description: formData.short_description,
      full_description: formData.full_description || undefined,
      ingredients: formData.ingredients ? formData.ingredients.split(',').map(i => i.trim()).filter(Boolean) : undefined,
      packaging_type: formData.packaging_type || undefined,
      weight_volume: formData.weight_volume || undefined,
      image_url: formData.image_url,
      stock_status: formData.stock_status,
      tags: formData.tags ? formData.tags.split(',').map(t => t.trim()).filter(Boolean) : undefined,
      is_featured: formData.is_featured,
    }

    try {
      setLoading(true)
      await updateProduct(productId, productData)
      toast.success('Product updated successfully')
      router.push('/admin/products')
    } catch (error: any) {
      toast.error('Failed to update product: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  if (loadingData) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading product...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/admin/products"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 font-medium"
        >
          <ArrowLeft size={20} />
          Back to Products
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
          Edit Product
        </h1>
        <p className="text-gray-600 text-lg">Update product information</p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Product Image */}
          <div>
            <label className="block text-base font-bold text-gray-900 mb-3">
              Product Image *
            </label>
            <ImageUpload
              value={formData.image_url}
              onChange={(url) => setFormData({ ...formData, image_url: url })}
              onRemove={() => setFormData({ ...formData, image_url: '' })}
            />
          </div>

          {/* Basic Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 border-b pb-3">Basic Information</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Product Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.product_name}
                  onChange={(e) => setFormData({ ...formData, product_name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all outline-none text-base"
                  placeholder="e.g., Mango Pickle Premium"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={formData.category_id}
                  onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all outline-none text-base"
                >
                  <option value="">Select Category</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              
            </div>
          </div>

          {/* Descriptions */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 border-b pb-3">Descriptions</h3>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Short Description *
              </label>
              <textarea
                required
                value={formData.short_description}
                onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all outline-none resize-none text-base"
                placeholder="Brief description for product cards..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Description
              </label>
              <textarea
                value={formData.full_description}
                onChange={(e) => setFormData({ ...formData, full_description: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all outline-none resize-none text-base"
                placeholder="Detailed product information..."
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 border-b pb-3">Product Details</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Packaging Type
                </label>
                <input
                  type="text"
                  value={formData.packaging_type}
                  onChange={(e) => setFormData({ ...formData, packaging_type: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all outline-none text-base"
                  placeholder="e.g., Glass Jar, Plastic Bottle"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Weight/Volume
                </label>
                <input
                  type="text"
                  value={formData.weight_volume}
                  onChange={(e) => setFormData({ ...formData, weight_volume: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all outline-none text-base"
                  placeholder="e.g., 500g, 1L"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Stock Status
                </label>
                <select
                  value={formData.stock_status}
                  onChange={(e) => setFormData({ ...formData, stock_status: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all outline-none text-base"
                >
                  <option value="In Stock">In Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                  <option value="Low Stock">Low Stock</option>
                </select>
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ingredients (comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.ingredients}
                  onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all outline-none text-base"
                  placeholder="e.g., Mango, Salt, Spices, Oil"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all outline-none text-base"
                  placeholder="e.g., spicy, traditional, organic"
                />
              </div>
            </div>
          </div>

          {/* Product Flags */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 border-b pb-3">Product Flags</h3>
            
            <div className="flex gap-8">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.is_featured}
                  onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                  className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <span className="text-base font-medium text-gray-700">Featured Product</span>
              </label>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-6 border-t">
            <Link
              href="/admin/products"
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
                  <span>Update Product</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}