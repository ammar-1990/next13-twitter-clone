'use client'

import React, { ReactNode } from 'react'
import SideBar from './SideBar'
import { safeUser } from '@/types'
import ToFollow from './ToFollow'

type Props = {
    children:ReactNode,
    currentUser: safeUser | null
    users:safeUser[] | []
}

const LayOut = ({children,currentUser,users}: Props) => {
  return (
    <div className='flex h-screen '>
        <SideBar currentUser = {currentUser} />
        <div className='flex-[3]  h-full overflow-y-auto myScroll border border-neutral-800'>{children}</div>
        <div className='flex-1 px-5 py-4 hidden sm:block'>
           <ToFollow users={users} />
        </div>

    </div>
  )
}

export default LayOut