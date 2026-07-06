/**
 * src/lib/mongodb.js
 *
 * Reusable MongoDB Atlas connection utility for Astro 5 on Vercel Serverless Functions.
 *
 * Strategy — singleton / cached connection
 * ─────────────────────────────────────────
 * Vercel Serverless Functions can reuse the same Node.js process across multiple
 * requests ("warm" invocations).  Opening a fresh MongoClient on every request
 * wastes time and exhausts the Atlas connection pool quickly.
 *
 * We cache both the MongoClient promise and the resolved Db reference in
 * module-level variables.  Because Node.js modules are cached after the first
 * `import`, these variables survive across warm invocations within the same
 * Lambda container.
 *
 * Usage
 * ─────
 *   import { getDb, getClient } from '../lib/mongodb.js';
 *
 *   // Get a Db handle (most common)
 *   const db = await getDb();
 *   const users = await db.collection('users').find({}).toArray();
 *
 *   // Get the raw MongoClient (e.g. for sessions or transactions)
 *   const client = await getClient();
 *
 * Required environment variables
 * ───────────────────────────────
 *   MONGODB_URI      — Full Atlas connection string
 *                      e.g. mongodb+srv://user:pass@cluster.mongodb.net/
 *   MONGODB_DB_NAME  — Database name to use
 *                      e.g. margdarshak
 */

import { MongoClient, ServerApiVersion } from 'mongodb';

// ─── Validate required environment variables ─────────────────────────────────

const MONGODB_URI     = import.meta.env.MONGODB_URI     || process.env.MONGODB_URI;
const MONGODB_DB_NAME = import.meta.env.MONGODB_DB_NAME || process.env.MONGODB_DB_NAME;

if (!MONGODB_URI) {
  throw new Error(
    '[mongodb.js] Missing environment variable: MONGODB_URI\n' +
    'Add it to your .env file (local) and to Vercel → Settings → Environment Variables (production).'
  );
}

if (!MONGODB_DB_NAME) {
  throw new Error(
    '[mongodb.js] Missing environment variable: MONGODB_DB_NAME\n' +
    'Add it to your .env file (local) and to Vercel → Settings → Environment Variables (production).'
  );
}

// ─── MongoClient options ──────────────────────────────────────────────────────

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

// ─── Module-level cache (survives across warm Lambda invocations) ─────────────

/** @type {MongoClient | null} */
let cachedClient = null;

/** @type {Promise<MongoClient> | null} */
let cachedClientPromise = null;

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Returns a connected MongoClient, reusing the cached instance when available.
 *
 * @returns {Promise<MongoClient>}
 */
export async function getClient() {
  if (cachedClient) {
    return cachedClient;
  }

  if (!cachedClientPromise) {
    const client = new MongoClient(MONGODB_URI, options);
    cachedClientPromise = client.connect().then((connectedClient) => {
      cachedClient = connectedClient;
      return connectedClient;
    });
  }

  return cachedClientPromise;
}

/**
 * Returns a Db instance for MONGODB_DB_NAME, reusing the cached client.
 *
 * @returns {Promise<import('mongodb').Db>}
 */
export async function getDb() {
  const client = await getClient();
  return client.db(MONGODB_DB_NAME);
}

/**
 * Gracefully closes the cached connection.
 * Useful in test teardown or one-off scripts — not needed in production serverless.
 *
 * @returns {Promise<void>}
 */
export async function closeConnection() {
  if (cachedClient) {
    await cachedClient.close();
    cachedClient        = null;
    cachedClientPromise = null;
  }
}
