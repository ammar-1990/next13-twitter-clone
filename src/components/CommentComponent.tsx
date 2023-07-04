'use client'
import { Comment } from '@prisma/client'
import { formatDistanceToNowStrict } from 'date-fns'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useCallback } from 'react'
import { useMemo } from 'react'

type Props = {
    comment:any
}

const CommentComponent = ({comment}: Props) => {


    const router = useRouter()
    const myDate = useMemo(()=>{
        return formatDistanceToNowStrict(comment.createdAt)
        },[comment.createdAt])

    
const toUser = useCallback((e:React.MouseEvent<HTMLParagraphElement>)=>{
    e.stopPropagation()
    router.push(`/users/${comment.userId}`)
},[router])    

  return (
    <div
    className="p-4 flex  gap-3 mb-6 hover:bg-neutral-900 cursor-pointer"
    >
<Image
        src={(comment.user?.profileImage as string) || "/images/placeholder.png"}
        width={100}
        height={100}
        alt="profile image"
        className="w-12 h-12 border-white rounded-full cursor-pointer object-contain border"
      />
      <div className="space-y-5">
<div className="flex items-center gap-4">
    <p className="text-white" onClick={toUser}>{comment.user?.name}</p>
    <p className="text-neutral-500 text-sm hidden md:block hover:underline" onClick={toUser}>@{comment.user?.username}</p>
    <p className="text-neutral-500 text-sm ">{myDate}</p>
</div>
<p className="text-white text-xs">{comment.body}</p>


    </div>
    </div>
  )
}

export default CommentComponent