import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Zap, Shield, TrendingUp, Award } from 'lucide-react'
import { WebsiteStructuredData, OrganizationStructuredData } from '@/components/StructuredData'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <WebsiteStructuredData
        name="Odoo Experten Deutschland"
        url="https://odoo-experten-deutschland.de"
        description="Unabhängiges Wissensportal für Odoo ERP. Fundierte Informationen, neutrale Analysen und aktuelle Artikel zu Odoo, Hosting und Implementierung."
      />
      <OrganizationStructuredData
        name="Odoo Experten Deutschland"
        url="https://odoo-experten-deutschland.de"
        logo="https://tbppogohivsxgiavbnvp.supabase.co/storage/v1/object/public/odoo/Logo.png"
        sameAs={[
          "https://www.linkedin.com/company/odoo-experten-deutschland"
        ]}
      />
      <Navigation />
      <main>
        <HeroSection />

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Warum ist Odoo interessant?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Erfahren Sie, was Odoo zu einer der führenden ERP-Lösungen macht
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-100 to-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-violet-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Categories */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ihre Wissensquelle für Odoo
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fundierte Artikel, neutrale Analysen und aktuelle Informationen
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {contentCategories.map((category, index) => (
                <Link
                  key={index}
                  href={category.href}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-8">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {category.description}
                    </p>
                    <div className="flex items-center text-violet-600 font-medium group-hover:gap-3 transition-all">
                      <span>Mehr erfahren</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-100/50 to-purple-100/50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                </Link>
              ))}
            </div>
          </div>
        </section>


        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-violet-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Informieren Sie sich umfassend
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Treffen Sie fundierte Entscheidungen mit unserem neutralen Expertenwissen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/odoo"
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                Artikel durchsuchen
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/odoo-hosting-rechner"
                className="px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:shadow-lg transition-all duration-200 border border-gray-200"
              >
                Kostenrechner nutzen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

const features = [
  {
    icon: Zap,
    title: "All-in-One Lösung",
    description: "Integrieren Sie alle Geschäftsprozesse in einem System",
    benefits: [
      "CRM, Vertrieb & Marketing",
      "Buchhaltung & Finanzen",
      "Lager & Produktion",
      "HR & Projektmanagement"
    ]
  },
  {
    icon: Shield,
    title: "Deutsche Standards",
    description: "Vollständig konform mit deutschen Vorschriften",
    benefits: [
      "DSGVO-konform",
      "GoBD-zertifiziert",
      "Deutsche Lokalisierung",
      "Rechtssicherheit"
    ]
  },
  {
    icon: TrendingUp,
    title: "Skalierbar & Flexibel",
    description: "Wächst mit Ihrem Unternehmen mit",
    benefits: [
      "Modularer Aufbau",
      "Cloud oder On-Premise",
      "Anpassbare Workflows",
      "API-Integration"
    ]
  }
]

const contentCategories = [
  {
    title: "Odoo Grundlagen",
    description: "Umfassende Anleitungen zu allen Odoo-Modulen und Funktionen für den deutschen Markt",
    href: "/odoo",
    icon: Award,
    gradient: "from-violet-600 to-purple-600"
  },
  {
    title: "Odoo 19 Features",
    description: "Entdecken Sie die neuesten Funktionen und KI-Integrationen in Odoo 19",
    href: "/odoo-19",
    icon: Zap,
    gradient: "from-purple-600 to-pink-600"
  },
  {
    title: "Hosting-Lösungen",
    description: "Finden Sie die perfekte Hosting-Lösung für Ihre Odoo-Installation",
    href: "/odoo-hosting",
    icon: Shield,
    gradient: "from-blue-600 to-cyan-600"
  }
]

const stats = [
  { value: "198", label: "Fachartikel" },
  { value: "3", label: "Hauptkategorien" },
  { value: "70+", label: "Odoo Module" },
  { value: "100%", label: "Kostenlos" }
]