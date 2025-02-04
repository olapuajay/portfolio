import React from 'react'
import ContactImg from '../assets/contact.jpg'

function Contact({email, socialLinks}) {
  return (
    <section id='contact' className='w-full py-5 px-4' data-aos="fade-in">
      <h2 className="text-xl md:text-3xl text-white font-bold text-center md:mb-4 mb-2 " data-aos="fade-down">Let's Connect</h2>
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center md:gap-10 gap-5">
        <div className=" md:w-1/2 flex justify-center my-auto" data-aos="fade-right">
          <img src={ContactImg} alt="Contact Image" className="md:w-90 md:h-75 w-65 h-45 max-w-lg rounded-2xl shadow-lg brightness-90" />
        </div>
        <div className="w-full md:w-1/2 text-left md:text-left">
          <p className='text-[#9CA3AF] text-center text-sm md:text-lg' data-aos="fade-up">I'm always open to new opportunities and collaborations.</p>
          <p className='text-[#9CA3AF] text-center text-sm md:text-lg' data-aos="fade-up">Feel free to reach out to me!</p>
          <p className='md:text-[#9CA3AF] text-[#6366F1] text-center text-lg md:text-3xl mt-4' data-aos="fade-up">
            <a href={`mailto:${email}`} className='hover:text-[#6366F1] duration-300 cursor-pointer flex items-center justify-center gap-1'>
              <i className='fas fa-envelope mt-1'></i>
              {email}
            </a>
          </p>
          <p className='text-[#9CA3AF] text-center text-sm md:text-lg mt-2' data-aos="fade-up">
            You can also find me on these platforms.
          </p>
          <div className='flex justify-center items-center gap-4 mt-4 md:mt-6'>
            <a href={socialLinks.find(link => link.name === 'github').url}>
              <i className='fab fa-github text-3xl md:text-[#9CA3AF] text-white hover:text-white hover:scale-110 duration-300 cursor-pointer'></i>
            </a>
            <a href={socialLinks.find(link => link.name === 'linkedin').url}>
              <i className='fab fa-linkedin text-3xl md:text-[#9CA3AF] text-[#0A66C2] hover:text-[#0A66C2] hover:scale-110 duration-300 cursor-pointer'></i>
            </a>
            <a href={socialLinks.find(link => link.name === 'figma').url}>
              <i className='fab fa-figma text-3xl md:text-[#9CA3AF] text-red-800 hover:text-red-600 hover:scale-110 duration-300 cursor-pointer'></i>
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact
