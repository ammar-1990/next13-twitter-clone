import { ReactEventHandler } from "react"


type Props = {
    value?:string,
    onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void
    placeholder?:string,
    type?:string
}

const Input = ({value,onChange,placeholder,type}: Props) => {
  return (
    <input className="border-2 p-3 outline-none w-full bg-transparent focus:border-sky-500 transition rounded-md border-neutral-800"
    value={value}
    onChange={onChange}
    type={type}
    placeholder={placeholder}
    />
  )
}

export default Input