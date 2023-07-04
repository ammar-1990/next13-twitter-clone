import { getSession } from "@/actions/getCurrentUser";
import { getPost } from "@/actions/getPost";
import CommentComponent from "@/components/CommentComponent";
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
      currentUser={currentUser}
        body={post?.body as string}
        user={post?.user as User}
        id={post?.id as string}
        createdAt={post?.createdAt as Date}
        comments={post?.comments as Comment[]}
        likedIds={post?.likedIds as string[]}
      />
      <PostForm currentUser={currentUser} isComment={true} placeholder="Tweet your replay" postId={post?.id}/>
      <div className="mt-3">
        {post?.comments.map((comment)=><CommentComponent key={comment.id} comment={comment} />)}

      </div>
    </div>
  );
};

export default page;
