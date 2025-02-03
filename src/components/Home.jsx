import React from 'react'
import Profile from '../assets/profile.png'

function Home({ name, description, location, socialLinks }) {
  return (
    <section id='home' className='flex flex-col-reverse md:flex-row w-full justify-center items-start px-8 pb-10 md:p-15 md:h-[calc(100vh-4rem)]'>
      <div className='md:w-3/4 md:pt-20'>
        <h1 className='text-3xl md:text-5xl font-bold text-white '>
          Hi, I'm {name}👋
        </h1>
        <p className='text-[#9CA3AF] text-sm md:text-lg mt-4 md:mt-6'>
          {description}
        </p>
        <p className='text-[#9CA3AF] text-sm md:text-xl mt-2 md:mt-2'>
          <i className='fas fa-map-marker-alt text-sm md:text-lg mt-2 md:mt-2 mr-2 text-[#0A66C2]'></i>
          {location}
        </p>
        <div className='flex justify-items-start space-x-4 items-center mt-4 md:mt-6'>
          <button className='bg-[#6366F1] py-2 px-4 rounded-xl text-white text-center font-semibold hover:bg-[#637bf1] duration-300 min-w-35 cursor-pointer'>
            <a href="#contact">Contact Me</a>
          </button>
          <a href={socialLinks.find(link => link.name === 'github').url}>
            <i className='fab fa-github text-3xl md:text-[#9CA3AF] text-white hover:text-white duration-300 cursor-pointer'></i>
          </a>
          <a href={socialLinks.find(link => link.name === 'linkedin').url}>
            <i className='fab fa-linkedin text-3xl md:text-[#9CA3AF] text-[#0A66C2] hover:text-[#0A66C2] duration-300 cursor-pointer'>          </i>
          </a>
        </div>
      </div>
      <div className='md:w-1/4 md:pt-10 pt-0 group'>
        <img src={Profile} alt="Profile Image" className='hover:scale-110 duration-300 group-hover:filter group-hover:drop-shadow-[0_0_2em_#646cffaa]' />
      </div>
    </section>
  )
}

export default Home
