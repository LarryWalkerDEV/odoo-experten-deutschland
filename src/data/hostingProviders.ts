export interface HostingTier {
  name: string
  users?: string
  monthlyPrice: number
  yearlyPrice?: number
  setupFee?: number
  features?: string[]
}

export interface HostingProvider {
  id: string
  name: string
  homepage: string
  tiers?: HostingTier[]
  pricing?: {
    perWorker?: number
    baseFeeDedicated?: number
    minimumWorkers?: number
  }
  features: string[]
  uniqueFeatures?: string[]
  developmentNote?: string
  rating: number
  location: string
  supportLevel?: string
  sla?: string
  recommended?: boolean
  highlight?: string
}

export const hostingProviders: Record<string, HostingProvider> = {
  odoo4projects: {
    id: 'odoo4projects',
    name: 'Odoo4Projects.com',
    homepage: 'https://ODOO4projects.com?utm_source=X5Y2I933&utm_medium=lph',
    tiers: [
      { 
        name: 'Side Hustle', 
        users: '1-10', 
        monthlyPrice: 18, 
        yearlyPrice: 214, 
        setupFee: 0 
      },
      { 
        name: 'On the Rise', 
        users: '11-25', 
        monthlyPrice: 33, 
        yearlyPrice: 395, 
        setupFee: 0 
      },
      { 
        name: 'Powerhouse', 
        users: '26-50', 
        monthlyPrice: 50, 
        yearlyPrice: 595, 
        setupFee: 0 
      },
      { 
        name: 'Empire', 
        users: '51+', 
        monthlyPrice: 154, 
        yearlyPrice: 1850, 
        setupFee: 0 
      }
    ],
    features: [
      '4SERVER Management App',
      'Enterprise AI Solutions',
      'Unlimited Users',
      'SSH/GIT Access',
      '60-Day Money-Back Guarantee'
    ],
    uniqueFeatures: [
      '1-Click Custom Server Installation',
      'AI-Enhanced Automation',
      'Direct Server Control from Odoo'
    ],
    rating: 4.8,
    location: '🌍 Global',
    supportLevel: 'Enterprise AI-Enhanced',
    sla: '99.9%',
    highlight: 'Beste Preis-Leistung'
  },
  
  odooSH: {
    id: 'odooSH',
    name: 'Odoo.sh (Official)',
    homepage: 'https://www.odoo.sh',
    pricing: {
      perWorker: 58,
      baseFeeDedicated: 480,
      minimumWorkers: 1
    },
    features: [
      'Official Odoo Platform',
      'Staging Environments',
      'Git Integration',
      'Enterprise Support'
    ],
    rating: 4.2,
    location: '🇧🇪 Belgium',
    supportLevel: 'Official Enterprise',
    sla: '99.9%'
  },
  
  cloudpepper: {
    id: 'cloudpepper',
    name: 'Cloudpepper',
    homepage: 'https://cloudpepper.io',
    tiers: [
      { 
        name: 'Core', 
        users: 'Unlimited', 
        monthlyPrice: 0, 
        features: ['Free Plan', '1 Server', 'Community Support'] 
      },
      { 
        name: 'Base', 
        users: 'Unlimited', 
        monthlyPrice: 29, 
        features: ['2 Servers', 'Staging Environment'] 
      },
      { 
        name: 'Pro', 
        users: 'Unlimited', 
        monthlyPrice: 49, 
        features: ['Unlimited Servers', 'Advanced Features'] 
      }
    ],
    features: [
      'Kostenloser Einstieg',
      'Unbegrenzte Nutzer',
      'Entwickler-freundlich'
    ],
    developmentNote: 'Benötigt Entwickler-Setup (€500-1000 gesamt)',
    rating: 4.1,
    location: '🇧🇪 Belgium'
  },
  
  cloudclusters: {
    id: 'cloudclusters',
    name: 'Cloud Clusters',
    homepage: 'https://cloudclusters.io',
    tiers: [
      { 
        name: 'Express', 
        monthlyPrice: 4, 
        features: ['2 CPU, 2GB RAM', 'Basic Setup'] 
      },
      { 
        name: 'Professional', 
        monthlyPrice: 13, 
        features: ['4 CPU, 8GB RAM', 'Enhanced Performance'] 
      },
      { 
        name: 'Advanced', 
        monthlyPrice: 22, 
        features: ['6 CPU, 16GB RAM', 'High Performance'] 
      }
    ],
    features: [
      'Günstige VPS Option',
      'Flexible Skalierung',
      'Volle Kontrolle'
    ],
    developmentNote: 'Selbstverwaltung - benötigt Entwickler (€800-1200 Setup)',
    rating: 4.0,
    location: '🇺🇸 USA'
  },
  
  simplifyERP: {
    id: 'simplifyERP',
    name: 'Simplify-ERP',
    homepage: 'https://simplify-erp.de',
    tiers: [
      { 
        name: 'Basic', 
        users: '2-3', 
        monthlyPrice: 30, 
        setupFee: 500 
      },
      { 
        name: 'Large', 
        users: 'bis 20', 
        monthlyPrice: 90, 
        setupFee: 500 
      },
      { 
        name: 'XL', 
        users: 'bis 50', 
        monthlyPrice: 140, 
        setupFee: 500 
      }
    ],
    features: [
      'GDPR-konforme deutsche Server',
      'Telefon-Support auf Deutsch',
      'Begrenzte Nutzerzahl'
    ],
    rating: 3.9,
    location: '🇩🇪 Deutschland',
    supportLevel: 'Deutscher Support'
  },
  
  hostinger: {
    id: 'hostinger',
    name: 'Hostinger VPS',
    homepage: 'https://www.hostinger.de/vps-hosting',
    tiers: [
      { 
        name: 'KVM 1', 
        monthlyPrice: 5, 
        features: ['1 vCPU, 4GB RAM', 'Self-Setup Required'] 
      },
      { 
        name: 'KVM 4', 
        monthlyPrice: 25, 
        features: ['4 vCPU, 16GB RAM', 'Professional Setup Needed'] 
      }
    ],
    features: [
      'Sehr günstig',
      'Volle VPS Kontrolle',
      'Weltweit verfügbar'
    ],
    developmentNote: 'Komplett selbst verwaltet - Entwickler nötig (€1000-1500)',
    rating: 3.8,
    location: '🇱🇹 Lithuania'
  },
  
  aws: {
    id: 'aws',
    name: 'AWS EC2',
    homepage: 'https://aws.amazon.com/de/ec2/',
    tiers: [
      { 
        name: 't3.micro', 
        monthlyPrice: 9, 
        features: ['Free Tier eligible', 'Basic Performance'] 
      },
      { 
        name: 'm5.large', 
        monthlyPrice: 144, 
        features: ['Production Ready', 'High Performance'] 
      }
    ],
    features: [
      'Enterprise Cloud',
      'Globale Infrastruktur',
      'Höchste Skalierbarkeit'
    ],
    developmentNote: 'Enterprise Cloud - benötigt erfahrenen Entwickler (€1500-3000)',
    rating: 4.3,
    location: '🇺🇸 Global'
  }
}

export const sectors = [
  { id: 'manufacturing', name: 'Fertigung & Produktion', icon: '🏭', complexity: 'high' },
  { id: 'retail', name: 'Einzelhandel & E-Commerce', icon: '🛍️', complexity: 'medium' },
  { id: 'services', name: 'Dienstleistungen', icon: '💼', complexity: 'medium' },
  { id: 'healthcare', name: 'Gesundheitswesen', icon: '🏥', complexity: 'high' },
  { id: 'construction', name: 'Bauwesen', icon: '🏗️', complexity: 'high' },
  { id: 'consulting', name: 'Beratung', icon: '💡', complexity: 'low' },
  { id: 'logistics', name: 'Logistik & Transport', icon: '🚚', complexity: 'high' },
  { id: 'food', name: 'Lebensmittel', icon: '🍎', complexity: 'medium' }
]

export const getRecommendation = (employees: number, sector: string, budget: 'low' | 'medium' | 'high' = 'medium') => {
  const sectorData = sectors.find(s => s.id === sector)
  const complexity = sectorData?.complexity || 'medium'
  
  // Small businesses with low budget
  if (employees <= 10 && budget === 'low') {
    return complexity === 'low' ? 'cloudpepper' : 'cloudclusters'
  }
  
  // Small to medium businesses
  if (employees <= 25) {
    return budget === 'high' ? 'odooSH' : 'odoo4projects'
  }
  
  // Medium businesses
  if (employees <= 50) {
    return complexity === 'high' ? 'odoo4projects' : 'simplifyERP'
  }
  
  // Large businesses
  if (employees > 50) {
    return budget === 'high' ? 'odooSH' : 'odoo4projects'
  }
  
  return 'odoo4projects' // default recommendation
}

export const calculatePrice = (provider: HostingProvider, employees: number) => {
  // For providers with tiers
  if (provider.tiers) {
    for (const tier of provider.tiers) {
      if (tier.users) {
        const range = tier.users.split('-').map(n => n.replace('+', '').trim())
        const min = parseInt(range[0]) || 0
        const max = range[1] ? (parseInt(range[1]) || 999) : 999
        
        if (employees >= min && employees <= max) {
          return {
            monthly: tier.monthlyPrice,
            yearly: tier.yearlyPrice || tier.monthlyPrice * 12,
            setupFee: tier.setupFee || 0,
            tierName: tier.name
          }
        }
      }
    }
    // Return highest tier if above all ranges
    const lastTier = provider.tiers[provider.tiers.length - 1]
    return {
      monthly: lastTier.monthlyPrice,
      yearly: lastTier.yearlyPrice || lastTier.monthlyPrice * 12,
      setupFee: lastTier.setupFee || 0,
      tierName: lastTier.name
    }
  }
  
  // For Odoo.sh pricing model
  if (provider.pricing) {
    const workers = Math.max(provider.pricing.minimumWorkers || 1, Math.ceil(employees / 5))
    const monthly = (provider.pricing.perWorker || 0) * workers + (provider.pricing.baseFeeDedicated || 0)
    return {
      monthly,
      yearly: monthly * 12,
      setupFee: 0,
      tierName: `${workers} Workers`
    }
  }
  
  return {
    monthly: 0,
    yearly: 0,
    setupFee: 0,
    tierName: 'Custom'
  }
}