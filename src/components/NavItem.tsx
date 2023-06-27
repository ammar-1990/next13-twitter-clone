'use client'
import { IconType } from "react-icons"
import {useRouter} from 'next/navigation'
import { safeUser } from "@/types"
import {useCallback} from 'react'
import useLoginModal from "@/hooks/useLoginModal"


type Props = {
    label:string,
    icon:IconType,
    href?:string,
    onClick?:()=>void
    auth?:boolean
    currentUser:safeUser | null
}

const NavItem = ({label,icon:Icon,href,onClick,auth,currentUser}: Props) => {
    const router = useRouter()
const loginModal = useLoginModal()

const handleClick = useCallback(()=>{
if(onClick) return onClick()

if(auth && !currentUser){
  loginModal.onOpen()
}else if(href) {router.push(href)}


},[loginModal,auth,currentUser])

  return (
    <div className="flex items-center lg:gap-3 ml-auto lg:ml-0 cursor-pointer w-fit " onClick={handleClick}>
        <span className="px-2"><Icon size={24} color="white" /></span>
        <span className="hidden lg:block text-white capitalize">{label}</span>
    </div>
  )
}

export default NavItem