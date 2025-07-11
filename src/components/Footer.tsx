import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

const footerLinks = {
  Produkte: [
    { name: 'Odoo ERP', href: '/odoo' },
    { name: 'Odoo 19', href: '/odoo-19' },
    { name: 'Odoo Hosting', href: '/odoo-hosting' },
    { name: 'Preisrechner', href: '/odoo-hosting-rechner' },
  ],
  Ressourcen: [
    { name: 'Blog', href: '/blog' },
    { name: 'Dokumentation', href: '/docs' },
    { name: 'Support', href: '/support' },
    { name: 'FAQ', href: '/faq' },
  ],
  Unternehmen: [
    { name: 'Über uns', href: '/uber-uns' },
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'Karriere', href: '/karriere' },
    { name: 'Partner', href: '/partner' },
  ],
  Rechtliches: [
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
    { name: 'AGB', href: '/agb' },
    { name: 'Cookie-Richtlinien', href: '/cookie-richtlinien' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image 
                src="https://tbppogohivsxgiavbnvp.supabase.co/storage/v1/object/public/odoo/Logo.png" 
                alt="Odoo Experten Deutschland Logo" 
                width={40} 
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-white">Odoo Experten Deutschland</span>
            </Link>
            <p className="text-sm mb-6 max-w-md">
              Ihre unabhängige Wissensquelle für Odoo ERP. Neutrale Informationen und 
              fundierte Analysen für informierte Entscheidungen.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Sheridan, Wyoming, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@odoo-experten-deutschland.de" className="hover:text-primary transition-colors">
                  info@odoo-experten-deutschland.de
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2 text-sm">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Newsletter abonnieren
              </h3>
              <p className="text-sm text-gray-400">
                Erhalten Sie die neuesten Odoo-News und Tipps direkt in Ihr Postfach.
              </p>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Abonnieren
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 Apex AI Research Labs LLC. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}