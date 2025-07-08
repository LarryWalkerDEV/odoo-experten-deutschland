import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'
import { supabase, type Article, type Author } from '@/lib/supabase'
import { getCachedData } from '@/lib/redis'
import { CACHE_KEYS, CACHE_TTL } from '@/lib/cache-keys'
import { Search, Filter, BookOpen } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Odoo ERP Artikel & Anleitungen',
  description: 'Umfassende Informationen zu Odoo ERP - Features, Module, Implementierung und Best Practices für deutsche Unternehmen.',
  alternates: {
    canonical: 'https://odoo-experten-deutschland.de/odoo',
  },
}

async function getArticles() {
  return getCachedData<Article[]>(
    CACHE_KEYS.CATEGORY_ARTICLES('odoo'),
    async () => {
      const { data: articles, error } = await supabase
        .from('articles')
        .select('*')
        .eq('category', 'odoo')
        .eq('status', 'published')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching articles:', error)
        return []
      }

      return articles as Article[]
    },
    CACHE_TTL.MEDIUM // Cache for 1 hour
  )
}

async function getAuthors() {
  return getCachedData<Author[]>(
    CACHE_KEYS.NAV_ITEMS, // Reuse nav cache key since authors are fairly static
    async () => {
      const { data: authors, error } = await supabase
        .from('authors')
        .select('*')

      if (error) {
        console.error('Error fetching authors:', error)
        return []
      }

      return authors as Author[]
    },
    CACHE_TTL.LONG // Cache for 24 hours
  )
}

export default async function OdooPage() {
  const [articles, authors] = await Promise.all([
    getArticles(),
    getAuthors()
  ])

  // Create author map for quick lookup
  const authorMap = authors.reduce((acc, author) => {
    acc[author.id] = author
    return acc
  }, {} as Record<string, Author>)

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24 pb-16">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Odoo ERP - Wissen & Anleitungen
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
                Entdecken Sie umfassende Artikel zu Odoo ERP - von Grundlagen bis zu fortgeschrittenen 
                Themen, speziell für deutsche Unternehmen aufbereitet.
              </p>

              {/* Stats */}
              <div className="flex items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">{articles.length}</strong> Artikel
                  </span>
                </div>
                <div className="w-px h-5 bg-gray-300 dark:bg-gray-600" />
                <div className="text-gray-700 dark:text-gray-300">
                  Regelmäßig aktualisiert
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter Bar */}
        <section className="sticky top-20 z-40 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Artikel durchsuchen..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Filter className="w-5 h-5" />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {articles.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Noch keine Artikel verfügbar
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Wir arbeiten daran, bald spannende Inhalte für Sie bereitzustellen.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => {
                  const author = authorMap[article.author_id] || 
                    (article.author ? authors.find(a => a.name === article.author) : null)
                  
                  return (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      author={author || undefined}
                      index={index}
                    />
                  )
                })}
              </div>
            )}

            {/* Load More */}
            {articles.length > 0 && articles.length >= 12 && (
              <div className="text-center mt-12">
                <button className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700">
                  Weitere Artikel laden
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-to-br from-primary to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Verpassen Sie keine Odoo-News
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Erhalten Sie die neuesten Artikel und Tipps direkt in Ihr Postfach
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:bg-white/30 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-primary rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Abonnieren
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}