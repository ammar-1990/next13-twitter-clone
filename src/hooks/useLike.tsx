'use client'
import { User } from '@prisma/client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useCallback, useId, useMemo } from 'react'
import { toast } from 'react-hot-toast'
import useLoginModal from './useLoginModal'
import { safeUser } from '@/types'

type Props = {
    currentUser:safeUser | null
    likes:string[],
    postId:string
}

const useLike = ({currentUser,likes,postId}: Props) => {

const isLiked = useMemo(()=>{
  
    return likes.includes(currentUser?.id as string)
},[likes,currentUser?.id])

const router = useRouter()
const loginModal = useLoginModal()
const toggleLike = useCallback(async(e:React.MouseEvent<HTMLElement>)=>{
e.stopPropagation()
console.log(isLiked)
console.log(likes)
console.log(currentUser?.id)
    if(!currentUser) return loginModal.onOpen()
let request
if(!isLiked) {
    request = ()=>axios.post(`/api/posts/like/${postId}`)
}
else{
    request = ()=>axios.delete(`/api/posts/like/${postId}`)
}


try {
    await request()
    toast.success('Success')
    router.refresh()
} catch (error:any) {
    console.log(error)
    toast.error(error.response.data)
}



},[loginModal,router,currentUser,postId,isLiked])

  return {isLiked , toggleLike}
}

export default useLike