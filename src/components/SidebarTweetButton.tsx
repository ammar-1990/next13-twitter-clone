'use client'
import useLoginModal from '@/hooks/useLoginModal'
import { safeUser } from '@/types'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import {FaFeather} from 'react-icons/fa'

type Props = {
  currentUser:safeUser | null
}

const SidebarTweetButton = ({currentUser}: Props) => {
  const router = useRouter()
  const loginModal = useLoginModal()
const onClick = useCallback(()=>{
  if(!currentUser) return   loginModal.onOpen()

  router.push('/')

},[loginModal,router])
  return (
    <div onClick={onClick} className='flex items-center justify-center bg-sky-500 text-white mt-6 rounded-full p-3 ml-auto lg:ml-0 cursor-pointer w-fit lg:w-auto'>
        <span className='lg:hidden'>  <FaFeather size={24} /></span>
        <span className='hidden lg:block' >Tweet</span>
      

    </div>
  )
}

export default SidebarTweetButton