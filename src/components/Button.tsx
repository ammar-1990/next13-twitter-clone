'use client'

type Props = {
    label:string,
    disabled?:boolean,
    outline?:boolean,
    secondary?:boolean,
    fullwidth?:boolean,
    onClick?:()=>void,
    large?:boolean
}

const Button = ({label,disabled,outline,secondary,fullwidth,onClick,large}: Props) => {
  return (
    <button
    disabled={disabled}
    onClick={onClick}
    className={`rounded-full hover:opacity-80 transition disabled:opacity-60 items-center font-semibold border-2 flex justify-center ${disabled && 'gap-3'}
    ${large ? 'px-5 py-3 text-xl' : 'px-4 py-2 text-base'}
    ${outline? 'bg-transparent border-white text-white' : ''}
    ${secondary? 'bg-white text-black border-black': 'bg-sky-500 border-sky-500 text-white'}
    ${fullwidth ? 'w-full' : 'w-fit'}
    `}
    >{label} {disabled && <div className={`w-5 h-5 border-2 border-r-0 rounded-full ${secondary ? 'border-sky-500' : 'border-white'}  animate-spin`} />}</button>
  )
}

export default Button