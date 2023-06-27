'use client'

import React, { ReactNode } from 'react'
import SideBar from './SideBar'
import { safeUser } from '@/types'

type Props = {
    children:ReactNode,
    currentUser:safeUser | null
}

const LayOut = ({children,currentUser}: Props) => {
  return (
    <div className='flex h-screen'>
        <SideBar currentUser = {currentUser} />
        <div className='flex-[3] border'>{children}</div>
        <div className='flex-1 px-5 py-4'>
            <div className='p-4 bg-zinc-700 rounded-lg'>
                <p className='text-white'>Who to follow</p>

            </div>
        </div>

    </div>
  )
}

export default LayOut