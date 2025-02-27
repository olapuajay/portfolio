import React from 'react'

function Footer({ name }) {
  return (
    <div className='w-full bg-[var(--secondary-bg-color)] text-[var(--text-color)] text-center py-4 px-4'>
      <small className=''>
        &copy; {new Date().getFullYear()} | Designed & Developed by <span className='text-[#6366F1] uppercase'> {name} </span>
      </small>
    </div>
  )
}

export default Footer
