import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import { Shield, Lock, Database, Globe, Mail, FileText, Users, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der Odoo Experten Deutschland - Apex AI Research Labs LLC',
  robots: 'noindex,follow'
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Datenschutzerklärung
              </h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten 
                daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In dieser 
                Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im 
                Rahmen unserer Website.
              </p>
            </section>

            {/* Responsible Party */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-violet-600" />
                Verantwortlicher
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Apex AI Research Labs LLC</strong><br />
                  Inhaberin: Olga Goertz<br />
                  1309 Coffeen Avenue STE 1200<br />
                  Sheridan, Wyoming 82801<br />
                  USA<br /><br />
                  E-Mail: <a href="mailto:info@odoo-experten-deutschland.de" className="text-violet-600 hover:text-violet-700 underline">
                    info@odoo-experten-deutschland.de
                  </a>
                </p>
              </div>
            </section>

            {/* EU Representative */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Globe className="w-6 h-6 text-violet-600" />
                EU-Vertretung gemäß Art. 27 DSGVO
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <p className="text-gray-700 dark:text-gray-300">
                  Als außerhalb der EU ansässiges Unternehmen haben wir gemäß Art. 27 DSGVO unsere Inhaberin 
                  als Vertreterin in der EU benannt:<br /><br />
                  <strong>Olga Goertz</strong><br />
                  E-Mail: <a href="mailto:info@odoo-experten-deutschland.de" className="text-violet-600 hover:text-violet-700 underline">
                    info@odoo-experten-deutschland.de
                  </a>
                </p>
              </div>
            </section>

            {/* Data Collection Overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Database className="w-6 h-6 text-violet-600" />
                Datenerfassung auf unserer Website
              </h2>
              
              <div className="space-y-6">
                {/* Server Log Files */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Server-Log-Dateien
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Der Provider unserer Website erhebt und speichert automatisch Informationen in so genannten 
                    Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-3">
                    <li>Browsertyp und Browserversion</li>
                    <li>Verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse (anonymisiert)</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)<br />
                    <strong>Speicherdauer:</strong> 7 Tage
                  </p>
                </div>

                {/* Cookies */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Cookies
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die auf 
                    Ihrem Endgerät gespeichert werden. Wir nutzen verschiedene Arten von Cookies:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-3">
                    <li><strong>Notwendige Cookies:</strong> Für den Betrieb der Website erforderlich</li>
                    <li><strong>Analyse-Cookies:</strong> Zur Verbesserung unserer Website (nur mit Ihrer Zustimmung)</li>
                    <li><strong>Marketing-Cookies:</strong> Für personalisierte Werbung (nur mit Ihrer Zustimmung)</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300">
                    Detaillierte Informationen finden Sie in unseren{' '}
                    <a href="/cookie-richtlinien" className="text-violet-600 hover:text-violet-700 underline">
                      Cookie-Richtlinien
                    </a>.
                  </p>
                </div>

                {/* Contact Forms */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Kontaktformular
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                    Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                    der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)<br />
                    <strong>Speicherdauer:</strong> 6 Monate nach Abschluss der Anfrage
                  </p>
                </div>
              </div>
            </section>

            {/* Third-Party Services */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-violet-600" />
                Dienste von Drittanbietern
              </h2>
              
              <div className="space-y-6">
                {/* Google Analytics */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Google Analytics
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Wir verwenden Google Analytics nur mit Ihrer ausdrücklichen Zustimmung. Google Analytics 
                    verwendet Cookies, um eine Analyse der Benutzung der Website zu ermöglichen. Die durch 
                    die Cookies erzeugten Informationen werden in der Regel an einen Server von Google in 
                    den USA übertragen und dort gespeichert.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Anbieter:</strong> Google Ireland Limited<br />
                    <strong>Zweck:</strong> Webanalyse<br />
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)<br />
                    <strong>Datenschutzerklärung:</strong>{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                       className="text-violet-600 hover:text-violet-700 underline">
                      Google Privacy Policy
                    </a>
                  </p>
                </div>

                {/* Supabase */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Supabase
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Wir nutzen Supabase als Backend-Service für unsere Website. Supabase speichert und 
                    verarbeitet Daten, die für den Betrieb unserer Website erforderlich sind.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Anbieter:</strong> Supabase, Inc.<br />
                    <strong>Zweck:</strong> Datenspeicherung und -verarbeitung<br />
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)<br />
                    <strong>Datenschutzerklärung:</strong>{' '}
                    <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" 
                       className="text-violet-600 hover:text-violet-700 underline">
                      Supabase Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* User Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-violet-600" />
                Ihre Rechte
              </h2>
              
              <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Ihnen stehen grundsätzlich folgende Rechte zu:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Auskunftsrecht:</strong> Sie können Auskunft über Ihre gespeicherten Daten verlangen</li>
                  <li><strong>Berichtigungsrecht:</strong> Sie können die Berichtigung unrichtiger Daten verlangen</li>
                  <li><strong>Löschungsrecht:</strong> Sie können die Löschung Ihrer Daten verlangen</li>
                  <li><strong>Einschränkungsrecht:</strong> Sie können die Einschränkung der Verarbeitung verlangen</li>
                  <li><strong>Widerspruchsrecht:</strong> Sie können der Verarbeitung widersprechen</li>
                  <li><strong>Datenübertragbarkeit:</strong> Sie können Ihre Daten in einem gängigen Format erhalten</li>
                  <li><strong>Widerruf:</strong> Sie können erteilte Einwilligungen jederzeit widerrufen</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
                  <a href="mailto:info@odoo-experten-deutschland.de" className="text-violet-600 hover:text-violet-700 underline">
                    info@odoo-experten-deutschland.de
                  </a>
                </p>
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-violet-600" />
                Datensicherheit
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Wir verwenden geeignete technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten 
                  gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, 
                  Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen 
                  werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Die Datenübertragung im Internet erfolgt grundsätzlich über eine SSL-Verschlüsselung. 
                  Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von 
                  "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </div>
            </section>

            {/* Data Retention */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-violet-600" />
                Speicherdauer
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <p className="text-gray-700 dark:text-gray-300">
                  Wir speichern Ihre personenbezogenen Daten nur so lange, wie dies für die Erfüllung der 
                  Zwecke erforderlich ist, für die sie erhoben wurden, oder wie dies gesetzlich vorgeschrieben ist. 
                  Nach Ablauf der jeweiligen Fristen werden die entsprechenden Daten routinemäßig gelöscht.
                </p>
              </div>
            </section>

            {/* Complaint Right */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-violet-600" />
                Beschwerderecht
              </h2>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
                <p className="text-gray-700 dark:text-gray-300">
                  Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die 
                  DSGVO verstößt, haben Sie das Recht, sich bei einer Aufsichtsbehörde zu beschweren. 
                  In Deutschland ist dies die jeweilige Landesdatenschutzbehörde Ihres Bundeslandes.
                </p>
              </div>
            </section>

            {/* Updates */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Änderungen dieser Datenschutzerklärung
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen 
                rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der 
                Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Mail className="w-6 h-6 text-violet-600" />
                Kontakt für Datenschutzfragen
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <p className="text-gray-700 dark:text-gray-300">
                  Bei Fragen zum Datenschutz oder zur Verarbeitung Ihrer persönlichen Daten können Sie sich 
                  jederzeit an uns wenden:<br /><br />
                  <strong>E-Mail:</strong>{' '}
                  <a href="mailto:info@odoo-experten-deutschland.de" className="text-violet-600 hover:text-violet-700 underline">
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