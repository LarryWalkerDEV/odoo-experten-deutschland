# Vercel Deployment Guide

## ✅ GitHub Branch Ready for Vercel

**Repository**: LarryWalkerDEV/odoo-experten-deutschland  
**Branch**: `vercel-deploy`  
**Content**: Pure static HTML website (no build required)

## Step 1: Import to Vercel

1. Go to https://vercel.com
2. Click "Add New Project" 
3. Import Git Repository
4. Select: **LarryWalkerDEV/odoo-experten-deutschland**
5. Configure:
   - Framework Preset: **Other**
   - Root Directory: **./** (leave as is)
   - Build Command: **Leave empty** (no build needed)
   - Output Directory: **./** (leave as is)
   - Install Command: **Leave empty**
6. Deploy!

## Step 2: Point GoDaddy Domain to Vercel

### In Vercel (After Deployment):
1. Go to your project settings → Domains
2. Add domain: `odoo-experten-deutschland.de`
3. Add domain: `www.odoo-experten-deutschland.de`
4. Vercel will show you the DNS records needed

### In GoDaddy DNS Management:

**For A Records (Root Domain):**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 600
```

**For CNAME (www subdomain):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com.
TTL: 600
```

### Alternative - Using Vercel Nameservers:
If you prefer, you can change GoDaddy nameservers to:
- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

But the A + CNAME method above is simpler.

## Step 3: Wait for DNS Propagation

- DNS changes: 5-30 minutes
- SSL certificate: Automatic by Vercel
- Both www and non-www will work

## Why Vercel is Perfect for This:

1. **100% FREE** for static sites
2. **Automatic SSL** certificates
3. **Global CDN** included
4. **Zero configuration** needed
5. **Automatic deployments** from GitHub

## Your Site Structure:
```
/ (root)
├── index.html
├── impressum.html
├── datenschutz.html
├── agb.html
├── css/
├── js/
├── assets/
├── odoo/
├── odoo-19/
└── odoo-hosting/
```

Everything is ready. Just import and deploy!