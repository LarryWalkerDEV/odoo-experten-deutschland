import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'
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
  try {
    // Use relative URL for API calls in production
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/articles?category=odoo`, {
      cache: 'no-store'
    })
    
    if (!res.ok) {
      throw new Error('Failed to fetch articles')
    }
    
    const { data } = await res.json()
    return data || []
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
}

export default async function OdooPage() {
  const articles = await getArticles()

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Odoo ERP Wissen & Ressourcen
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Entdecken Sie umfassende Anleitungen, Best Practices und Expertentipps 
              für die erfolgreiche Implementierung und Nutzung von Odoo ERP
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Suchen Sie nach Odoo-Themen..."
                  className="w-full px-6 py-4 pr-12 text-lg border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">{articles.length}+</div>
              <div className="text-gray-600 mt-1">Artikel</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">30+</div>
              <div className="text-gray-600 mt-1">Module erklärt</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">100+</div>
              <div className="text-gray-600 mt-1">Anleitungen</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600 mt-1">Verfügbar</div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
              Neueste Artikel
            </h2>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-white transition-colors">
                <Filter className="w-4 h-4" />
                Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-white transition-colors">
                <BookOpen className="w-4 h-4" />
                Kategorien
              </button>
            </div>
          </div>

          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article: any) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Artikel werden geladen...
              </h3>
              <p className="text-gray-600">
                Unsere Experten arbeiten an neuen Inhalten für Sie.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}