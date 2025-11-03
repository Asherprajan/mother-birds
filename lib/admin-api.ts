import { supabase } from './supabase'
import type { Category, Product, ProductWithCategory } from './types'

// ============ CATEGORY ADMIN OPERATIONS ============

/**
 * Create a new category
 */
export async function createCategory(data: {
  name: string
  description?: string
  image_url?: string
}) {
  const { data: category, error } = await supabase
    .from('categories')
    .insert([data])
    .select()
    .single()

  if (error) {
    throw error
  }

  return category
}

/**
 * Update an existing category
 */
export async function updateCategory(id: number, data: {
  name?: string
  description?: string
  image_url?: string
}) {
  const { data: category, error } = await supabase
    .from('categories')
    .update(data)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    throw error
  }

  return category
}

/**
 * Delete a category
 */
export async function deleteCategory(id: number) {
  const { error } = await supabase
    .from('categories')
    .delete()
    .eq('id', id)

  if (error) {
    throw error
  }
}

// ============ PRODUCT ADMIN OPERATIONS ============

/**
 * Create a new product
 */
export async function createProduct(data: {
  category_id?: number
  product_name: string
  short_description: string
  full_description?: string
  ingredients?: string[]
  packaging_type?: string
  weight_volume?: string
  image_url: string
  pack_size?: string
  stock_status?: string
  tags?: string[]
  is_featured?: boolean
}) {
  const { data: product, error } = await supabase
    .from('products')
    .insert([data])
    .select(`
      *,
      category:categories(*)
    `)
    .single()

  if (error) {
    throw error
  }

  return product
}

/**
 * Update an existing product
 */
export async function updateProduct(id: number, data: {
  category_id?: number
  product_name?: string
  short_description?: string
  full_description?: string
  ingredients?: string[]
  packaging_type?: string
  weight_volume?: string
  image_url?: string
  pack_size?: string
  stock_status?: string
  tags?: string[]
  is_featured?: boolean
}) {
  const { data: product, error } = await supabase
    .from('products')
    .update(data)
    .eq('id', id)
    .select(`
      *,
      category:categories(*)
    `)
    .single()

  if (error) {
    throw error
  }

  return product
}

/**
 * Delete a product
 */
export async function deleteProduct(id: number) {
  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id)

  if (error) {
    throw error
  }
}

/**
 * Get all products for admin (no filters)
 */
export async function getAllProductsAdmin(): Promise<ProductWithCategory[]> {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      category:categories(*)
    `)
    .order('created_at', { ascending: false })

  if (error) {
    throw error
  }

  return data || []
}

/**
 * Get all categories for admin
 */
export async function getAllCategoriesAdmin(): Promise<Category[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    throw error
  }

  return data || []
}
