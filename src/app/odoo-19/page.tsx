import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'
import { supabase, type Article, type Author } from '@/lib/supabase'
import { Sparkles, Cpu, TrendingUp } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Odoo 19 - Neue Features & KI-Integration',
  description: 'Entdecken Sie die revolutionären Features von Odoo 19: KI-Integration, verbesserte Performance und neue Module für deutsche Unternehmen.',
  alternates: {
    canonical: 'https://odoo-experten-deutschland.de/odoo-19',
  },
}

async function getArticles() {
  const { data: articles, error } = await supabase
    .from('articles')
    .select('*')
    .eq('category', 'odoo-19')
    .eq('status', 'published')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching articles:', error)
    return []
  }

  return articles as Article[]
}

async function getAuthors() {
  const { data: authors, error } = await supabase
    .from('authors')
    .select('*')

  if (error) {
    console.error('Error fetching authors:', error)
    return []
  }

  return authors as Author[]
}

export default async function Odoo19Page() {
  const [articles, authors] = await Promise.all([
    getArticles(),
    getAuthors()
  ])

  const authorMap = authors.reduce((acc, author) => {
    acc[author.id] = author
    return acc
  }, {} as Record<string, Author>)

  const features = [
    {
      icon: Cpu,
      title: "KI-Powered Features",
      description: "Intelligente Automatisierung mit künstlicher Intelligenz"
    },
    {
      icon: TrendingUp,
      title: "50% Schneller",
      description: "Deutlich verbesserte Performance und Ladezeiten"
    },
    {
      icon: Sparkles,
      title: "Neue Module",
      description: "Erweiterte Funktionen für moderne Geschäftsprozesse"
    }
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-600/10 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24 pb-16">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Neueste Version
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Odoo 19 - Die Zukunft ist hier
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
                Entdecken Sie die revolutionären Features von Odoo 19: KI-Integration, 
                verbesserte Performance und innovative Module für den deutschen Markt.
              </p>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    <feature.icon className="w-8 h-8 text-purple-600 mb-3" />
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Alles über Odoo 19
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Detaillierte Artikel zu Features, Migration und Best Practices
              </p>
            </div>

            {articles.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Artikel werden vorbereitet
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Unsere Experten arbeiten an umfassenden Guides zu Odoo 19.
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Bereit für Odoo 19?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Lassen Sie uns gemeinsam Ihre Migration planen und das volle Potenzial nutzen
            </p>
            <a
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Migration starten
              <Sparkles className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}