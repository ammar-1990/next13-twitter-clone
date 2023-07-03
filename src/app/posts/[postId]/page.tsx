import { getSession } from "@/actions/getCurrentUser";
import { getPost } from "@/actions/getPost";
import Header from "@/components/Header";
import PostComponent from "@/components/PostComponent";
import PostForm from "@/components/PostForm";
import { Comment, User } from "@prisma/client";
import React from "react";

type Props = {
  params: { postId: string };
};

const page = async ({ params }: Props) => {
  const post = await getPost(params.postId);
  const currentUser = await getSession();

  return (
    <div>
      <Header showBack label="Tweet" />
      <PostComponent
        body={post?.body as string}
        user={post?.user as User}
        id={post?.id as string}
        createdAt={post?.createdAt as Date}
        comments={post?.comments as Comment[]}
        likedIds={post?.likedIds as string[]}
      />
      <PostForm currentUser={currentUser} isComment placeholder="Tweet your replay" postId={post?.id}/>
    </div>
  );
};

export default page;
