import { range, map } from 'lodash'

import Button from "@components/common/button"
import Post from '@components/common/post'

export default function Feed() {
  return (
    <div className='cursor-default select-none grid grid-cols-1 lg:grid-cols-12 h-full w-full'>
      <div className='p-5 pb-10 col-span-9 h-full overflow-scroll grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
        {map(range(20), () => <Post />)}
      </div>
      <div className='p-5 col-span-3 h-full overflow-scroll border-l border-gray-200 hidden lg:block'>
        <div className='mb-3 flex justify-between'>
          <h3 className='font-serif text-xl font-semibold'>Your Feed</h3>
          <Button tier='caption'>Create Post</Button>
        </div>
        <div className='mb-3'>
          <p className='mb-2 font-serif text-sm uppercase font-semibold'>View By</p>
          <div className='space-x-2'>
            <Button tier='caption'>Recently Posted</Button>
            <Button tier='primary'>Trending</Button>
          </div>
        </div>
        <div className='mb-3'>
          <p className='mb-2 font-serif text-sm uppercase font-semibold'>Trending Posts</p>
          <div className='flex flex-col items-start'>
            <Button tier='caption' transforms={false}>#purritto</Button>
            <Button tier='caption' transforms={false}>#catmagedon</Button>
            <Button tier='caption' transforms={false}>#litterBox</Button>
            <Button tier='caption' transforms={false}>#adpotNotShop</Button>
            <Button tier='caption' transforms={false}>#neuterDrive</Button>
            <Button tier='caption' transforms={false}>#hanapinSiMingMing</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
