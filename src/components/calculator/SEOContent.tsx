"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react'

export default function SEOContent() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="mt-12">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
      >
        <BookOpen className="w-5 h-5 text-violet-600" />
        <span className="font-medium text-gray-900 dark:text-white">
          Mehr Informationen zu Odoo Hosting in Deutschland
        </span>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <article className="mt-6 prose prose-lg max-w-none dark:prose-invert">
              <h1>Odoo Hosting Rechner: Der ultimative Vergleich für deutsche Unternehmen 2025</h1>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 not-prose">
                <h2 className="text-xl font-bold mb-4">Inhaltsverzeichnis</h2>
                <ol className="space-y-2">
                  <li><a href="#was-ist-odoo" className="text-violet-600 hover:text-violet-700">Was ist Odoo und warum das richtige Hosting entscheidend ist</a></li>
                  <li><a href="#hosting-optionen" className="text-violet-600 hover:text-violet-700">Odoo Hosting Optionen im Detail</a></li>
                  <li><a href="#kostenvergleich" className="text-violet-600 hover:text-violet-700">Kostenvergleich: Self-Hosted vs. Managed Hosting</a></li>
                  <li><a href="#enterprise-vs-community" className="text-violet-600 hover:text-violet-700">Enterprise vs. Community Edition</a></li>
                  <li><a href="#gdpr-datenschutz" className="text-violet-600 hover:text-violet-700">GDPR und Datenschutz bei Odoo Hosting</a></li>
                  <li><a href="#entwicklerkosten" className="text-violet-600 hover:text-violet-700">Entwicklerkosten für Self-Hosting Lösungen</a></li>
                  <li><a href="#branchenspezifisch" className="text-violet-600 hover:text-violet-700">Branchenspezifische Hosting-Anforderungen</a></li>
                  <li><a href="#skalierung" className="text-violet-600 hover:text-violet-700">Skalierung und Performance-Optimierung</a></li>
                  <li><a href="#support" className="text-violet-600 hover:text-violet-700">Support und Service-Level Agreements</a></li>
                  <li><a href="#fazit" className="text-violet-600 hover:text-violet-700">Fazit und Empfehlungen</a></li>
                </ol>
              </div>

              <h2 id="was-ist-odoo">Was ist Odoo und warum das richtige Hosting entscheidend ist</h2>
              
              <p>
                Odoo ist eines der weltweit führenden Open-Source-ERP-Systeme und bietet deutschen Unternehmen eine 
                umfassende Business-Software-Suite. Mit über 40 integrierten Geschäftsanwendungen - von CRM und 
                Vertrieb über Buchhaltung bis hin zu Fertigung und E-Commerce - ist Odoo die All-in-One-Lösung 
                für moderne Unternehmen.
              </p>

              <p>
                Die Wahl des richtigen Hosting-Anbieters kann über Erfolg oder Misserfolg Ihrer Odoo-Implementierung 
                entscheiden. Ein unzureichendes Hosting führt zu langsamen Ladezeiten, häufigen Ausfällen und 
                frustrierten Mitarbeitern. Professionelles Odoo Hosting hingegen gewährleistet:
              </p>

              <ul>
                <li><strong>Optimale Performance:</strong> Schnelle Reaktionszeiten und flüssige Arbeitsabläufe</li>
                <li><strong>Hohe Verfügbarkeit:</strong> 99,9% Uptime-Garantie für unterbrechungsfreien Betrieb</li>
                <li><strong>Datensicherheit:</strong> Regelmäßige Backups und verschlüsselte Datenübertragung</li>
                <li><strong>Skalierbarkeit:</strong> Flexible Anpassung an wachsende Anforderungen</li>
                <li><strong>Professioneller Support:</strong> Experten-Hilfe bei technischen Herausforderungen</li>
              </ul>

              <h2 id="hosting-optionen">Odoo Hosting Optionen im Detail</h2>

              <h3>1. Managed Odoo Hosting</h3>
              
              <p>
                Managed Hosting ist die bevorzugte Wahl für Unternehmen, die sich auf ihr Kerngeschäft konzentrieren 
                möchten. Der Hosting-Anbieter übernimmt die komplette technische Betreuung:
              </p>

              <ul>
                <li>Server-Setup und Konfiguration</li>
                <li>Regelmäßige Updates und Sicherheitspatches</li>
                <li>Automatische Backups</li>
                <li>Performance-Monitoring und Optimierung</li>
                <li>24/7 technischer Support</li>
              </ul>

              <p>
                <strong>Vorteile:</strong> Keine IT-Expertise erforderlich, vorhersehbare Kosten, professioneller Support<br/>
                <strong>Nachteile:</strong> Höhere monatliche Kosten, weniger Kontrolle über die Server-Umgebung
              </p>

              <h3>2. Self-Hosted / VPS Lösungen</h3>
              
              <p>
                Bei Self-Hosting mieten Sie einen virtuellen oder dedizierten Server und installieren Odoo selbst. 
                Diese Option bietet maximale Flexibilität, erfordert jedoch erhebliche technische Expertise:
              </p>

              <ul>
                <li>Vollständige Kontrolle über die Server-Umgebung</li>
                <li>Individuelle Anpassungen möglich</li>
                <li>Niedrigere monatliche Grundkosten</li>
                <li>Eigene Sicherheits- und Backup-Strategie erforderlich</li>
              </ul>

              <p>
                <strong>Wichtig:</strong> Die versteckten Kosten für Entwickler und Systemadministratoren können 
                die Einsparungen bei den Hosting-Gebühren schnell übersteigen. Rechnen Sie mit zusätzlichen 
                €1.000-3.000 für das initiale Setup und €500-1.500 monatlich für laufende Wartung.
              </p>

              <h3>3. Odoo.sh - Die offizielle Cloud-Plattform</h3>
              
              <p>
                Odoo.sh ist die offizielle Platform-as-a-Service (PaaS) Lösung von Odoo S.A. Sie kombiniert die 
                Vorteile von Managed Hosting mit entwicklerfreundlichen Features:
              </p>

              <ul>
                <li>Integrierte Entwicklungs-, Staging- und Produktionsumgebungen</li>
                <li>Automatische Builds bei Git-Commits</li>
                <li>Ein-Klick-Backups und Wiederherstellung</li>
                <li>Offizielle Odoo Enterprise Support</li>
              </ul>

              <h2 id="kostenvergleich">Kostenvergleich: Self-Hosted vs. Managed Hosting</h2>

              <p>
                Die Gesamtkosten für Odoo Hosting setzen sich aus verschiedenen Komponenten zusammen. Unser 
                Rechner berücksichtigt alle relevanten Faktoren für eine realistische Kostenschätzung:
              </p>

              <div className="not-prose">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border p-3 text-left">Kostenart</th>
                      <th className="border p-3 text-left">Self-Hosted</th>
                      <th className="border p-3 text-left">Managed Hosting</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3">Server/Hosting</td>
                      <td className="border p-3">€5-150/Monat</td>
                      <td className="border p-3">€30-500/Monat</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800/50">
                      <td className="border p-3">Setup-Kosten</td>
                      <td className="border p-3">€1.000-3.000 einmalig</td>
                      <td className="border p-3">€0-500 einmalig</td>
                    </tr>
                    <tr>
                      <td className="border p-3">Wartung & Updates</td>
                      <td className="border p-3">€500-1.500/Monat</td>
                      <td className="border p-3">Inklusive</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800/50">
                      <td className="border p-3">Backups</td>
                      <td className="border p-3">€50-200/Monat</td>
                      <td className="border p-3">Inklusive</td>
                    </tr>
                    <tr>
                      <td className="border p-3">Support</td>
                      <td className="border p-3">Nicht enthalten</td>
                      <td className="border p-3">Inklusive</td>
                    </tr>
                    <tr className="bg-violet-50 dark:bg-violet-900/20 font-bold">
                      <td className="border p-3">Gesamtkosten (TCO)</td>
                      <td className="border p-3">€555-1.850/Monat + Setup</td>
                      <td className="border p-3">€30-500/Monat</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="enterprise-vs-community">Enterprise vs. Community Edition</h2>

              <p>
                Ein wichtiger Kostenfaktor beim Odoo Hosting ist die Wahl zwischen der kostenlosen Community Edition 
                und der kostenpflichtigen Enterprise Edition:
              </p>

              <h3>Odoo Community Edition</h3>
              <ul>
                <li>✅ Kostenlos und Open Source</li>
                <li>✅ Vollständiger Zugriff auf Kernmodule</li>
                <li>✅ Große Community und viele Erweiterungen</li>
                <li>❌ Keine offiziellen Support</li>
                <li>❌ Einige erweiterte Features fehlen</li>
                <li>❌ Keine mobilen Apps</li>
              </ul>

              <h3>Odoo Enterprise Edition</h3>
              <ul>
                <li>✅ Alle Community Features plus Enterprise-Module</li>
                <li>✅ Offizieller Support von Odoo S.A.</li>
                <li>✅ Mobile Apps für iOS und Android</li>
                <li>✅ Erweiterte Features (Studio, Approvals, IoT, etc.)</li>
                <li>❌ Kostenpflichtig (ca. €20-58 pro Nutzer/Monat)</li>
                <li>❌ Vendor Lock-in</li>
              </ul>

              <p>
                <strong>Tipp:</strong> Viele Hosting-Anbieter wie Odoo4Projects bieten Enterprise-ähnliche Features 
                ohne die hohen Lizenzkosten. Dies kann eine attraktive Alternative für preisbewusste Unternehmen sein.
              </p>

              <h2 id="gdpr-datenschutz">GDPR und Datenschutz bei Odoo Hosting</h2>

              <p>
                Für deutsche Unternehmen ist die Einhaltung der DSGVO (GDPR) bei der Wahl des Hosting-Anbieters 
                von entscheidender Bedeutung. Folgende Aspekte sollten Sie beachten:
              </p>

              <h3>Standort der Server</h3>
              <p>
                Server innerhalb der EU unterliegen automatisch den strengen europäischen Datenschutzbestimmungen. 
                Bei Servern außerhalb der EU müssen zusätzliche Maßnahmen getroffen werden:
              </p>

              <ul>
                <li><strong>EU-Server:</strong> Simplify-ERP (Deutschland), Odoo.sh (Belgien/Frankreich)</li>
                <li><strong>Safe Harbor/Privacy Shield:</strong> AWS, Cloud Clusters (USA mit Datenschutzabkommen)</li>
                <li><strong>Individuelle Prüfung erforderlich:</strong> Andere internationale Anbieter</li>
              </ul>

              <h3>Technische und organisatorische Maßnahmen (TOMs)</h3>
              <p>
                Ihr Hosting-Anbieter muss angemessene Sicherheitsmaßnahmen implementieren:
              </p>

              <ul>
                <li>Verschlüsselte Datenübertragung (SSL/TLS)</li>
                <li>Verschlüsselte Datenspeicherung</li>
                <li>Regelmäßige Sicherheitsupdates</li>
                <li>Zugangskontrolle und Berechtigungsmanagement</li>
                <li>Protokollierung und Monitoring</li>
                <li>Disaster Recovery und Business Continuity Planung</li>
              </ul>

              <h3>Auftragsverarbeitungsvertrag (AVV)</h3>
              <p>
                Jeder Hosting-Anbieter, der personenbezogene Daten für Sie verarbeitet, muss einen 
                Auftragsverarbeitungsvertrag nach Art. 28 DSGVO abschließen. Seriöse Anbieter stellen 
                standardisierte AVVs zur Verfügung.
              </p>

              <h2 id="entwicklerkosten">Entwicklerkosten für Self-Hosting Lösungen</h2>

              <p>
                Die wahren Kosten von Self-Hosting werden oft unterschätzt. Neben den reinen Serverkosten 
                entstehen erhebliche Aufwände für:
              </p>

              <h3>Initiales Setup (€1.000-3.000)</h3>
              <ul>
                <li>Server-Konfiguration und Härtung</li>
                <li>Odoo-Installation und Grundkonfiguration</li>
                <li>SSL-Zertifikate und Domain-Setup</li>
                <li>Firewall und Sicherheitseinstellungen</li>
                <li>Backup-Strategie implementieren</li>
                <li>Monitoring und Alerting einrichten</li>
              </ul>

              <h3>Laufende Wartung (€500-1.500/Monat)</h3>
              <ul>
                <li>Regelmäßige Sicherheitsupdates</li>
                <li>Odoo-Version-Upgrades</li>
                <li>Performance-Optimierung</li>
                <li>Troubleshooting und Fehlerbehebung</li>
                <li>Backup-Verwaltung und Tests</li>
                <li>24/7 Bereitschaftsdienst bei kritischen Systemen</li>
              </ul>

              <h3>Benötigte Expertise</h3>
              <p>
                Ein qualifizierter Odoo-Entwickler/Administrator benötigt Kenntnisse in:
              </p>

              <ul>
                <li>Linux-Systemadministration</li>
                <li>PostgreSQL-Datenbankverwaltung</li>
                <li>Python-Programmierung</li>
                <li>Nginx/Apache Webserver</li>
                <li>Docker/Kubernetes (optional)</li>
                <li>Git-Versionskontrolle</li>
                <li>Odoo-spezifische Architektur</li>
              </ul>

              <p>
                <strong>Empfehlung:</strong> Für Unternehmen ohne dediziertes IT-Team ist Managed Hosting 
                fast immer die kostengünstigere Option, wenn man die Total Cost of Ownership (TCO) betrachtet.
              </p>

              <h2 id="branchenspezifisch">Branchenspezifische Hosting-Anforderungen</h2>

              <p>
                Verschiedene Branchen haben unterschiedliche Anforderungen an ihr Odoo Hosting:
              </p>

              <h3>Fertigung & Produktion</h3>
              <ul>
                <li>Hohe Performance für MRP-Berechnungen</li>
                <li>Große Datenmengen (Stücklisten, Arbeitspläne)</li>
                <li>Integration mit IoT-Geräten und Maschinen</li>
                <li>Empfehlung: Mindestens 8GB RAM, 4 CPU-Kerne</li>
              </ul>

              <h3>E-Commerce & Einzelhandel</h3>
              <ul>
                <li>Skalierbarkeit für Traffic-Spitzen</li>
                <li>CDN-Integration für Bilder und Medien</li>
                <li>PCI-DSS Compliance für Zahlungen</li>
                <li>Empfehlung: Load Balancing, Auto-Scaling</li>
              </ul>

              <h3>Dienstleistungen & Beratung</h3>
              <ul>
                <li>Multi-Mandanten-Fähigkeit</li>
                <li>Zeiterfassung und Projektmanagement</li>
                <li>Mobile Zugriff für Außendienst</li>
                <li>Empfehlung: Gute mobile Performance, VPN-Zugang</li>
              </ul>

              <h3>Gesundheitswesen</h3>
              <ul>
                <li>Besondere Datenschutzanforderungen</li>
                <li>Audit-Trails und Compliance</li>
                <li>Hochverfügbarkeit kritisch</li>
                <li>Empfehlung: Deutsche/EU-Server, erweiterte Backups</li>
              </ul>

              <h2 id="skalierung">Skalierung und Performance-Optimierung</h2>

              <p>
                Ein professionelles Odoo Hosting muss mit Ihrem Unternehmen wachsen können. Wichtige 
                Skalierungsaspekte sind:
              </p>

              <h3>Vertikale Skalierung</h3>
              <p>
                Erhöhung der Ressourcen eines einzelnen Servers:
              </p>
              <ul>
                <li>CPU-Kerne hinzufügen</li>
                <li>RAM erweitern</li>
                <li>Schnellere SSDs verwenden</li>
                <li>Einfach umzusetzen, aber begrenzt</li>
              </ul>

              <h3>Horizontale Skalierung</h3>
              <p>
                Verteilung der Last auf mehrere Server:
              </p>
              <ul>
                <li>Load Balancer für Web-Traffic</li>
                <li>Separate Datenbank-Server</li>
                <li>Redis für Caching</li>
                <li>CDN für statische Inhalte</li>
                <li>Komplexer, aber nahezu unbegrenzt skalierbar</li>
              </ul>

              <h3>Performance-Optimierung</h3>
              <p>
                Unabhängig von der Hardware können folgende Maßnahmen die Performance verbessern:
              </p>
              <ul>
                <li>Datenbank-Indizes optimieren</li>
                <li>Odoo-Worker richtig konfigurieren</li>
                <li>Caching-Strategien implementieren</li>
                <li>Unnötige Module deaktivieren</li>
                <li>Regelmäßige Datenbank-Wartung</li>
              </ul>

              <h2 id="support">Support und Service-Level Agreements</h2>

              <p>
                Der Support-Level kann den Unterschied zwischen minimalen Ausfallzeiten und tagelangen 
                Problemen bedeuten:
              </p>

              <h3>Support-Level im Vergleich</h3>

              <div className="not-prose">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border p-3 text-left">Support-Typ</th>
                      <th className="border p-3 text-left">Reaktionszeit</th>
                      <th className="border p-3 text-left">Verfügbarkeit</th>
                      <th className="border p-3 text-left">Kanäle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3">Community</td>
                      <td className="border p-3">Keine Garantie</td>
                      <td className="border p-3">Forum/Community</td>
                      <td className="border p-3">Forum</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800/50">
                      <td className="border p-3">Standard</td>
                      <td className="border p-3">24-48 Stunden</td>
                      <td className="border p-3">Bürozeiten</td>
                      <td className="border p-3">E-Mail, Ticket</td>
                    </tr>
                    <tr>
                      <td className="border p-3">Professional</td>
                      <td className="border p-3">4-8 Stunden</td>
                      <td className="border p-3">Erweiterte Zeiten</td>
                      <td className="border p-3">+ Telefon, Chat</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800/50">
                      <td className="border p-3">Enterprise</td>
                      <td className="border p-3">1-2 Stunden</td>
                      <td className="border p-3">24/7</td>
                      <td className="border p-3">+ Dedizierter Manager</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>SLA-Komponenten</h3>
              <p>
                Ein professionelles Service-Level Agreement sollte folgende Punkte abdecken:
              </p>
              <ul>
                <li><strong>Uptime-Garantie:</strong> Mindestens 99,5%, besser 99,9%</li>
                <li><strong>Geplante Wartungsfenster:</strong> Außerhalb der Geschäftszeiten</li>
                <li><strong>Backup-Häufigkeit:</strong> Täglich, mit Point-in-Time Recovery</li>
                <li><strong>Disaster Recovery:</strong> RTO und RPO definiert</li>
                <li><strong>Kompensation:</strong> Credits bei SLA-Verletzungen</li>
              </ul>

              <h2 id="fazit">Fazit und Empfehlungen</h2>

              <p>
                Die Wahl des richtigen Odoo Hosting-Anbieters hängt von vielen Faktoren ab. Unsere 
                Empfehlungen basierend auf Unternehmensgröße:
              </p>

              <h3>Kleine Unternehmen (1-10 Mitarbeiter)</h3>
              <p>
                <strong>Budget-Option:</strong> Cloudpepper Core (kostenlos) oder Cloud Clusters<br/>
                <strong>Empfehlung:</strong> Odoo4Projects Side Hustle - beste Preis-Leistung ohne versteckte Kosten
              </p>

              <h3>Mittlere Unternehmen (11-50 Mitarbeiter)</h3>
              <p>
                <strong>Budget-Option:</strong> Simplify-ERP mit deutschen Servern<br/>
                <strong>Empfehlung:</strong> Odoo4Projects On the Rise/Powerhouse - skalierbar und professionell
              </p>

              <h3>Große Unternehmen (50+ Mitarbeiter)</h3>
              <p>
                <strong>Enterprise-Option:</strong> Odoo.sh für maximale Kontrolle<br/>
                <strong>Empfehlung:</strong> Odoo4Projects Empire oder individuelle Enterprise-Lösung
              </p>

              <h3>Wichtige Auswahlkriterien</h3>
              <ul>
                <li>✅ Transparente Preisgestaltung ohne versteckte Kosten</li>
                <li>✅ Deutscher oder EU-basierter Support</li>
                <li>✅ GDPR-Compliance und Datenschutz</li>
                <li>✅ Skalierbarkeit für zukünftiges Wachstum</li>
                <li>✅ Professionelles SLA mit Uptime-Garantie</li>
                <li>✅ Regelmäßige Backups und Disaster Recovery</li>
                <li>❌ Vermeiden Sie Lock-in Situationen</li>
                <li>❌ Unterschätzen Sie nicht die TCO bei Self-Hosting</li>
              </ul>

              <div className="bg-violet-50 dark:bg-violet-900/20 p-6 rounded-lg not-prose">
                <h3 className="text-xl font-bold mb-3">Nutzen Sie unseren Hosting-Rechner</h3>
                <p>
                  Unser Odoo Hosting Rechner berücksichtigt alle diese Faktoren und gibt Ihnen eine 
                  personalisierte Empfehlung basierend auf Ihrer Branche und Unternehmensgröße. 
                  Sparen Sie Zeit und Geld mit der richtigen Hosting-Entscheidung!
                </p>
              </div>
            </article>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}