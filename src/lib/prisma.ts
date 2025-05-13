// Check if we're running on Cloudflare
const isCloudflare = process.env.CLOUDFLARE_WORKER === 'true';

// Import the appropriate Prisma client based on the environment
import { PrismaClient as PrismaClientDefault } from '@prisma/client';
import { PrismaClient as PrismaClientEdge } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = global as unknown as { 
  prisma: PrismaClientDefault | PrismaClientEdge 
};

// When using Prisma Accelerate, we always want to use the DATABASE_URL for connections
// DIRECT_URL is only used as a fallback when not using Accelerate
const accelerateUrl = process.env.DATABASE_URL;
const directUrl = process.env.DIRECT_URL;

if (!accelerateUrl && !directUrl) {
  throw new Error(
    `Database URL not found. Either DATABASE_URL or DIRECT_URL environment variable must be set.`
  );
}

// Use appropriate datasource URL based on environment
export const db =
  globalForPrisma.prisma ||
  (isCloudflare
    ? new PrismaClientEdge({
        datasourceUrl: accelerateUrl,
      }).$extends(withAccelerate())
    : new PrismaClientDefault({
        datasources: {
          db: {
            url: accelerateUrl || directUrl,
          },
        },
      }).$extends(withAccelerate()));

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;