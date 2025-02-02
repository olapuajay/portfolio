import React from 'react'
import Profile from '../assets/profile.png'

function Home({ name, description }) {
  return (
    <div className='flex flex-col-reverse md:flex-row w-full justify-center items-start p-10 md:p-15 h-screen'>
      <div className='md:w-3/4 md:pt-10'>
        <h1 className='text-3xl md:text-5xl font-bold text-white '>
          Hi, I'm {name}👋
        </h1>
        <p className='text-[#9CA3AF] text-sm md:text-lg mt-4 md:mt-6'>
          {description}
        </p>
        <p className='text-[#9CA3AF] text-sm md:text-xl mt-2 md:mt-2'>
          <i className='fas fa-map-marker-alt text-sm md:text-xl mt-2 md:mt-2 mr-2'></i>
          Peddapalli, India
        </p>
        <div className='flex justify-items-start space-x-2 items-center mt-4 md:mt-6'>
          <button className='bg-[#6366F1] py-2 px-4 rounded-xl text-white text-center font-semibold hover:bg-[#637bf1] duration-300 min-w-35 cursor-pointer'>
            Contact Me
          </button>
          <i className='fab fa-github text-3xl text-[#9CA3AF] hover:text-white duration-300 cursor-pointer'></i>
          <i className='fab fa-linkedin text-3xl text-[#9CA3AF] hover:text-[#0A66C2] duration-300 cursor-pointer'>          </i>
        </div>
      </div>
      <div className='md:w-1/4 md:pt-10 pt-10'>
        <img src={Profile} alt="Profile Image" />
      </div>
    </div>
  )
}

export default Home
