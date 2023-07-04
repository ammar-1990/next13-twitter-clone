'use client'
import { Notification } from "@prisma/client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import {AiOutlineTwitter} from 'react-icons/ai'

type Props = {
    notifications:Notification[] | []
}

const NotificationsFeed = ({notifications}: Props) => {
    const router = useRouter()

    useEffect(()=>{
router.refresh()
    },[])
  return (
    <div>
        {notifications?.map(notification=><div key={notification.id} className='px-3 mb-1 flex items-center gap-2'>
<AiOutlineTwitter size={30} color='white' /> <span className='text-white text-sm capitalize'>{notification.body}</span>
</div>)}
    </div>
  )
}

export default NotificationsFeed