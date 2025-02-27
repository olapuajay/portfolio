import React, { useState } from 'react'
import ContactImg from '../assets/contact.webp'

function Contact({email, socialLinks}) {
  const [isImgLoaded, setIsImgLoaded] = useState(false)
  return (
    <section id='contact' className='w-full py-5 px-4' data-aos="fade-in">
      <h2 className="text-xl md:text-3xl text-[var(--text-color)] font-bold text-center md:mb-4 mb-2 " data-aos="fade-down">Let's Connect</h2>
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center md:gap-10 gap-5">
        <div className=" md:w-1/2 flex justify-center my-auto" data-aos="fade-right">
          {!isImgLoaded && (
            <div className='w-70 h-40 md:w-96 md:h-56 bg-gray-700 animate-pulse rounded-lg overflow-x-hidden'></div>
          )}
          <img src={ContactImg} alt="Contact Image" className={`${isImgLoaded ? 'block' : 'hidden'} md:w-full md:h-full w-70 h-40 max-w-lg rounded-2xl shadow-lg brightness-90`} onLoad={() => setIsImgLoaded(true)} onContextMenu={(e) => e.preventDefault()} draggable="false" />
        </div>
        <div className="w-full md:w-1/2 text-left md:text-left">
          <p className='text-[var(--secondary-text-color)] text-center text-sm md:text-lg' data-aos="fade-up">I'm always open to new opportunities and collaborations.</p>
          <p className='text-[var(--secondary-text-color)] text-center text-sm md:text-lg' data-aos="fade-up">Feel free to reach out to me!</p>
          <p className='md:text-[var(--secondary-text-color)] text-[#6366F1] text-center text-lg md:text-3xl mt-4' data-aos="fade-up">
            <a href={`mailto:${email}`} className='hover:text-[#6366F1] duration-300 cursor-pointer flex items-center justify-center gap-1'>
              <i className='fas fa-envelope mt-1'></i>
              {email}
            </a>
          </p>
          <p className='text-[var(--secondary-text-color)] text-center text-sm md:text-lg mt-2' data-aos="fade-up">
            You can also find me on these platforms
          </p>
          <div className='flex justify-center items-center gap-4 mt-4 md:mt-6'>
            <a href={socialLinks.find(link => link.name === 'github').url} target='_blank' rel='noreferrer noopener'>
              <i className='fab fa-github text-3xl lg:text-[var(--secondary-text-color)] text-[var(--text-color)] hover:text-[var(--hover-color)] hover:scale-110 duration-300 cursor-pointer'></i>
            </a>
            <a href={socialLinks.find(link => link.name === 'linkedin').url} target='_blank' rel='noreferrer noopener'>
              <i className='fab fa-linkedin text-3xl lg:text-[var(--secondary-text-color)] text-[#0A66C2] hover:text-[#0A66C2] hover:scale-110 duration-300 cursor-pointer'></i>
            </a>
            <a href={socialLinks.find(link => link.name === 'leetcode').url} target='_blank' rel='noreferrer noopener'>
              <i className='fas fa-code text-3xl lg:text-[var(--secondary-text-color)] text-[#F89F1B] hover:text-[#F89F1B] hover:scale-110 duration-300 cursor-pointer'></i>
            </a>
            <a href={socialLinks.find(link => link.name === 'figma').url} target='_blank' rel='noreferrer noopener'>
              <i className='fab fa-figma text-3xl lg:text-[var(--secondary-text-color)] text-red-800 hover:text-red-600 hover:scale-110 duration-300 cursor-pointer'></i>
            </a>
            <a href={socialLinks.find(link => link.name === 'twitter').url} target='_blank' rel='noreferrer noopener'>
              <i className='fab fa-twitter text-3xl lg:text-[var(--secondary-text-color)] text-[#1DA1F2] hover:text-[#1DA1F2] hover:scale-110 duration-300 cursor-pointer'></i>
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact
