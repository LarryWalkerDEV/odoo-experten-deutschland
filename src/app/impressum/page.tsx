import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import { Building2, Mail, User, Globe, Shield, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum der Odoo Experten Deutschland - Apex AI Research Labs LLC',
  robots: 'noindex,follow'
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center">
                <Scale className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Impressum
              </h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Angaben gemäß § 5 TMG
            </p>
          </div>

          <div className="space-y-8">
            {/* Company Information */}
            <section className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-violet-600" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Unternehmensinformationen
                </h2>
              </div>
              <div className="text-gray-700 dark:text-gray-300 space-y-2">
                <p className="font-semibold">Apex AI Research Labs LLC</p>
                <p>1309 Coffeen Avenue STE 1200</p>
                <p>Sheridan, Wyoming 82801</p>
                <p>USA</p>
              </div>
            </section>

            {/* Owner Information */}
            <section className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <User className="w-5 h-5 text-violet-600" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Inhaberin
                </h2>
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                <p className="font-semibold">Olga Goertz</p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Mail className="w-5 h-5 text-violet-600" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Kontakt
                </h2>
              </div>
              <div className="text-gray-700 dark:text-gray-300 space-y-2">
                <p>
                  <strong>E-Mail:</strong>{' '}
                  <a 
                    href="mailto:info@odoo-experten-deutschland.de" 
                    className="text-violet-600 hover:text-violet-700 underline"
                  >
                    info@odoo-experten-deutschland.de
                  </a>
                </p>
                <p>
                  <strong>Website:</strong>{' '}
                  <a 
                    href="https://odoo-experten-deutschland.de" 
                    className="text-violet-600 hover:text-violet-700 underline"
                  >
                    https://odoo-experten-deutschland.de
                  </a>
                </p>
              </div>
            </section>

            {/* EU Representative */}
            <section className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-5 h-5 text-violet-600" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  EU-Vertretung
                </h2>
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                <p className="mb-2">
                  Als außerhalb der EU ansässiges Unternehmen benennen wir gemäß Art. 27 DSGVO 
                  unsere Inhaberin Olga Goertz als Ansprechpartnerin für datenschutzrechtliche 
                  Angelegenheiten in der EU.
                </p>
              </div>
            </section>

            {/* Content Responsibility */}
            <section className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-violet-600" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h2>
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                <p className="font-semibold">Olga Goertz</p>
                <p>Apex AI Research Labs LLC</p>
                <p>1309 Coffeen Avenue STE 1200</p>
                <p>Sheridan, Wyoming 82801</p>
                <p>USA</p>
              </div>
            </section>

            {/* Legal Notices */}
            <section className="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Hinweise zur Website
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Haftungsausschluss</h3>
                  <p className="text-sm">
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. 
                    Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir 
                    jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG 
                    für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Urheberrecht</h3>
                  <p className="text-sm">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
                    unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
                    Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Hinweis zur Online-Streitbeilegung</h3>
                  <p className="text-sm">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                    <a 
                      href="https://ec.europa.eu/consumers/odr/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-violet-600 hover:text-violet-700 underline"
                    >
                      https://ec.europa.eu/consumers/odr/
                    </a>
                  </p>
                  <p className="text-sm mt-2">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}