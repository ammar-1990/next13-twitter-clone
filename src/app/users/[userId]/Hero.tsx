

import { safeUser } from "@/types"
import Image from "next/image"


type Props = {
    coverImage?:string  | null
    profileImage?:string | null
    userId:string
    currentUser:safeUser | null
    
}

const Hero =async ({coverImage,profileImage,currentUser,userId}: Props) => {
 
    
  return (
    <div>
    <div className='bg-neutral-600 h-[250px]  relative mb-2'>
{coverImage &&<Image
fill
src={coverImage}
alt="Cover Image"
className="object-contain"
/>}
<div className="absolute -bottom-16 left-10 w-32 h-32 rounded-full border-4 bg-white border-black overflow-hidden cursor-pointer">
    <Image
    src={profileImage || '/images/placeholder.png'}
    fill
    alt="Profile Image"
    className="object-contain"
    />
</div>

    </div>
    

    </div>
  )
}

export default Hero