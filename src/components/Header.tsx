'use client'
import {BiArrowBack} from 'react-icons/bi'
import {useCallback} from 'react'
import {useRouter} from 'next/navigation'

type Props = {
    label:string,
    showBack?:boolean
}

const Header = ({label,showBack}: Props) => {

    const router = useRouter()
const handleBack = useCallback(()=>{
    router.back()
},[router])

  return (
    <div className='flex items-center p-4'>
        {showBack && (<span className='mr-2 cursor-pointer hover:opacity-70 transition' onClick={handleBack}><BiArrowBack size={20} color='white' /></span>)}
        <span className='capitalize text-white'>{label}</span>
    </div>
  )
}

export default Header