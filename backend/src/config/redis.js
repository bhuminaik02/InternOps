const redis = require('redis');
const config = require('./index');

let client = null;

async function getRedisClient() {
  if (!client && config.redisUrl) {
    client = redis.createClient({ url: config.redisUrl });
    client.on('error', (err) => console.error('Redis Client Error', err));
    await client.connect();
    console.log('Redis connected');
  }
  return client;
}

module.exports = { getRedisClient };
