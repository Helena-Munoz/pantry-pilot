import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
  datasourceUrl: "postgresql://postgres:admin1234@localhost:5432/pantry_pilot",
});