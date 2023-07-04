'use client'
import { IconType } from "react-icons"
import {useRouter} from 'next/navigation'
import { safeUser } from "@/types"
import {useCallback} from 'react'
import useLoginModal from "@/hooks/useLoginModal"
import {BsDot} from 'react-icons/bs'


type Props = {
    label:string,
    icon:IconType,
    href?:string,
    onClick?:()=>void
    auth?:boolean
    currentUser:safeUser | null,
    notes?:boolean
}

const NavItem = ({label,icon:Icon,href,onClick,auth,currentUser,notes}: Props) => {
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
        <span className="px-2 relative flex"><Icon size={24} color="white" />{notes && <span className=" absolute top-0 right-2 flex items-center justify-center w-2 h-2 rounded-full bg-sky-500"></span>}</span>
        <span className="hidden lg:block text-white capitalize">{label}</span>
    </div>
  )
}

export default NavItem