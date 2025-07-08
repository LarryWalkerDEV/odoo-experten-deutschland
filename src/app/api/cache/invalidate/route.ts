import { NextRequest, NextResponse } from 'next/server';
import { invalidateCachePattern, deleteFromCache } from '@/lib/redis';
import { CACHE_KEYS } from '@/lib/cache-keys';

// Protect this endpoint with a secret key
const CACHE_SECRET = process.env.CACHE_INVALIDATION_SECRET || 'your-secret-key';

export async function POST(request: NextRequest) {
  try {
    // Check authorization
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${CACHE_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { type, category, slug, pattern } = body;

    let result = 0;

    switch (type) {
      case 'article':
        // Invalidate specific article and its category
        if (slug) {
          await deleteFromCache(CACHE_KEYS.ARTICLE(slug));
          await deleteFromCache(CACHE_KEYS.ARTICLE_CONTENT(slug));
        }
        if (category) {
          await deleteFromCache(CACHE_KEYS.CATEGORY_ARTICLES(category));
          await deleteFromCache(CACHE_KEYS.CATEGORY_COUNT(category));
        }
        result = 2;
        break;

      case 'category':
        // Invalidate all articles in a category
        if (category) {
          result = await invalidateCachePattern(`category:${category}:*`);
        }
        break;

      case 'pattern':
        // Invalidate by custom pattern
        if (pattern) {
          result = await invalidateCachePattern(pattern);
        }
        break;

      case 'all':
        // Clear all cache (use with caution)
        result = await invalidateCachePattern('*');
        break;

      default:
        return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      invalidated: result,
      message: `Successfully invalidated ${result} cache entries`
    });

  } catch (error) {
    console.error('Cache invalidation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}