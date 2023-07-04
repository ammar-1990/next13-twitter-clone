'use clien'

import {AiFillHome} from 'react-icons/ai'
import {BsBellFill} from 'react-icons/bs'
import {BsFillPersonFill} from 'react-icons/bs'
import {BiLogOut} from 'react-icons/bi'
import {BsTwitter} from 'react-icons/bs'
import {useRouter} from 'next/navigation'
import {signOut} from 'next-auth/react'


import React from 'react'
import NavItem from './NavItem'
import SidebarTweetButton from './SidebarTweetButton'
import { safeUser } from '@/types'

type Props = {
    currentUser:safeUser | null
}



const SideBar = ({currentUser}: Props) => {
    const navItems = [
        {
            label:'home',
            icon:AiFillHome,
            href:'/'
        },
        {
            label:'notifications',
            icon:BsBellFill,
            href:'/notifications',
            auth:true,
            notes:currentUser?.hasNotification as boolean,
        },
        {
            label:'profile',
            icon:BsFillPersonFill,
            href:`/users/${currentUser?.id}`,
            auth:true
        },
      
    ]
  const router = useRouter()
  return (
    <div className='px-2 sm:px-12 sm:flex-1 w-fit py-4 flex flex-col gap-10'>
<span className='cursor-pointer w-fit ml-auto lg:ml-0 px-2' onClick={()=>router.push('/')}><BsTwitter color='white' size={24} /></span>
    {navItems.map((el,i)=><NavItem key={i} {...el} currentUser={currentUser} />)}
{  currentUser &&  <NavItem currentUser={currentUser} label='logout' icon={BiLogOut} onClick={()=>{signOut()}} />}

    <SidebarTweetButton />
    </div>
  )
}

export default SideBar