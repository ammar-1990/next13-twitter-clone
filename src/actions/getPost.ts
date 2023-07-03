import prisma from "../util/prismadb";

import { getSession } from "./getCurrentUser";

export async function getPost(id: string) {
  const currentUser = await getSession();
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        user: true,
        comments: { include: { user: true }, orderBy: { createdAt: "desc" } },
      },
    });


    if(!post) return null

    return post
  } catch (error) {
    console.log(error)
    return null
  }
}
