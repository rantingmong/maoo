import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navigation({notification, onNotification}) {

  const router = useRouter()
  const active = 'shadow-xl bg-gray-800 text-white hover:bg-gray-800'

  return (
    <div className="px-5 py-3 flex justify-between items-center bg-white border-b border-gray-200">
      <div className='space-x-5 flex items-center'>
        <span className='select-none cursor-default text-4xl font-bold'>maoo</span>
        <div className='space-x-1'>
          <a className={`select-none cursor-pointer p-2 rounded-full ${notification ? 'bg-black text-white hover:bg-gray-800' : 'hover:bg-gray-200'} material-icons`} onClick={onNotification}>notifications</a>
        </div>
      </div>
      <div className='space-x-3 uppercase'>
        <Link href='/'>
          <a className={`select-none py-2 px-3 text-sm rounded-md font-semibold hover:bg-gray-200 ${router.pathname.match(/\/$/) ? active : ''}`}>Feed</a>
        </Link>
        <Link href='/drop'>
          <a className={`select-none py-2 px-3 text-sm rounded-md font-semibold hover:bg-gray-200 ${router.pathname.match(/\/drop$/) ? active : ''}`}>Drop</a>
        </Link>
        <Link href='/profile'>
          <a className={`select-none py-2 px-3 text-sm rounded-md font-semibold hover:bg-gray-200 ${router.pathname.match(/\/profile(\/\S)*$/) ? active : ''}`}>Profile</a>
        </Link>
      </div>
    </div>
  )
}
