import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import { Cookie, Shield, Info, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cookie-Richtlinien',
  description: 'Informationen über die Verwendung von Cookies auf odoo-experten-deutschland.de',
}

export default function CookieRichtlinien() {
  return (
    <div className="min-min-h-svh bg-white dark:bg-gray-900">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-full md:max-w-4xl mx-auto mobile-container overflow-hidden">
          <div className="mb-2 sm:mb-3 md:mb-4 sm:mb-3 sm:mb-2 sm:mb-3 md:mb-4 md:mb-6 md:mb-8">
            <div className="flex items-center gap-3 mb-2 sm:mb-3 md:mb-4">
              <div className="w-5 h-5 sm:w-6 sm:h-6 sm:w-8 sm:h-8 sm:w-10 sm:h-10 sm:w-12 sm:h-12 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center">
                <Cookie className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600 dark:text-violet-400" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Cookie-Richtlinien
              </h1>
            </div>
            <p className="mobile-text text-gray-600 dark:text-gray-400">
              Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600" />
                Was sind Cookies?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 md:mb-4">
                Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie unsere Website besuchen. 
                Sie helfen uns dabei, Ihre Präferenzen zu speichern, die Website-Leistung zu verbessern und Ihnen eine 
                personalisierte Erfahrung zu bieten.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Diese Cookie-Richtlinie erklärt, welche Arten von Cookies wir verwenden, warum wir sie verwenden und 
                wie Sie Ihre Cookie-Einstellungen verwalten können. Unsere Nutzung von Cookies erfolgt in Übereinstimmung 
                mit der EU-Datenschutz-Grundverordnung (DSGVO) und der ePrivacy-Richtlinie.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600" />
                Arten von Cookies, die wir verwenden
              </h2>
              
              <div className="space-mobile">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="mobile-text mobile-text font-semibold text-gray-900 dark:text-white mb-3">
                    1. Notwendige Cookies
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Diese Cookies sind für die Grundfunktionen unserer Website unerlässlich. Sie können nicht deaktiviert werden.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li><strong>Sitzungscookies:</strong> Temporäre Cookies, die Ihre Sitzung während des Besuchs verwalten</li>
                    <li><strong>Cookie-Einstellungen:</strong> Speichert Ihre Cookie-Präferenzen</li>
                    <li><strong>Sicherheitscookies:</strong> Schützt vor CSRF-Angriffen und anderen Sicherheitsbedrohungen</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="mobile-text mobile-text font-semibold text-gray-900 dark:text-white mb-3">
                    2. Analyse-Cookies
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li><strong>Google Analytics:</strong> Erfasst anonymisierte Daten über Seitenaufrufe und Nutzerverhalten</li>
                    <li><strong>Hotjar:</strong> Erstellt Heatmaps und Aufzeichnungen zur Verbesserung der Benutzererfahrung</li>
                  </ul>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    <em>Diese Cookies werden nur mit Ihrer ausdrücklichen Zustimmung aktiviert.</em>
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="mobile-text mobile-text font-semibold text-gray-900 dark:text-white mb-3">
                    3. Marketing-Cookies
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Diese Cookies werden verwendet, um Werbung relevanter für Sie zu gestalten.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li><strong>Google Ads:</strong> Zeigt relevante Anzeigen basierend auf Ihren Interessen</li>
                    <li><strong>Facebook Pixel:</strong> Ermöglicht gezieltes Marketing auf Social-Media-Plattformen</li>
                  </ul>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    <em>Diese Cookies werden nur mit Ihrer ausdrücklichen Zustimmung aktiviert.</em>
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600" />
                Ihre Cookie-Einstellungen verwalten
              </h2>
              
              <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-6 mb-3 sm:mb-2 sm:mb-3 md:mb-4 md:mb-6">
                <h3 className="mobile-text font-semibold text-gray-900 dark:text-white mb-3">
                  Cookie-Banner
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 md:mb-4">
                  Beim ersten Besuch unserer Website wird Ihnen ein Cookie-Banner angezeigt, in dem Sie:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Alle Cookies akzeptieren können</li>
                  <li>Nur notwendige Cookies akzeptieren können</li>
                  <li>Ihre Einstellungen individuell anpassen können</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-3 sm:mb-2 sm:mb-3 md:mb-4 md:mb-6">
                <h3 className="mobile-text font-semibold text-gray-900 dark:text-white mb-3">
                  Browser-Einstellungen
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 md:mb-4">
                  Sie können Cookies auch über Ihre Browser-Einstellungen verwalten:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Chrome:</strong> Einstellungen → Datenschutz und Sicherheit → Cookies</li>
                  <li><strong>Firefox:</strong> Einstellungen → Datenschutz & Sicherheit → Cookies</li>
                  <li><strong>Safari:</strong> Einstellungen → Datenschutz → Cookies</li>
                  <li><strong>Edge:</strong> Einstellungen → Datenschutz → Cookies</li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Hinweis:</strong> Das Blockieren bestimmter Cookies kann die Funktionalität unserer Website beeinträchtigen.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4">
                Rechtsgrundlage
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 md:mb-4">
                Die Verarbeitung personenbezogener Daten durch Cookies erfolgt auf Grundlage von:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Art. 6 Abs. 1 lit. a DSGVO:</strong> Ihre Einwilligung für Analyse- und Marketing-Cookies</li>
                <li><strong>Art. 6 Abs. 1 lit. f DSGVO:</strong> Berechtigte Interessen für notwendige Cookies</li>
                <li><strong>§ 25 TTDSG:</strong> Anforderungen für Endgerätezugriff</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4">
                Speicherdauer
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 sm:touch-target px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Cookie-Typ
                      </th>
                      <th className="px-4 sm:touch-target px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Speicherdauer
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        Sitzungscookies
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        Bis zum Schließen des Browsers
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        Cookie-Einstellungen
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        12 Monate
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        Google Analytics
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        2 Jahre
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        Marketing-Cookies
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        3-24 Monate (je nach Anbieter)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4">
                Kontakt
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 md:mb-4">
                Bei Fragen zu unseren Cookie-Richtlinien oder zum Datenschutz kontaktieren Sie uns bitte:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Apex AI Research Labs LLC</strong><br />
                  1309 Coffeen Avenue STE 1200<br />
                  Sheridan, Wyoming 82801<br />
                  USA<br /><br />
                  E-Mail: <a className="touch-target" href="mailto:info@odoo-experten-deutschland.de" className="text-violet-600 hover:text-violet-700">
                    info@odoo-experten-deutschland.de
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}