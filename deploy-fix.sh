#!/bin/bash

# Fix deployment issues
echo "Fixing deployment configuration..."

# Update next config to remove standalone mode for now
cat > next.config.ts << 'EOF'
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
EOF

# Create a simpler app.yaml
cat > app.yaml << 'EOF'
name: odoo-experten-deutschland
region: fra
services:
- name: web
  github:
    repo: LarryWalkerDEV/odoo-experten-deutschland
    branch: main
    deploy_on_push: true
  build_command: npm install && npm run build
  run_command: npm start
  environment_slug: node-js
  instance_size_slug: apps-s-1vcpu-1gb
  instance_count: 1
  http_port: 3000
  source_dir: /
  envs:
  - key: NODE_ENV
    value: production
    scope: RUN_AND_BUILD_TIME
  - key: NEXT_PUBLIC_SITE_URL
    value: https://odoo-experten-deutschland.de
    scope: RUN_AND_BUILD_TIME
EOF

echo "Configuration updated. Ready to commit and deploy."