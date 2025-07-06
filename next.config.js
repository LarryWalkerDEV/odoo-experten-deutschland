/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['odoo-experten-deutschland.de'],
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://odoo-experten-deutschland.de',
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig