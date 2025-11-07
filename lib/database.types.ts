export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: number
          name: string
          description: string | null
          image_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          name: string
          description?: string | null
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          name?: string
          description?: string | null
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: number
          category_id: number | null
          product_name: string
          short_description: string
          full_description: string | null
          ingredients: string[] | null
          packaging_type: string | null
          weight_volume: string | null
          image_url: string
          pack_size: string | null
          stock_status: string | null
          tags: string[] | null
          is_featured: boolean | null
          is_popular: boolean | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          category_id?: number | null
          product_name: string
          short_description: string
          full_description?: string | null
          ingredients?: string[] | null
          packaging_type?: string | null
          weight_volume?: string | null
          image_url: string
          pack_size?: string | null
          stock_status?: string | null
          tags?: string[] | null
          is_featured?: boolean | null
          is_popular?: boolean | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          category_id?: number | null
          product_name?: string
          short_description?: string
          full_description?: string | null
          ingredients?: string[] | null
          packaging_type?: string | null
          weight_volume?: string | null
          image_url?: string
          pack_size?: string | null
          stock_status?: string | null
          tags?: string[] | null
          is_featured?: boolean | null
          is_popular?: boolean | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}