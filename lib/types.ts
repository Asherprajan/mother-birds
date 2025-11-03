import { Database } from './database.types'

// Type aliases for easier use
export type Category = Database['public']['Tables']['categories']['Row']
export type Product = Database['public']['Tables']['products']['Row']

// Extended product type with category information
export type ProductWithCategory = Product & {
  category?: Category | null
}

// Product display type matching the current UI structure
export interface ProductDisplay {
  id: number
  name: string
  category: string
  image: string
  packSize: string
  description: string
  fullDescription: string | null
  ingredients: string[] | null
  packagingType: string | null
  weightVolume: string | null
  stockStatus: string | null
  tags: string[] | null
  isPopular: boolean
  isFeatured: boolean
}

// Convert database product to display format
export function productToDisplay(product: ProductWithCategory): ProductDisplay {
  return {
    id: product.id,
    name: product.product_name,
    category: product.category?.name || 'Uncategorized',
    image: product.image_url,
    packSize: product.pack_size || '',
    description: product.short_description,
    fullDescription: product.full_description,
    ingredients: product.ingredients,
    packagingType: product.packaging_type,
    weightVolume: product.weight_volume,
    stockStatus: product.stock_status,
    tags: product.tags,
    isPopular: product.is_popular || false,
    isFeatured: product.is_featured || false,
  }
}
