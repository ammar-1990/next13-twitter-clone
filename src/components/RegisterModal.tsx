'use client'
import useRegisterModal from "@/hooks/useRegisterModal"
import { useCallback, useState } from 'react'
import Modal from "./Modal"
import Input from "./Input"
import useLoginModal from "@/hooks/useLoginModal"
import {signIn} from 'next-auth/react'
import axios from 'axios'
import { toast } from "react-hot-toast"
type Props = {}

const RegisterModal = (props: Props) => {

    const [isLoading,setIsLoading] = useState(false)
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()
const onSubmit = useCallback(async()=>{
  try {
    setIsLoading(true)
    await axios.post('/api/users/register',{name,username,email,password})
    toast.success('Account is created')
    signIn('credentials',{email,password})
    registerModal.onClose()
  } catch (error) {
    console.log(error)
    toast.error('Something went wrong')
  } finally{
    setIsLoading(false)
    setName('')
    setUsername('')
    setEmail('')
    setPassword('')
  }

},[name,username,email,password,registerModal,signIn])


const bodyContent = (<div className="space-y-4">
       <Input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name'/>
    <Input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username'/>
          <Input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
        <Input  type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
</div>)

const footerContent = (
    <div className="py-4">
        <p className="text-center">Already have an account? <span className="cursor-pointer hover:underline font-semibold" onClick={()=>{registerModal.onClose();loginModal.onOpen()}}>Login.</span></p>
    </div>
)


  return (
   <Modal
   header={'Create an account'}
   isOpen={registerModal.isOpen}
   onSubmit={onSubmit}
   actionLabel={'Register'}
   onClose={registerModal.onClose}

   body={bodyContent}
   disabled={isLoading || !name || !username || !email || !password}
   footer={footerContent}
   />
  )
}

export default RegisterModal