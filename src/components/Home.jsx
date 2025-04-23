import React, { useState } from 'react'
// import Profile from '../assets/profile.png'
import Profile_sm from '../assets/portfolio-profile.png'
import Profile from '../assets/pf_profile.png'
import { MapPin } from 'lucide-react'

function Home({ name, description, location }) {
  const [isProfileLoaded, setIsProfileLoaded] = useState(false)
  return (
    <section id='home' className='flex flex-col-reverse md:flex-row w-full justify-center md:items-start items-center px-8 pb-10 md:p-15 md:h-[calc(100vh-4rem)] mt-20' data-aos='fade-in'>
      <div className='md:w-3/4 lg:pt-20 md:pt-10' data-aos='fade-right'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-color)]'>
          {name}
        </h1>
        <p className='text-[var(--secondary-text-color)] text-sm md:text-lg mt-4 md:mt-6'>
          {description}
        </p>
        <p className='text-[var(--secondary-text-color)] text-sm lg:text-xl md:text-lg mt-2 md:mt-2 flex items-center'>
          <MapPin className='mr-2 text-[#6366F1]' />
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
        {!isProfileLoaded && (
          <div className='w-40 h-40 md:w-56 md:h-56 bg-gray-700 animate-pulse rounded-full'></div>
        )}
        <img src={Profile} alt="Profile Image" style={{borderRadius: '50%'}} className={`w-50 h-50 md:w-70 md:h-70 hover:scale-110 duration-300 md:group-hover:filter md:group-hover:drop-shadow-[0_0_2em_#646cffaa] md:block hidden ${isProfileLoaded ? 'block' : 'hidden'}`} onLoad={() => setIsProfileLoaded(true)} onContextMenu={(e) => e.preventDefault()} draggable="false" />
        <img src={Profile_sm} alt="Profile Image" style={{borderRadius: '50%'}} className={`w-50 h-50 md:w-70 md:h-70 hover:scale-110 duration-300 md:group-hover:filter md:group-hover:drop-shadow-[0_0_2em_#646cffaa] md:hidden block ${isProfileLoaded ? 'block' : 'hidden'}`} onLoad={() => setIsProfileLoaded(true)} onContextMenu={(e) => e.preventDefault()} draggable="false" />
        <p className='mt-2 text-center text-[#6366F1] hidden md:block font-semibold'>
          Full-Stack Web Developer
        </p>
      </div>
    </section>
  )
}

export default Home
