import React from 'react'
import Profile from '../assets/profile.png'

function Home({ name, description, location }) {
  return (
    <section id='home' className='flex flex-col-reverse md:flex-row w-full justify-center items-start px-8 pb-10 md:p-15 md:h-[calc(100vh-4rem)] mt-20' data-aos='fade-in'>
      <div className='md:w-3/4 md:pt-20' data-aos='fade-right'>
        <h1 className='text-3xl md:text-5xl font-bold text-white '>
          Hi, I'm {name}👋
        </h1>
        <p className='text-[#9CA3AF] text-sm md:text-lg mt-4 md:mt-6'>
          {description}
        </p>
        <p className='text-[#9CA3AF] text-sm md:text-xl mt-2 md:mt-2'>
          <i className='fas fa-map-marker-alt text-sm md:text-lg mt-2 md:mt-2 mr-2 text-[#6366F1]'></i>
          {location}
        </p>
        <div className='flex justify-items-start space-x-4 items-center mt-4 md:mt-6' data-aos='fade-up'>
          <button className='bg-[#6366F1] py-2 px-4 rounded-xl text-white text-center font-semibold hover:bg-[#637bf1] duration-300 min-w-35 md:text-lg text-sm cursor-pointer'>
            <a href="#skills">My Skills</a>
          </button>
          <button className='py-2 px-4 rounded-xl text-[#6366F1] border-1 text-center font-semibold hover:bg-[#637bf1] hover:text-white hover:border-0 duration-300 min-w-30 md:text-lg text-sm cursor-pointer'>
            <a href="#contact">Contact Me</a>
          </button>
        </div>
      </div>
      <div className='md:w-1/4 md:pt-10 pt-0 group' data-aos='zoom-in'>
        <img src={Profile} alt="Profile Image" className='hover:scale-110 duration-300 md:group-hover:filter md:group-hover:drop-shadow-[0_0_2em_#646cffaa]' />
      </div>
    </section>
  )
}

export default Home
