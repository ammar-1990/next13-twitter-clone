'use client'
import { IconType } from "react-icons"
import {useRouter} from 'next/navigation'


type Props = {
    label:string,
    icon:IconType,
    href?:string,
    onClick?:()=>void
}

const NavItem = ({label,icon:Icon,href}: Props) => {
    const router = useRouter()
  return (
    <div className="flex items-center lg:gap-3 ml-auto lg:ml-0 cursor-pointer w-fit " onClick={()=>href? router.push(href) : onclick}>
        <span className="px-2"><Icon size={24} color="white" /></span>
        <span className="hidden lg:block text-white capitalize">{label}</span>
    </div>
  )
}

export default NavItem