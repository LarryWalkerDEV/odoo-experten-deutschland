// Upstash Redis caching API for Vercel
import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

export default async function handler(req, res) {
  const { method, query } = req
  const { action, key, data, ttl = 3600 } = query

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (method === 'OPTIONS') {
    return res.status(200).end()
  }

  try {
    switch (action) {
      case 'get':
        if (!key) return res.status(400).json({ error: 'Key required' })
        
        const cached = await redis.get(key)
        if (cached) {
          return res.status(200).json({ 
            data: cached, 
            cached: true,
            timestamp: new Date().toISOString()
          })
        }
        return res.status(404).json({ error: 'Key not found', cached: false })

      case 'set':
        if (!key || !data) return res.status(400).json({ error: 'Key and data required' })
        
        const setData = typeof data === 'string' ? JSON.parse(data) : data
        await redis.setex(key, parseInt(ttl), JSON.stringify(setData))
        
        return res.status(200).json({ 
          success: true, 
          key, 
          ttl: parseInt(ttl),
          timestamp: new Date().toISOString()
        })

      case 'delete':
        if (!key) return res.status(400).json({ error: 'Key required' })
        
        await redis.del(key)
        return res.status(200).json({ success: true, deleted: key })

      case 'stats':
        const info = await redis.info()
        return res.status(200).json({ 
          redis_info: info,
          timestamp: new Date().toISOString()
        })

      case 'clear':
        await redis.flushall()
        return res.status(200).json({ success: true, message: 'All cache cleared' })

      default:
        return res.status(400).json({ error: 'Invalid action' })
    }
  } catch (error) {
    console.error('Redis error:', error)
    return res.status(500).json({ 
      error: 'Redis operation failed', 
      details: error.message 
    })
  }
}