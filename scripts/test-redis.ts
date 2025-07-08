import { redis, getCachedData, setInCache, deleteFromCache } from '../src/lib/redis';
import { CACHE_KEYS, CACHE_TTL } from '../src/lib/cache-keys';

async function testRedis() {
  console.log('🔧 Testing Upstash Redis Connection...\n');

  try {
    // Test 1: Basic set/get
    console.log('1. Testing basic set/get:');
    await redis.set('test:key', 'Hello Odoo Experten!');
    const value = await redis.get('test:key');
    console.log(`   ✅ Set and retrieved: ${value}`);

    // Test 2: TTL functionality
    console.log('\n2. Testing TTL:');
    await setInCache('test:ttl', { message: 'This expires in 10 seconds' }, 10);
    const ttl = await redis.ttl('test:ttl');
    console.log(`   ✅ Key expires in: ${ttl} seconds`);

    // Test 3: Cache wrapper function
    console.log('\n3. Testing cache wrapper:');
    const testData = await getCachedData(
      'test:wrapper',
      async () => {
        console.log('   📊 Fetching fresh data...');
        return { data: 'Fresh data from source', timestamp: new Date().toISOString() };
      },
      60
    );
    console.log(`   ✅ Got data: ${JSON.stringify(testData)}`);

    // Try again - should come from cache
    const cachedData = await getCachedData(
      'test:wrapper',
      async () => {
        console.log('   📊 This should not print - data comes from cache');
        return { data: 'This should not be returned' };
      },
      60
    );
    console.log(`   ✅ From cache: ${JSON.stringify(cachedData)}`);

    // Test 4: Key patterns
    console.log('\n4. Testing key patterns:');
    const keys = await redis.keys('test:*');
    console.log(`   ✅ Found ${keys.length} test keys:`, keys);

    // Test 5: Cleanup
    console.log('\n5. Cleaning up test keys:');
    for (const key of keys) {
      await deleteFromCache(key);
    }
    console.log(`   ✅ Deleted ${keys.length} test keys`);

    // Test 6: Memory usage
    console.log('\n6. Redis info:');
    const info = await redis.info();
    const memoryLine = info.split('\n').find(line => line.includes('used_memory_human'));
    if (memoryLine) {
      console.log(`   💾 ${memoryLine.trim()}`);
    }

    console.log('\n✨ All tests passed! Redis is working correctly.');

  } catch (error) {
    console.error('\n❌ Redis test failed:', error);
  }
}

// Run the test
testRedis();