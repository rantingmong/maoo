export default function Profile({user}) {
  return (
    <div className='p-5'>
      <h3 className='text-2xl'>Hello! {user.email}</h3>
      <div className=''>
        <p>Some settings over here...</p>
      </div>
    </div>
  )
}
