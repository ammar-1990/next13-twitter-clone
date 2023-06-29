
import { getSession } from '@/actions/getCurrentUser'
import { getUser } from '@/actions/getUser'
import Header from '@/components/Header'
import React, { useMemo } from 'react'
import Hero from './Hero'
import Button from "@/components/Button"
import {MdOutlineCalendarMonth} from 'react-icons/md'
import {format} from 'date-fns'
import useEditModal from '@/hooks/useEditModal'
import ClientButton from './ClientButton'

type Props = {
    params:{userId:string}
}

const page =async ({params}: Props) => {
const userId = params.userId
const currentUser = await getSession()
const profileUser = await getUser(userId)

  return (
    <div>
        <Header showBack label={profileUser.theUser?.name as string} />
        <Hero currentUser={currentUser} userId={userId} coverImage={profileUser.theUser?.coverImage} profileImage={profileUser.theUser?.profileImage} />
       <ClientButton currentUser={currentUser} userId={userId} />
    <div className='p-4'>
        <p className='text-white capitalize'>{profileUser.theUser?.name}</p>
        <p className='text-neutral-500 text-sm'>@{profileUser.theUser?.username}</p>
<div className='flex items-center gap-3 text-neutral-500 mt-8'>
<MdOutlineCalendarMonth size={24}  />
<p>Joined {format(new Date(profileUser.theUser?.createdAt as Date),'MMMM yyyy')} </p>
</div>
<div className='flex items-center gap-12 mt-8 '>
    <p className='text-white'>{profileUser.followers}  <span className='text-neutral-500'>Followers</span></p>
    <p className='text-white'>{profileUser?.theUser?.followingIds.length} <span className='text-neutral-500'>Following</span></p>
</div>

    </div>

    </div>
  )
}

export default page