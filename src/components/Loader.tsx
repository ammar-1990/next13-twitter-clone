'use client'
import {ClipLoader
} from 'react-spinners'
type Props = {}

const Loader = (props: Props) => {
  return (
    <div className='h-[90vh] flex flex-col justify-center items-center'>
        <ClipLoader
 
        size={100}
        color='#00b6fb'
        />
    </div>
  )
}

export default Loader