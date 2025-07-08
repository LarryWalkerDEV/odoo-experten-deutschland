// Centralized cache key management
export const CACHE_KEYS = {
  // Homepage
  HOME_STATS: 'home:stats',
  HOME_RECENT_ARTICLES: 'home:recent-articles',
  
  // Category pages
  CATEGORY_ARTICLES: (category: string) => `category:${category}:articles`,
  CATEGORY_COUNT: (category: string) => `category:${category}:count`,
  
  // Individual articles
  ARTICLE: (slug: string) => `article:${slug}`,
  ARTICLE_CONTENT: (slug: string) => `article:${slug}:content`,
  
  // Search
  SEARCH_RESULTS: (query: string) => `search:${query}`,
  
  // Navigation
  NAV_ITEMS: 'nav:items',
  
  // Calculator data
  CALCULATOR_PROVIDERS: 'calculator:providers',
  CALCULATOR_SECTORS: 'calculator:sectors',
} as const;

// Cache TTL values in seconds
export const CACHE_TTL = {
  SHORT: 300,        // 5 minutes
  MEDIUM: 3600,      // 1 hour
  LONG: 86400,       // 24 hours
  WEEK: 604800,      // 7 days
} as const;