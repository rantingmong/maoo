import { useEffect, useState } from "react"

export default function Modal({ shows, children }) {
  if (shows) {
    return (
      <div className='p-5 fixed left-0 top-0 right-0 bottom-0 flex flex-col justify-end bg-black bg-opacity-25'>
        <div className='bg-white self-stretch sm:self-center rounded-lg'>
          {children}
        </div>
      </div>
    )
  } else {
    return null
  }
}
