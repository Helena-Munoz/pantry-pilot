import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasourceUrl: "postgresql://postgres:admin1234@localhost:5432/pantry_pilot",
  log: ['query', 'error', 'warn'],
});

async function main() {
  try {
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log('Prisma connected!', result);
  } catch (error) {
    console.error('Prisma error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();