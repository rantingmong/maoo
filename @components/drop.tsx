import Button from "./common/button"

export default function Dashboard() {
  return (
    <div className='flex flex-col items-center h-full w-full justify-center space-y-2 select-none cursor-default'>
      <h1 className='text-4xl font-bold'>maoo Drop</h1>
      <p className='text-xl'>A more convenient way of giving love to your meows!</p>
      <p className='text-xl'>Coming Soon</p>
      <Button tier='primary'>Let me be in the know!</Button>
    </div>
  )
}
