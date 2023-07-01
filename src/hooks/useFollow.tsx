'use client'
import { safeUser } from '@/types'
import axios from 'axios'
import { useCallback, useMemo } from 'react'
import useLoginModal from './useLoginModal'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'


type Props = {
    currentUser:safeUser | null,
    userId:string
}

const useFollow = ({currentUser,userId}: Props) => {
    const router = useRouter()
const loginModal = useLoginModal()
    const isFollowing = useMemo(()=>{
return currentUser?.followingIds.includes(userId)

    },[currentUser,userId])

const toggleFollow = useCallback(async()=>{

    if(!currentUser) return loginModal.onOpen()

    let request;
    if(!isFollowing){
        request = ()=> axios.post(`/api/users/follow/${userId}`)
    }

    else{

        request = ()=> axios.delete(`/api/users/follow/${userId}`)
    }


    try {
        await request()
        toast.success('Success')
        router.refresh()
    } catch (error) {
        console.log(error)
        toast.error('Something went wrong')
        
    }
},[loginModal,currentUser,userId,isFollowing])

  return {isFollowing,toggleFollow}
}

export default useFollow