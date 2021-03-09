import Modal  from '@components/common/modal'
import Button from '@components/common/button'

export default function ModalOnboard({shows, onLater}) {
  return (
    <Modal shows={shows}>
      <div className='p-5 space-y-3'>
        <div>
          <h3 className='text-lg font-serif font-bold text-gray-800'>Hey! Let's make your profile</h3>
          <p className='text-md text-gray-600'>A profile lets you create posts and comment on posts!</p>
        </div>
        <div className='space-x-3'>
          <Button tier='primary'>Sure! Let's do it</Button>
          <Button tier='caption' onTap={() => onLater()}>Maybe Later</Button>
        </div>
      </div>
    </Modal>
  )
}
