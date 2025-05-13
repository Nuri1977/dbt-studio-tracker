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

export const db =
  globalForPrisma.prisma ||
  (isCloudflare
    ? new PrismaClientEdge({
        datasourceUrl: process.env.DATABASE_URL,
      }).$extends(withAccelerate())
    : new PrismaClientDefault({
        datasourceUrl: process.env.DIRECT_URL || process.env.DATABASE_URL,
      }));

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;