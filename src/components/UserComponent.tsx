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
    <div className="flex items-center gap-3">
<div className="relative w-12 h-12 rounded-full overflow-hidden cursor-pointer" onClick={()=>router.push(`/users/${id}`)}>
    <Image src={img || '/images/placeholder.png'} fill alt="profile image" />
</div>
<div>
    <p className="font-semibold">{name}</p>
    <p className="text-neutral-500 text-sm">@{username}</p>
</div>
    </div>
  )
}

export default UserComponent