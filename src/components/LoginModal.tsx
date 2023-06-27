'use client'
import {useCallback, useState} from 'react'
import useLoginModal from "@/hooks/useLoginModal"
import Modal from "./Modal"
import Input from "./Input"
import useRegisterModal from '@/hooks/useRegisterModal'
import {signIn} from 'next-auth/react'
import toast from 'react-hot-toast'


type Props = {}

const LoginModal = (props: Props) => {
const loginModal = useLoginModal()
const registerModal = useRegisterModal()
const [isLoading,setIsLoading] = useState(false)
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const onSubmit = useCallback(async()=>{
  setIsLoading(true)
 
    await signIn('credentials',{email,password,redirect:false}).then((callback)=>{
      if(callback?.ok){
        toast.success('Logged in')
        loginModal.onClose()
      }
      if(callback?.error)
      {
        toast.error(callback.error)
      }
    }).finally(()=>{
     setIsLoading(false)
     setEmail('')
     setPassword('')
    })
   


},[email,password,loginModal])

const bodyContent = (
    <div className="space-y-4">
        <Input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
        <Input  type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
    </div>
)
const footerContent = (
  <div className="py-4">
      <p className='text-center'>First time using twittert? <span className="cursor-pointer hover:underline font-semibold" onClick={()=>{registerModal.onOpen();loginModal.onClose()}}>Create an account.</span></p>
  </div>
)

  return (
    <Modal
header="Login"
    isOpen={loginModal.isOpen}
    onClose={loginModal.onClose}
    actionLabel="Sign in"
    disabled={isLoading || !email || !password}
    onSubmit={onSubmit}
    body={bodyContent}
    footer={footerContent}

    
    />
  )
}

export default LoginModal