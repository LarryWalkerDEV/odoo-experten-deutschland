import { createClient } from '@supabase/supabase-js'

// Use placeholder values if environment variables are not set
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Type definitions for our data
export interface Article {
  id: string
  keyword_id: number
  primary_keyword: string
  url_slug: string
  slug?: string
  title: string
  meta_title?: string
  meta_description: string
  content: any // Can be string or JSON
  author_id: string
  author?: string
  word_count: number
  status: string
  created_at: string
  updated_at: string
  category?: string
  production_url?: string
}

export interface Author {
  id: string
  slug: string
  name: string
  title?: string
  bio?: string
  image_url?: string
  experience?: string
  expertise?: string
  social_links?: any
  created_at: string
}