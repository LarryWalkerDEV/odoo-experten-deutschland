# Odoo Experten Deutschland - Production Deployment Guide

## 🚀 Digital Ocean Deployment Guide

### Prerequisites
- Digital Ocean account
- Domain: odoo-experten-deutschland.de
- Supabase project (already set up)

### 1. Prepare for Deployment

#### Security Checklist ✅
- [x] All sensitive files removed
- [x] .gitignore properly configured
- [x] No API keys in codebase
- [x] npm audit shows 0 vulnerabilities
- [x] Environment variables template created

#### Files Cleaned Up
- Removed all batch processing JSON files
- Removed all development scripts
- Removed exposed API keys
- Removed Windows artifacts (*.Identifier files)

### 2. Digital Ocean App Platform Setup

1. **Create New App**:
   ```bash
   # In Digital Ocean dashboard:
   # Apps > Create App > GitHub
   ```

2. **Configure Build Settings**:
   ```yaml
   name: odoo-experten-deutschland
   region: fra
   services:
   - build_command: npm run build
     environment_slug: node-js
     github:
       branch: main
       deploy_on_push: true
       repo: your-github-repo
     http_port: 3000
     instance_count: 1
     instance_size_slug: professional-xs
     name: web
     run_command: npm start
     source_dir: /odoo-experten-deutschland
   ```

3. **Environment Variables**:
   Add these in Digital Ocean App settings:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://tbppogohivsxgiavbnvp.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[Your Anon Key]
   NEXT_PUBLIC_SITE_URL=https://odoo-experten-deutschland.de
   ```

### 3. Build Optimization

The project is already optimized for production:
- Next.js 15 with App Router
- Server-side rendering
- Image optimization
- Tailwind CSS purging
- No console logs in production

### 4. Domain Configuration

1. In Digital Ocean:
   - Apps > Settings > Domains
   - Add domain: odoo-experten-deutschland.de
   - Add www.odoo-experten-deutschland.de

2. Update DNS records at your registrar:
   ```
   A     @     [Digital Ocean IP]
   A     www   [Digital Ocean IP]
   ```

### 5. Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify Supabase connection works
- [ ] Check all images load from Supabase
- [ ] Test Odoo Hosting Rechner functionality
- [ ] Verify cookie consent works
- [ ] Check sitemap.xml is accessible
- [ ] Test mobile responsiveness
- [ ] Monitor for any console errors

### 6. Monitoring

Set up monitoring in Digital Ocean:
- Enable health checks
- Set up alerts for downtime
- Monitor resource usage
- Check error logs regularly

### 7. Backup Strategy

1. **Code**: GitHub repository
2. **Data**: Supabase handles database backups
3. **Images**: Stored in Supabase storage

### 8. Security Best Practices

- ✅ HTTPS enabled by default on Digital Ocean
- ✅ Environment variables for sensitive data
- ✅ No exposed API keys
- ✅ Regular dependency updates
- ✅ Proper CSP headers (via Next.js)

### 9. Performance Optimization

Already implemented:
- Static generation where possible
- Dynamic imports for heavy components
- Image optimization with Next.js Image
- Tailwind CSS tree-shaking
- Minimal JavaScript bundle

### 10. Troubleshooting

Common issues:
1. **Build fails**: Check Node version (needs 18+)
2. **Supabase connection fails**: Verify environment variables
3. **Images not loading**: Check Supabase bucket permissions
4. **Slow performance**: Scale up Digital Ocean instance

### Support

For deployment issues:
- Digital Ocean Support
- Next.js Documentation
- Supabase Documentation

---

## 🎉 Ready for Production!

The website is now clean, secure, and ready for deployment to Digital Ocean.