import { supabase } from './supabase'
import type { Category, Product, ProductWithCategory } from './types'

/**
 * Fetch all categories from the database
 */
export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name', { ascending: true })

  if (error) {
    console.error('Error fetching categories:', error)
    return []
  }

  return data || []
}

/**
 * Fetch all products with their category information
 */
export async function getProducts(): Promise<ProductWithCategory[]> {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      category:categories(*)
    `)
    .order('product_name', { ascending: true })

  if (error) {
    console.error('Error fetching products:', error)
    return []
  }

  return data || []
}

/**
 * Fetch products by category
 */
export async function getProductsByCategory(categoryName: string): Promise<ProductWithCategory[]> {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      category:categories!inner(*)
    `)
    .eq('categories.name', categoryName)
    .order('product_name', { ascending: true })

  if (error) {
    console.error('Error fetching products by category:', error)
    return []
  }

  return data || []
}

/**
 * Fetch featured products
 */
export async function getFeaturedProducts(): Promise<ProductWithCategory[]> {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      category:categories(*)
    `)
    .eq('is_featured', true)
    .order('product_name', { ascending: true })
    .limit(8)

  if (error) {
    console.error('Error fetching featured products:', error)
    console.error('Error details:', error.message, error.code)
    return []
  }

  return data || []
}

/**
 * Fetch popular products (top-rated products)
 */
export async function getPopularProducts(): Promise<ProductWithCategory[]> {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      category:categories(*)
    `)
    .order('product_name', { ascending: true })
    .limit(6)

  if (error) {
    console.error('Error fetching popular products:', error)
    return []
  }

  return data || []
}

/**
 * Search products by name or description
 */
export async function searchProducts(query: string): Promise<ProductWithCategory[]> {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      category:categories(*)
    `)
    .or(`product_name.ilike.%${query}%,short_description.ilike.%${query}%,full_description.ilike.%${query}%`)
    .order('product_name', { ascending: true })

  if (error) {
    console.error('Error searching products:', error)
    return []
  }

  return data || []
}

/**
 * Get a single product by ID
 */
export async function getProductById(id: number): Promise<ProductWithCategory | null> {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      category:categories(*)
    `)
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching product:', error)
    return null
  }

  return data
}
