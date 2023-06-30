"use client";
import { User, Comment } from "@prisma/client";
import Image from "next/image";
import {formatDistanceToNowStrict} from 'date-fns'
import React, { useCallback, useMemo } from "react";
import {BiMessageSquare} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import { useRouter } from "next/navigation";

type Props = {
  body: string | null;
  user: User | null;
  comments: Comment[] | [];
  likedIds: string[] | [];
  createdAt: Date;
  id:string
};

const PostComponent = ({id, body, user, comments, createdAt }: Props) => {

const myDate = useMemo(()=>{
return formatDistanceToNowStrict(createdAt)
},[createdAt])
const router = useRouter()

const toUser = useCallback((e:React.MouseEvent<HTMLParagraphElement>)=>{
    e.stopPropagation()
    router.push(`/users/${user?.id}`)
},[router])

const toPost = useCallback((e:React.MouseEvent<HTMLParagraphElement>)=>{
    e.stopPropagation()
    router.push(`/posts/${id}`)
},[])

  return (
    <div className="p-4 flex items-center gap-3 mb-6 hover:bg-neutral-900 cursor-pointer" onClick={toPost}>
      <Image
        src={(user?.profileImage as string) || "/images/placeholder.png"}
        width={100}
        height={100}
        alt="profile image"
        className="w-12 h-12 border-white rounded-full cursor-pointer object-contain border"
      />
      <div className="space-y-5">
<div className="flex items-center gap-4">
    <p className="text-white" onClick={toUser}>{user?.name}</p>
    <p className="text-neutral-500 text-sm hidden md:block hover:underline" onClick={toUser}>@{user?.username}</p>
    <p className="text-neutral-500 text-sm ">{myDate}</p>
</div>
<p className="text-white text-xs">{body}</p>
<div className="flex items-center gap-10 text-neutral-600">
    <div className="cursor-pointer hover:text-sky-500 flex gap-3 items-center"><BiMessageSquare size={20} />{comments.length || 0}</div>
    <div className="cursor-pointer hover:text-red-500 flex gap-3 items-center"><AiOutlineHeart size={20} />{comments.length || 0}</div>
</div>
      </div>
    </div>
  );
};

export default PostComponent;
