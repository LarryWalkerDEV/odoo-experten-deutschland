import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['odoo-experten-deutschland.de'],
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
};

export default nextConfig;
