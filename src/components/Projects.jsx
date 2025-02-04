import React from 'react'
import project1Img_1 from '../assets/projects/project1_1.png'
import project1Img_2 from '../assets/projects/project1_2.png'
import project1Img_3 from '../assets/projects/project1_3.png'
import project1Img_4 from '../assets/projects/project1_4.png'
import project1Img_5 from '../assets/projects/project1_5.png'
import project2Img_1 from '../assets/projects/project2_1.png'
import project2Img_2 from '../assets/projects/project2_2.png'
import project2Img_3 from '../assets/projects/project2_3.png'
import project2Img_4 from '../assets/projects/project2_4.png'
import project2Img_5 from '../assets/projects/project2_5.png'
import project2Img_6 from '../assets/projects/project2_6.png'
import project2Img_7 from '../assets/projects/project2_7.png'
import project3Img_1 from '../assets/projects/project3_1.png'
import project3Img_2 from '../assets/projects/project3_2.png'
import project3Img_3 from '../assets/projects/project3_3.png'
import project3Img_4 from '../assets/projects/project3_4.png'
import project3Img_5 from '../assets/projects/project3_5.png'
import ProjectCarousel from './ProjectCarousel'

function Projects() {
  const projectList = [
    {
      name: 'CricTribute', 
      description: 'A simple and responsive cricket based webpage', 
      techstack: ['HTML', 'CSS', 'Javascript','JQuery', 'Bootstrap'], 
      images: [project1Img_1, project1Img_2, project1Img_3, project1Img_4, project1Img_5],
      url: 'https://olapuajay.github.io/CricTriute/',
    },
    {
      name: 'Restaurant Website', 
      description: 'A simple, responsive restaurant website built using React and Bootstrap. This project includes features such as a homepage, menu, contact form, and about section. Designed with clean UI, the site is mobile-friendly and optimized for performance.', 
      techstack: ['React', 'Bootstrap', 'Web3Forms', 'HTML', 'CSS'], 
      images: [project2Img_1, project2Img_2, project2Img_3, project2Img_4, project2Img_5, project2Img_6, project2Img_7],
      url: 'https://bistrowave-restaurant-web.netlify.app/',
    },
    {
      name: 'Film Vault', 
      description: 'A movie management app built with Vite and React, featuring: Home page with a banner and trending movies. Add to Watchlist functionality, with data stored in localStorage. Watchlist page with details (name, rating, popularity, genre) and delete option. Search and genre sorting for the watchlist.', 
      techstack: ['React', 'Vite', 'Axios', 'API', 'Bootstrap', 'HTML', 'CSS'], 
      images: [project3Img_1, project3Img_2, project3Img_3, project3Img_4, project3Img_5],
      url: 'https://filmvault-vite.netlify.app/',
    },
  ]
  return (
    <section id='projects' className='w-full py-5 px-4 bg-gray-900 text-white' data-aos="fade-in">
      <h2 className="text-xl md:text-3xl font-bold text-center md:mb-4 mb-2 " data-as="fade-down">My Projects</h2>
      <p className='text-[#9CA3AF] text-center text-sm md:text-lg' data-aos="fade-up">Here are some of the projects I've worked on recently.</p>
      <div>
        {projectList.slice().reverse().map(project => (
          <div key={project.name} className='flex flex-col md:flex-row justify-center items-center my-4 bg-gray-800 px-2 py-0 rounded-2xl shadow-lg' data-aos="fade-up">
            <div key={project.images} className='w-full md:w-1/2 flex justify-center'>
              <div className='w-full max-w-lg rounded-xl shadow-lg'>
                <ProjectCarousel images={project.images} />
              </div>
            </div>

            <div key={project.name} className='w-full md:w-1/2 text-left md:text-left mb-2' data-aos="fade-left">
              <h3 className='text-white text-lg md:text-xl font-bold mt-2'> {project.name} </h3>
              <p className='text-[#9CA3AF] text-sm md:text-lg mt-2 mb-2'> {project.description} </p>
              <div className='flex flex-wrap'>
                {project.techstack.map(tech => (
                  <span key={tech} className='text-white text-sm md:text-lg bg-[#6366F1] px-2 py-1 rounded-xl mr-2 mt-2'> {tech} </span>
                ))}
              </div>
              <div className='mt-4'>
                <a href={project.url} target='_blank' rel='noreferrer noopener' className='text-[#9CA3AF] md:bg-gray-800 bg-black rounded-xl md:rounded-lg py-1 md:py-2 px-2 text-lg md:text-xl mr-2 cursor-pointer hover:text-white hover:bg-black duration-300'>
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
