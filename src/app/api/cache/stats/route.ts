import { NextRequest, NextResponse } from 'next/server';
import { redis } from '@/lib/redis';

// Protect this endpoint
const CACHE_SECRET = process.env.CACHE_INVALIDATION_SECRET || 'your-secret-key';

export async function GET(request: NextRequest) {
  try {
    // Check authorization
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${CACHE_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get all keys (be careful with large datasets)
    const keys = await redis.keys('*');
    
    // Get memory usage info
    const info = await redis.info();
    const memoryInfo = info.split('\n').find(line => line.startsWith('used_memory_human:'));
    const usedMemory = memoryInfo ? memoryInfo.split(':')[1].trim() : 'Unknown';

    // Categorize keys
    const keyStats = {
      total: keys.length,
      byCategory: {
        articles: keys.filter(k => k.startsWith('article:')).length,
        categories: keys.filter(k => k.startsWith('category:')).length,
        search: keys.filter(k => k.startsWith('search:')).length,
        home: keys.filter(k => k.startsWith('home:')).length,
        nav: keys.filter(k => k.startsWith('nav:')).length,
        calculator: keys.filter(k => k.startsWith('calculator:')).length,
        other: 0
      },
      memory: usedMemory
    };

    // Calculate "other" category
    const categorized = Object.values(keyStats.byCategory).reduce((sum, count) => sum + count, 0);
    keyStats.byCategory.other = keyStats.total - categorized;

    // Sample some keys to show TTL
    const sampleKeys = keys.slice(0, 10);
    const keyDetails = await Promise.all(
      sampleKeys.map(async (key) => {
        const ttl = await redis.ttl(key);
        return { key, ttl: ttl === -1 ? 'No expiry' : `${ttl}s` };
      })
    );

    return NextResponse.json({
      success: true,
      stats: keyStats,
      sampleKeys: keyDetails,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Cache stats error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}