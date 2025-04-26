import React, { useState } from 'react'
// import Profile from '../assets/profile.png'
import { motion } from 'framer-motion'
import Profile_sm from '../assets/portfolio-profile.png'
import Profile from '../assets/pf_profile.png'
import { MapPin, MoveRight } from 'lucide-react'

function Home({ name, designation, description, location }) {
  const [isProfileLoaded, setIsProfileLoaded] = useState(false)
  
  return (
    <section id='home' className='relative flex flex-col-reverse md:flex-row w-full justify-center md:items-start items-center px-8 pb-10 md:p-15 md:h-[calc(100vh-4rem)] mt-20' data-aos='fade-in'>
      <div className='md:w-3/4 lg:pt-20 md:pt-10' data-aos='fade-right'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-color)]'>
          {name}
        </h1>
        <div className='flex items-center gap-2 mt-2'>
          <div className='bg-[#6366F1] md:h-1 md:w-15 h-0.5 w-10'></div>
          <p className='text-start text-[#6366F1] md:text-xl text-lg'>
            {designation}
          </p>
        </div>
        <p className='text-[var(--secondary-text-color)] text-sm md:text-lg mt-2 md:mt-4'>
          {description}
        </p>
        <p className='text-[var(--secondary-text-color)] text-sm md:text-lg mt-2 md:mt-2 flex items-center'>
          <MapPin size={16} className='mr-2 text-[#6366F1]' />
          {location}
        </p>
        <div className='flex justify-items-start space-x-4 items-center mt-4 md:mt-6' data-aos='fade-up'>
          <button className='bg-[#6366F1] py-2 px-4 rounded-lg text-white text-center font-normal hover:bg-[#637bf1] duration-300 md:text-lg text-sm cursor-pointer'>
            <a href="#skills">View Skills</a>
          </button>
          <button className='py-2 px-4 rounded-lg text-[#6366F1] border-1 text-center font-normal hover:bg-[#637bf1] hover:text-white hover:border-0 duration-300 min-w-30 md:text-lg text-sm cursor-pointer'>
            <a href="#contact">Contact Me</a>
          </button>
        </div>
      </div>
      <div className='relative md:w-1/4 md:pt-10 pt-0 group' data-aos='zoom-in'>
        {!isProfileLoaded && (
          <div className='w-40 h-40 md:w-56 md:h-56 bg-gray-700 animate-pulse rounded-full'></div>
        )}

        <motion.img
          src={Profile}
          alt="Profile Image"
          style={{borderRadius: '50%'}}
          className={`w-50 h-50 md:w-70 md:h-70 hover:scale-110 duration-300 md:group-hover:filter md:group-hover:drop-shadow-[0_0_2em_#646cffaa] md:block hidden ${isProfileLoaded ? 'block' : 'hidden'}`}
          onLoad={() => setIsProfileLoaded(true)}
          onContextMenu={(e) => e.preventDefault()}
          draggable="false"
          animate={{
            boxShadow: [
              "0 0 10px #6366F1, 0 0 20px #6366F1",
              "0 0 20px #6366F1, 0 0 30px #6366F1",
              "0 0 10px #6366F1, 0 0 20px #6366F1",
            ],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div 
          className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#6366F1] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg md:block hidden w-40 text-center'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span className='relative inline-flex items-center'>
            <p className='bg-green-500 rounded-full h-2 w-2 inline-block mr-1 absolute'></p>
            <p className='bg-green-400 rounded-full h-2 w-2 inline-block mr-1 animate-ping'></p>
          </span>
          Available for work
        </motion.div>

        <motion.img 
          src={Profile_sm} 
          alt="Profile Image" 
          style={{borderRadius: '50%'}} 
          className={`w-50 h-50 md:w-70 md:h-70 hover:scale-110 duration-300 md:group-hover:filter md:group-hover:drop-shadow-[0_0_2em_#646cffaa] md:hidden block ${isProfileLoaded ? 'block' : 'hidden'}`} 
          onLoad={() => setIsProfileLoaded(true)} 
          onContextMenu={(e) => e.preventDefault()} 
          draggable="false"
          animate={{
            boxShadow: [
              "0 0 10px #6366F1, 0 0 20px #6366F1",
              "0 0 20px #6366F1, 0 0 30px #6366F1",
              "0 0 10px #6366F1, 0 0 20px #6366F1",
            ],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </section>
  )
}

export default Home
