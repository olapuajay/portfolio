import React from 'react'

function Footer({ name }) {
  return (
    <div className='w-full bg-gray-900 text-white py-4 px-4'>
      <p className='text-center text-sm md:text-lg'>
        &copy; 2025 | Designed & Developed by <span className='text-[#6366F1] uppercase'> {name} </span>
      </p>
    </div>
  )
}

export default Footer
