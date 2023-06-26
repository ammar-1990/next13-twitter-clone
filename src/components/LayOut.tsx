'use client'

import React, { ReactNode } from 'react'
import SideBar from './SideBar'

type Props = {
    children:ReactNode
}

const LayOut = ({children}: Props) => {
  return (
    <div className='flex h-screen'>
        <SideBar />
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