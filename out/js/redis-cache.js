// Redis Cache Client for Frontend
class RedisCache {
  constructor(apiEndpoint = '/api/cache') {
    this.apiEndpoint = apiEndpoint
    this.localCache = new Map() // Fallback local cache
    this.cacheDuration = 5 * 60 * 1000 // 5 minutes local cache
  }

  // Generate cache key
  generateKey(prefix, params = {}) {
    const paramString = Object.keys(params)
      .sort()
      .map(key => `${key}:${params[key]}`)
      .join('|')
    return `${prefix}:${paramString || 'default'}`
  }

  // Get cached data
  async get(key) {
    try {
      // Try local cache first
      const localData = this.localCache.get(key)
      if (localData && Date.now() - localData.timestamp < this.cacheDuration) {
        console.log(`Cache HIT (local): ${key}`)
        return localData.data
      }

      // Try Redis cache
      const response = await fetch(`${this.apiEndpoint}?action=get&key=${encodeURIComponent(key)}`)
      
      if (response.ok) {
        const result = await response.json()
        if (result.cached) {
          console.log(`Cache HIT (Redis): ${key}`)
          // Store in local cache too
          this.localCache.set(key, {
            data: result.data,
            timestamp: Date.now()
          })
          return result.data
        }
      }
      
      console.log(`Cache MISS: ${key}`)
      return null
    } catch (error) {
      console.warn('Cache get error:', error)
      return null
    }
  }

  // Set cached data
  async set(key, data, ttl = 3600) {
    try {
      // Store in local cache immediately
      this.localCache.set(key, {
        data: data,
        timestamp: Date.now()
      })

      // Store in Redis
      const response = await fetch(`${this.apiEndpoint}?action=set&key=${encodeURIComponent(key)}&ttl=${ttl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data })
      })

      if (response.ok) {
        console.log(`Cache SET: ${key} (TTL: ${ttl}s)`)
        return true
      }
      return false
    } catch (error) {
      console.warn('Cache set error:', error)
      return false
    }
  }

  // Get or fetch data with caching
  async getOrFetch(key, fetchFunction, ttl = 3600) {
    // Try cache first
    let data = await this.get(key)
    
    if (data !== null) {
      return data
    }

    // Fetch fresh data
    try {
      console.log(`Fetching fresh data: ${key}`)
      data = await fetchFunction()
      
      if (data) {
        await this.set(key, data, ttl)
      }
      
      return data
    } catch (error) {
      console.error('Fetch error:', error)
      throw error
    }
  }

  // Clear specific cache
  async delete(key) {
    try {
      this.localCache.delete(key)
      
      const response = await fetch(`${this.apiEndpoint}?action=delete&key=${encodeURIComponent(key)}`)
      return response.ok
    } catch (error) {
      console.warn('Cache delete error:', error)
      return false
    }
  }

  // Get cache stats
  async getStats() {
    try {
      const response = await fetch(`${this.apiEndpoint}?action=stats`)
      if (response.ok) {
        return await response.json()
      }
      return null
    } catch (error) {
      console.warn('Cache stats error:', error)
      return null
    }
  }

  // Clear all cache
  async clearAll() {
    try {
      this.localCache.clear()
      
      const response = await fetch(`${this.apiEndpoint}?action=clear`)
      return response.ok
    } catch (error) {
      console.warn('Cache clear error:', error)
      return false
    }
  }
}

// Global cache instance
window.redisCache = new RedisCache()

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = RedisCache
}