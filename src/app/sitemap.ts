import { MetadataRoute } from 'next'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch all articles from Supabase
  const { data: articles } = await supabase
    .from('articles')
    .select('slug, category, updated_at')
    .order('updated_at', { ascending: false })

  const baseUrl = 'https://odoo-experten-deutschland.de'
  const currentDate = new Date().toISOString()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/odoo`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/odoo-19`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/odoo-hosting`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/odoo-hosting-rechner`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/agb`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-richtlinien`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Dynamic article pages
  const articlePages: MetadataRoute.Sitemap = articles?.map((article) => {
    let categoryPath = ''
    switch (article.category) {
      case 'odoo':
        categoryPath = '/odoo/'
        break
      case 'odoo-19':
        categoryPath = '/odoo-19/'
        break
      case 'odoo-hosting':
        categoryPath = '/odoo-hosting/'
        break
      default:
        categoryPath = '/odoo/'
    }

    return {
      url: `${baseUrl}${categoryPath}${article.slug}`,
      lastModified: article.updated_at || currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }
  }) || []

  return [...staticPages, ...articlePages]
}