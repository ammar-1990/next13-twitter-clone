'use client'
import {useCallback, useState} from 'react'
import useLoginModal from "@/hooks/useLoginModal"
import Modal from "./Modal"
import Input from "./Input"


type Props = {}

const LoginModal = (props: Props) => {
const loginModal = useLoginModal()
const [isLoading,setIsLoading] = useState(false)
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const onSubmit = useCallback(()=>{
    console.log(email,password)
},[])

const bodyContent = (
    <div className="space-y-4">
        <Input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
        <Input  type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
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
    />
  )
}

export default LoginModal