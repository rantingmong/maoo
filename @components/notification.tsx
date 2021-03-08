import Button from "./common/button";

export default function Notification() {
  return (
    <div className='p-5'>
      <div className='flex justify-between'>
        <h2 className='select-none cursor-default text-xl font-serif font-semibold'>Notifications</h2>
        <Button tier='caption'>Clear All</Button>
      </div>
    </div>
  )
}