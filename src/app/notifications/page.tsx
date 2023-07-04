import { getNotifications } from '@/actions/getNotifications'
import Header from '@/components/Header'
import NotificationsFeed from '@/components/NotificationsFeed'
import React from 'react'


type Props = {}



const page =async (props: Props) => {
    const notifications = await getNotifications()

    if(notifications?.length===0) return<><Header label='Notifications' showBack /> <p className='text-center text-neutral-700'>No notifications</p></>
  return (
    <div>
      <Header label='Notifications' showBack />
<NotificationsFeed notifications={notifications || []} />
    </div>
  )
}

export default page