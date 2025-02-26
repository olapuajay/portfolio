import React from 'react'

function Sidebar({ email, socialLinks }) {
  return (
    <div className='fixed top-1/2 md:right-2 right-0 transform -translate-y-1/2 flex flex-col space-y-6 bg-transparent backdrop-blur-sm p-2 rounded-lg z-10' data-aos='fade-left'>
      <a href={socialLinks.find(link => link.name === 'github').url} target='_blank' rel="noreferrer noopener">
        <i className='fab fa-github md:text-2xl text-xl text-[var(--text-color)] hover:scale-110 duration-300'></i>
      </a>
      <a href={socialLinks.find(link => link.name === 'linkedin').url} target='_blank' rel="noreferrer noopener">
        <i className='fab fa-linkedin md:text-2xl text-xl  text-[#0A66C2] hover:scale-110 duration-300'></i>
      </a>
      <a href={`mailto:${email}`} target='_blank' rel="noreferrer noopener">
        <i className='fa-solid fa-envelope md:text-2xl text-xl text-red-500 hover:scale-110 duration-300'></i>
      </a>
    </div>
  )
}

export default Sidebar
