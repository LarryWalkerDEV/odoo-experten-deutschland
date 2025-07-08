import { Redis } from '@upstash/redis';

// Initialize Redis client with environment variables
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!,
});

// Cache utilities with TypeScript generics
export async function getFromCache<T>(key: string): Promise<T | null> {
  try {
    const data = await redis.get<T>(key);
    return data;
  } catch (error) {
    console.error(`Redis GET error for key ${key}:`, error);
    return null;
  }
}

export async function setInCache<T>(
  key: string,
  value: T,
  expirationInSeconds?: number
): Promise<boolean> {
  try {
    if (expirationInSeconds) {
      await redis.set(key, value, { ex: expirationInSeconds });
    } else {
      await redis.set(key, value);
    }
    return true;
  } catch (error) {
    console.error(`Redis SET error for key ${key}:`, error);
    return false;
  }
}

export async function deleteFromCache(key: string): Promise<boolean> {
  try {
    await redis.del(key);
    return true;
  } catch (error) {
    console.error(`Redis DEL error for key ${key}:`, error);
    return false;
  }
}

export async function invalidateCachePattern(pattern: string): Promise<number> {
  try {
    // Get all keys matching the pattern
    const keys = await redis.keys(pattern);
    if (keys.length === 0) return 0;
    
    // Delete all matching keys
    const pipeline = redis.pipeline();
    keys.forEach(key => pipeline.del(key));
    await pipeline.exec();
    
    return keys.length;
  } catch (error) {
    console.error(`Redis pattern delete error for ${pattern}:`, error);
    return 0;
  }
}

// Cache wrapper function with automatic fallback
export async function getCachedData<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttlInSeconds: number = 3600 // Default 1 hour
): Promise<T> {
  // Try to get from cache first
  const cached = await getFromCache<T>(key);
  if (cached !== null) {
    return cached;
  }

  // Fetch fresh data
  const freshData = await fetcher();
  
  // Store in cache (don't await to not block response)
  setInCache(key, freshData, ttlInSeconds);
  
  return freshData;
}

// Export the redis instance for direct usage if needed
export { redis };