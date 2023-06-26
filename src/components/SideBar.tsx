'use clien'

import {AiFillHome} from 'react-icons/ai'
import {BsBellFill} from 'react-icons/bs'
import {BsFillPersonFill} from 'react-icons/bs'
import {BiLogOut} from 'react-icons/bi'
import {BsTwitter} from 'react-icons/bs'
import {useRouter} from 'next/navigation'


import React from 'react'
import NavItem from './NavItem'
import SidebarTweetButton from './SidebarTweetButton'

type Props = {}

const navItems = [
    {
        label:'home',
        icon:AiFillHome,
        href:'/'
    },
    {
        label:'notifications',
        icon:BsBellFill,
        href:'/notifications'
    },
    {
        label:'profile',
        icon:BsFillPersonFill,
        href:'/profile/123'
    },
    {
        label:'logout',
        icon:BiLogOut,
        onclick:()=>{}
    },
]

const SideBar = (props: Props) => {
  const router = useRouter()
  return (
    <div className='px-2 sm:px-12 sm:flex-1 w-fit py-4 flex flex-col gap-8'>
<span className='cursor-pointer w-fit ml-auto lg:ml-0 px-2' onClick={()=>router.push('/')}><BsTwitter color='white' size={24} /></span>
    {navItems.map((el,i)=><NavItem key={i} {...el} />)}
    <SidebarTweetButton />
    </div>
  )
}

export default SideBar