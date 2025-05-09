import { PrismaClient } from '@prisma/client'

// Create a wrapper for a global PrismaClient instance
const globalForPrisma = global as unknown as { prisma: PrismaClient }

// Check if we're in development mode and if we already have a PrismaClient instance
export const db =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error']
  })

// In development mode, store the PrismaClient instance in the global object
// to prevent creating multiple instances during hot reloading
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db