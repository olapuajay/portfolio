import React from 'react'

function Contact({email, socialLinks}) {
  return (
    <section id='contact' className='w-full py-5 px-4'>
      <h2 className="text-xl md:text-3xl text-white font-bold text-center mb-5 ">Let's Connect</h2>
      <p className='text-[#9CA3AF] text-center text-sm md:text-lg'>I'm always open to new opportunities and collaborations. Feel free to reach out to me!</p>
      <p className='md:text-[#9CA3AF] text-[#6366F1] text-center text-lg md:text-3xl mt-4'>
        <i className='fas fa-envelope mr-2'></i>
        <a href={`mailto:${email}`} className='hover:text-[#6366F1] duration-300 cursor-pointer'>
          {email}
        </a>
      </p>
      <p className='text-[#9CA3AF] text-center text-sm md:text-lg mt-2'>
        You can also find me on these platforms.
      </p>
      <div className='flex justify-center items-center gap-4 mt-4 md:mt-6'>
        <a href={socialLinks.find(link => link.name === 'github').url}>
          <i className='fab fa-github text-3xl md:text-[#9CA3AF] text-white hover:text-white duration-300 cursor-pointer'></i>
        </a>
        <a href={socialLinks.find(link => link.name === 'linkedin').url}>
          <i className='fab fa-linkedin text-3xl md:text-[#9CA3AF] text-[#0A66C2] hover:text-[#0A66C2] duration-300 cursor-pointer'></i>
        </a>
        <a href={socialLinks.find(link => link.name === 'figma').url}>
          <i className='fab fa-figma text-3xl md:text-[#9CA3AF] text-red-800 hover:text-red-600 duration-300 cursor-pointer'></i>
        </a>
      </div>
    </section>
  )
}

export default Contact
