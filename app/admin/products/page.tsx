"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2, Package, Search } from 'lucide-react'
import { getAllProductsAdmin, deleteProduct } from '@/lib/admin-api'
import type { ProductWithCategory } from '@/lib/types'
import { toast } from 'sonner'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductsPage() {
  const [products, setProducts] = useState<ProductWithCategory[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    try {
      setLoading(true)
      const productsData = await getAllProductsAdmin()
      setProducts(productsData)
    } catch (error: any) {
      toast.error('Failed to load data: ' + error.message)
    } finally {
      setLoading(false)
    }
  }



  const handleDelete = async (id: number, name: string) => {
    if (!confirm(`Are you sure you want to delete "${name}"?`)) {
      return
    }

    try {
      await deleteProduct(id)
      toast.success('Product deleted successfully')
      loadData()
    } catch (error: any) {
      toast.error('Failed to delete product: ' + error.message)
    }
  }

  const filteredProducts = products.filter(product =>
    product.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.short_description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
            Products
          </h1>
          <p className="text-gray-600 text-lg">Manage all products</p>
        </div>
        <Link
          href="/admin/products/add"
          className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-3 text-lg"
        >
          <Plus size={24} />
          Add Product
        </Link>
      </div>

      {/* Search */}
      <div className="mb-8 relative">
        <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={22} />
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-14 pr-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all outline-none shadow-sm"
        />
      </div>

      {/* Products Table */}
      {loading ? (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-8 space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl shadow-md">
          <Package className="mx-auto text-gray-400 mb-6" size={64} />
          <h3 className="text-2xl font-bold text-gray-700 mb-3">No products found</h3>
          <p className="text-gray-500 mb-6 text-lg">Get started by creating your first product</p>
          <Link
            href="/admin/products/add"
            className="inline-block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg transition-all"
          >
            Create Product
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                <tr>
                  <th className="text-left px-8 py-5 text-sm font-bold text-gray-700 uppercase tracking-wide">Product</th>
                  <th className="text-left px-8 py-5 text-sm font-bold text-gray-700 uppercase tracking-wide">Category</th>
                  <th className="text-left px-8 py-5 text-sm font-bold text-gray-700 uppercase tracking-wide">Stock</th>
                  <th className="text-left px-8 py-5 text-sm font-bold text-gray-700 uppercase tracking-wide">Status</th>
                  <th className="text-right px-8 py-5 text-sm font-bold text-gray-700 uppercase tracking-wide">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                          <Image
                            src={product.image_url || '/placeholder.svg'}
                            alt={product.product_name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-base">{product.product_name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-sm text-gray-700 font-medium">
                        {product.category?.name || 'Uncategorized'}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${
                        product.stock_status === 'In Stock' 
                          ? 'bg-green-100 text-green-700 border border-green-200' 
                          : 'bg-red-100 text-red-700 border border-red-200'
                      }`}>
                        {product.stock_status}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex flex-wrap gap-1.5">
                        {product.is_featured && (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 border border-amber-200">
                            Featured
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center justify-end gap-3">
                        <Link
                          href={`/admin/products/edit/${product.id}`}
                          className="p-2.5 text-blue-600 hover:bg-blue-50 rounded-xl transition-colors shadow-sm hover:shadow-md border border-blue-100"
                        >
                          <Edit size={20} />
                        </Link>
                        <button
                          onClick={() => handleDelete(product.id, product.product_name)}
                          className="p-2.5 text-red-600 hover:bg-red-50 rounded-xl transition-colors shadow-sm hover:shadow-md border border-red-100"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}


    </div>
  )
}
