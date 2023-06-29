'use client'
import useEditModal from "@/hooks/useEditModal"
import Modal from "./Modal"
import Input from "./Input"
import { safeUser } from "@/types"
import { useCallback, useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"


type Props = {
    currentUser : safeUser | null
}

const EditModal = ({currentUser}: Props) => {
const editModal = useEditModal()
const [name, setName] = useState(currentUser?.name||'')
const [isLoading, setIsLoading] = useState(false)
const [username, setUsername] = useState(currentUser?.username||'')
const [bio, setBio] = useState(currentUser?.bio||'')
const [profileImage, setProfileImage] = useState(currentUser?.profileImage||'')
const [coverImage, setCoverImage] = useState(currentUser?.coverImage||'')

const router = useRouter()

const onSubmit = useCallback(async()=>{
setIsLoading(true)
try {
    await axios.post(`/api/users/${currentUser?.id}`,{name,username,bio,coverImage,profileImage})
    toast.success('Profile is updated')
    editModal.onClose()
    router.refresh()

} catch (error) {
    console.log(error)
 toast.error('something went wrong')   
} finally{
    setIsLoading(false)
}

},[editModal,name,username,bio,coverImage,profileImage])


const bodyContent = (<div className="space-y-4">

    <Input type="string" placeholder="Name" value={name as string } onChange={(e)=>setName(e.target.value)}  />
    <Input type="string" placeholder="Username" value={username as string} onChange={(e)=>setUsername(e.target.value) }  />
    <Input type="string" placeholder="Bio" value={bio as string} onChange={(e)=>setBio(e.target.value)}  />
</div>)


  return (
  <Modal 
  actionLabel="Save"
  header="Edit profile"
  isOpen={editModal.isOpen}
  onClose={editModal.onClose}
  onSubmit={onSubmit}
  body={bodyContent}
  disabled={isLoading }

  />
  )
}

export default EditModal