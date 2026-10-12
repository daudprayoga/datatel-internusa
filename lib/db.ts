import { PrismaClient } from '@prisma/client'

declare global {
  var prismaGlobalV3: PrismaClient | undefined
}

function createFallbackProxy(): PrismaClient {
  return new Proxy({} as PrismaClient, {
    get(_target, prop) {
      if (typeof prop === 'string' && prop.startsWith('$')) {
        return () => Promise.resolve(null)
      }
      return new Proxy({}, {
        get() {
          return () => Promise.resolve(null)
        }
      })
    }
  })
}

function initPrisma(): PrismaClient {
  try {
    return new PrismaClient()
  } catch (error) {
    console.warn('[Prisma] Failed to initialize PrismaClient:', error)
    return createFallbackProxy()
  }
}

// In development or production, initialize safely without crashing if DB is unreachable
const prisma: PrismaClient =
  globalThis.prismaGlobalV3 ?? initPrisma()

if (process.env.NODE_ENV === 'production') {
  globalThis.prismaGlobalV3 = prisma
}

export default prisma
