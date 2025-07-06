import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'
import { Server, Shield, Cloud, Globe } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Odoo Hosting - Die besten Lösungen im Vergleich',
  description: 'Finden Sie die perfekte Odoo Hosting-Lösung: Cloud vs On-Premise, deutsche Anbieter, Sicherheit und Performance im Vergleich.',
  alternates: {
    canonical: 'https://odoo-experten-deutschland.de/odoo-hosting',
  },
}

export default function OdooHostingPage() {
  const articles: any[] = []
  const authors: any[] = []

  const authorMap = authors.reduce((acc, author) => {
    acc[author.id] = author
    return acc
  }, {} as Record<string, Author>)

  const hostingTypes = [
    {
      icon: Cloud,
      title: "Cloud Hosting",
      description: "Flexibel skalierbar, keine Hardware-Kosten",
      features: ["Automatische Backups", "24/7 Verfügbarkeit", "Keine IT-Wartung"]
    },
    {
      icon: Server,
      title: "On-Premise",
      description: "Volle Kontrolle über Ihre Daten",
      features: ["Maximale Sicherheit", "Individuelle Anpassung", "Compliance-konform"]
    },
    {
      icon: Shield,
      title: "Managed Hosting",
      description: "Rundum-sorglos-Paket mit Support",
      features: ["Proaktive Wartung", "Performance-Optimierung", "Dedizierter Support"]
    }
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600/10 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24 pb-16">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                Deutsche Rechenzentren
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Die perfekte Odoo Hosting-Lösung
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
                Vergleichen Sie Cloud, On-Premise und Managed Hosting Lösungen. 
                Finden Sie den idealen Partner für Ihre Odoo-Installation.
              </p>
            </div>

            {/* Hosting Types */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
              {hostingTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <type.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {type.description}
                  </p>
                  <ul className="space-y-2">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-8 bg-white dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">DSGVO-konform</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">99.9%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Verfügbarkeit</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">ISO 27001</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Zertifiziert</div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Hosting-Ratgeber & Vergleiche
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Detaillierte Analysen und Empfehlungen unserer Experten
              </p>
            </div>

            {articles.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Artikel in Vorbereitung
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Unsere Hosting-Experten erstellen gerade umfassende Vergleiche.
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

        {/* Hosting Calculator CTA */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Hosting-Kosten berechnen
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Nutzen Sie unseren kostenlosen Rechner für eine präzise Kostenschätzung
            </p>
            <a
              href="/odoo-hosting-rechner"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Zum Kostenrechner
              <Shield className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}