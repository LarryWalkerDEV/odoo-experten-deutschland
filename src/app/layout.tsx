import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from '@/components/CookieConsent';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Odoo Experten Deutschland - Wissensportal für Odoo ERP",
    template: "%s | Odoo Experten Deutschland"
  },
  description: "Unabhängiges Wissensportal für Odoo ERP. Fundierte Informationen, neutrale Analysen und aktuelle Artikel zu Odoo, Hosting und Implementierung.",
  keywords: ["Odoo", "ERP", "Deutschland", "Wissen", "Information", "Artikel", "Hosting", "Odoo 19"],
  authors: [{ name: "Odoo Experten Deutschland" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://odoo-experten-deutschland.de",
    siteName: "Odoo Experten Deutschland",
    title: "Odoo Experten Deutschland - Wissensportal für Odoo ERP",
    description: "Unabhängiges Wissensportal für Odoo ERP. Fundierte Informationen, neutrale Analysen und aktuelle Artikel.",
    images: [{
      url: "https://odoo-experten-deutschland.de/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Odoo Experten Deutschland"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Odoo Experten Deutschland",
    description: "Unabhängiges Wissensportal für Odoo ERP in Deutschland.",
    images: ["https://odoo-experten-deutschland.de/og-image.jpg"]
  },
  icons: {
    icon: [
      { url: 'https://tbppogohivsxgiavbnvp.supabase.co/storage/v1/object/public/odoo/Logo.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.className}>
      <body className="antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
