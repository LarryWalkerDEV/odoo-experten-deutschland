import OdooHostingRechner from '@/components/calculator/OdooHostingRechner'
import Navigation from '@/components/Navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Odoo Hosting Rechner 2025 | Kostenvergleich für Deutschland',
  description: 'Finden Sie das beste Odoo Hosting für Ihr Unternehmen. Vergleichen Sie 7 Anbieter mit transparenten Preisen. Kostenloser Rechner für deutsche Unternehmen.',
  keywords: 'odoo hosting rechner, odoo hosting kosten, odoo hosting vergleich, odoo hosting deutschland, odoo cloud hosting, odoo hosting preise',
  openGraph: {
    title: 'Odoo Hosting Rechner - Kostenvergleich für deutsche Unternehmen',
    description: 'Berechnen Sie die optimalen Hosting-Kosten für Ihr Odoo ERP System. Vergleich von 7 Anbietern mit transparenten Preisen.',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Odoo Experten Deutschland',
    images: [{
      url: 'https://odoo-experten-deutschland.de/og-hosting-rechner.jpg',
      width: 1200,
      height: 630,
      alt: 'Odoo Hosting Rechner'
    }]
  }
}

export default function OdooHostingRechnerPage() {
  return (
    <>
      <Navigation />
      <div className="min-min-h-svh bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20">
        <div className="container mx-auto px-4 py-4 sm:py-6 md:py-8 sm:py-6 sm:py-4 sm:py-6 md:py-8 md:py-12 md:py-16 overflow-hidden">
          <OdooHostingRechner />
        </div>
      </div>
    </>
  )
}