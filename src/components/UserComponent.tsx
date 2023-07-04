'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

type Props = {
  id:string
    name:string | null,
    username:string | null,
    img:string | null
}

const UserComponent = ({name,username,img ,id}: Props) => {
  const router=useRouter()
  return (
    <div className="flex items-center gap-3 cursor-pointer hover:bg-neutral-800 p-2 rounded-lg"  onClick={()=>router.push(`/users/${id}`)}>
<div className="relative w-10 h-10 rounded-full overflow-hidden cursor-pointer">
    <Image src={img || '/images/placeholder.png'} fill alt="profile image" className="object-contain"/>
</div>
<div>
    <p className="font-semibold text-white capitalize">{name}</p>
    <p className="text-neutral-500 text-sm capitalize">@{username}</p>
</div>
    </div>
  )
}

export default UserComponent