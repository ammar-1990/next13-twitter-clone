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
    className={`rounded-full hover:opacity-80 transition disabled:opacity-60 font-semibold border-2
    ${large ? 'px-5 py-4 text-xl' : 'px-4 py-3 text-base'}
    ${outline? 'bg-transparent border-white text-white' : ''}
    ${secondary? 'bg-white text-black border-black': 'bg-sky-500 border-sky-500 text-white'}
    ${fullwidth ? 'w-full' : 'w-fit'}
    `}
    >{label}</button>
  )
}

export default Button