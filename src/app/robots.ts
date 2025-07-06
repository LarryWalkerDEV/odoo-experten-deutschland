import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/*.json$',
          '/*?*', // Block URL parameters for now
        ],
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
    ],
    sitemap: 'https://odoo-experten-deutschland.de/sitemap.xml',
    host: 'https://odoo-experten-deutschland.de',
  }
}