'use client'
import {FaFeather} from 'react-icons/fa'

type Props = {}

const SidebarTweetButton = (props: Props) => {
  return (
    <div className='flex items-center justify-center bg-sky-500 text-white mt-6 rounded-full p-3 ml-auto lg:ml-0 cursor-pointer w-fit lg:w-auto'>
        <span className='lg:hidden'>  <FaFeather size={24} /></span>
        <span className='hidden lg:block' >Tweet</span>
      

    </div>
  )
}

export default SidebarTweetButton