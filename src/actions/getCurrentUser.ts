import prisma from '../util/prismadb'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next";



export async function getSession() {
    try {
      const session = await getServerSession(authOptions);
      if (!session?.user?.email) {
        return null;
      }
      const currentUser = await prisma.user.findUnique({
        where: { email: session.user.email as string },
      });
  
      if (!currentUser) return null;
  
      return {
        ...currentUser,
        createdAt: currentUser.createdAt.toISOString(),
        updatedAt: currentUser.updatedAt.toISOString(),
        emailVerified: currentUser.emailVerefied?.toISOString() || null,
      };
    } catch (error) {
      console.log(error);
      return null
    }
  }

