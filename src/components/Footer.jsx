import React from 'react'

function Footer({ name }) {
  return (
    <div className='w-full bg-gray-900 text-white text-center py-4 px-4'>
      <small className=''>
        &copy; {new Date().getFullYear()}. All Rights Reserved | Designed & Developed by <span className='text-[#6366F1] uppercase'> {name} </span>
      </small>
    </div>
  )
}

export default Footer
