import { getAllUsers } from '@/actions/getAllUsers'
import { getSession } from '@/actions/getCurrentUser'
import React from 'react'
import UserComponent from './UserComponent'
import { safeUser } from '@/types'

type Props = {
    users:safeUser[] |[]
}

const ToFollow = async ({users}: Props) => {



  return (
    <div className='p-4 bg-zinc-700 rounded-lg'>
    <p className='text-white font-serif'>Who to follow</p>
    <div className='p-2 flex flex-col gap-6 mt-4'>
        {users.map((user)=><UserComponent key={user.id} id={user.id} name={user.name} username={user.username} img={user.profileImage} />)}

    </div>


</div>
  )
}

export default ToFollow