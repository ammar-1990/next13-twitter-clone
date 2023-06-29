'use client'

import Button from '@/components/Button'
import useEditModal from '@/hooks/useEditModal'
import { safeUser } from '@/types'
import React from 'react'

type Props = {
    currentUser:safeUser | null,
    userId:string
  
}

const ClientButton = ({currentUser,userId}: Props) => {
    const editModal = useEditModal()
  return (
    <div className="flex justify-end px-3">
    {currentUser?.id === userId ? <Button label="Edit" secondary onClick={editModal.onOpen} /> : <Button label="Follow" secondary />}
    </div>
  )
}

export default ClientButton