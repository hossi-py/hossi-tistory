/** App 전체에서 Prisma Client 인스턴스가 하나만 생성되도록
 * Next.js 개발 모드에서 핫 리로딩 문제 해결
 */

import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate());

const globalForPrisma = global as unknown as { prisma: typeof prisma };

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
