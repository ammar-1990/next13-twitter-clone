import {BounceLoader} from 'react-spinners'

type Props = {}

const loading = (props: Props) => {
  return (
    <div className='h-full w-full flex items-center justify-center  text-white animate-pulse'>
        Loading...
    </div>
  )
}

export default loading