import { ReactElement } from "react"
import {AiOutlineClose} from 'react-icons/ai'
import Button from "./Button"
type Props = {

    header:string,
    body?:ReactElement,
    footer?:ReactElement,
    isOpen:boolean,
    onClose:()=>void,
    disabled?:boolean,
    onSubmit:()=>void,
    actionLabel:string

}

const Modal = ({header,body,footer,isOpen,onClose,disabled,onSubmit,actionLabel}: Props) => {

if(!isOpen) return null

  return (
    <div className="fixed inset-0 bg-neutral-800/70 flex items-center justify-center">
<div className="w-full md:w-3/4 lg:w-1/2 h-full md:h-auto  bg-black md:rounded-md p-10 text-white space-y-10">


    <div className="relative flex items-center justify-center">
        {header}
    <span onClick={onClose} className="absolute cursor-pointer right-0"><AiOutlineClose color="white" size={20} /></span>
    </div>
    <div>{body}</div>
    <div>
        <Button
        onClick={onSubmit}
        label={actionLabel}
        fullwidth
        secondary
        disabled={disabled}
        />
    </div>

</div>

    </div>
  )
}

export default Modal