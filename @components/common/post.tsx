export default function Post() {
  return (
    <div className='aspect-w-10 aspect-h-16'>
      <div className='group absolute left-0 top-0 w-full h-full bg-gray-100 rounded-xl hover:shadow-md'>
        <div className='p-3'>
          <h1>Content</h1>
        </div>
        <div className='opacity-0 group-hover:opacity-100 m-3 absolute left-0 bottom-0 right-0 flex justify-between h-10'>
          <a className='p-2 rounded-full hover:bg-gray-300 material-icons'>favorite_border</a>
          <a className='p-2 rounded-full hover:bg-gray-300 material-icons'>comment</a>
          <a className='p-2 rounded-full hover:bg-gray-300 material-icons'>share</a>
        </div>
      </div>
    </div>
  )
}
