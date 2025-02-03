import React from 'react'
import project1Img from '../assets/projects/project1.png'
import project2Img from '../assets/projects/project2.png'
import project3Img from '../assets/projects/project3.png'

function Projects() {
  const projectList = [
    {
      name: 'CricTribute', 
      description: 'A simple and responsive cricket based webpage', 
      techstack: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'JQuery'], 
      image: project1Img, 
      url: 'https://olapuajay.github.io/CricTriute/',
    },
    {
      name: 'Restaurant Website', 
      description: 'A simple, responsive restaurant website built using React and Bootstrap. This project includes features such as a homepage, menu, contact form, and about section. Designed with clean UI, the site is mobile-friendly and optimized for performance.', 
      techstack: ['React', 'Bootstrap', 'HTML', 'CSS'], 
      image: project2Img, 
      url: 'https://bistrowave-restaurant-web.netlify.app/',
    },
    {
      name: 'Film Vault', 
      description: 'A movie management app built with Vite and React, featuring: Home page with a banner and trending movies. Add to Watchlist functionality, with data stored in localStorage. Watchlist page with details (name, rating, popularity, genre) and delete option. Search and genre sorting for the watchlist.', 
      techstack: ['React', 'Vite', 'Axios', 'API', 'Bootstrap', 'HTML', 'CSS'], 
      image: project3Img, 
      url: 'https://filmvault-vite.netlify.app/',
    },
  ]
  return (
    <section id='projects' className='w-full py-5 px-4 bg-gray-900 text-white'>
      <h2 className="text-xl md:text-3xl font-bold text-center mb-5 ">My Projects</h2>
      <p className='text-[#9CA3AF] text-center text-sm md:text-lg'>Here are some of the projects I've worked on recently.</p>
      <div>
        {projectList.slice().reverse().map(project => (
          <div key={project.name} className='flex flex-col md:flex-row justify-center items-center mb-8 mt-4 bg-gray-800 p-4 rounded-2xl shadow-lg'>
            <div key={project.image} className='w-full md:w-1/2 flex justify-center'>
              <img src={project.image} alt={`Image of project1 - ${project.name}`} className='w-full max-w-lg rounded-xl shadow-lg' />
            </div>
            <div key={project.name} className='w-full md:w-1/2 text-left md:text-left'>
              <h3 className='text-white text-lg md:text-xl font-bold mt-4'> {project.name} </h3>
              <p className='text-[#9CA3AF] text-sm md:text-lg mt-2 mb-2'> {project.description} </p>
              <div className='flex flex-wrap'>
                {project.techstack.map(tech => (
                  <span key={tech} className='text-white text-sm md:text-lg bg-[#6366F1] px-2 py-1 rounded-xl mr-2 mt-2'> {tech} </span>
                ))}
              </div>
              <div className='mt-4'>
                <a href={project.url} target='_blank' rel='noreferrer noopener' className='text-[#9CA3AF] bg-gray-800 rounded-lg py-2 px-2 text-lg md:text-xl mr-2 cursor-pointer hover:text-white hover:bg-black duration-300'>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
