import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prismaGlobalV3: undefined | ReturnType<typeof prismaClientSingleton>
}

// In development, recreate PrismaClient so schema changes take effect immediately without stale memory cache
const prisma = process.env.NODE_ENV === 'production'
  ? (globalThis.prismaGlobalV3 ?? prismaClientSingleton())
  : new PrismaClient()

if (process.env.NODE_ENV === 'production') {
  globalThis.prismaGlobalV3 = prisma
}

export default prisma
