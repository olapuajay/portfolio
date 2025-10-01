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
import project3Img_6 from '../assets/projects/project3_6.png'
import project4Img_1 from '../assets/projects/project4_1.png'
import project4Img_2 from '../assets/projects/project4_2.png'
import project4Img_3 from '../assets/projects/project4_3.png'
import project4Img_4 from '../assets/projects/project4_4.png'
import project4Img_5 from '../assets/projects/project4_5.png'
import project4Img_6 from '../assets/projects/project4_6.png'
import project4Img_7 from '../assets/projects/project4_7.png'
import project4Img_8 from '../assets/projects/project4_8.png'
import project4Img_9 from '../assets/projects/project4_9.png'
import project4Img_10 from '../assets/projects/project4_10.png'
import project5Img_1 from '../assets/projects/project5_1.png'
import project5Img_2 from '../assets/projects/project5_2.png'
import project5Img_3 from '../assets/projects/project5_3.png'
import project5Img_4 from '../assets/projects/project5_4.png'
import project5Img_5 from '../assets/projects/project5_5.png'
import project5Img_6 from '../assets/projects/project5_6.png'
import project5Img_7 from '../assets/projects/project5_7.png'
import project5Img_8 from '../assets/projects/project5_8.png'
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
      techstack: ['React', 'Routing', 'Bootstrap', 'Web3Forms', 'HTML', 'CSS'], 
      images: [project2Img_1, project2Img_2, project2Img_3, project2Img_4, project2Img_5, project2Img_6, project2Img_7],
      url: 'https://bistrowave-restaurant-web.netlify.app/',
    },
    {
      name: 'Film Vault', 
      description: 'A movie management app built with Vite and React, featuring: Home page with a banner and trending movies. Add to Watchlist functionality, with data stored in localStorage. Watchlist page with details (name, rating, popularity, genre) and delete option. Search and genre sorting for the watchlist.', 
      techstack: ['React', 'Vite', 'Axios', 'API', 'Routing', 'Bootstrap', 'HTML', 'CSS'], 
      images: [project3Img_1, project3Img_2, project3Img_3, project3Img_4, project3Img_5, project3Img_6],
      url: 'https://filmvault-vite.netlify.app/',
    },
    {
      name: 'Pure Harvest',
      description: 'Developed a full-stack e-commerce platform connecting farmers and users directly. Features include user authentication, role-based dashboards (User/Farmer/Admin), product uploads with image hosting, cart management, order placement with Razorpay simulation, and order tracking in user profile. APIs tested with Postman and styled using Tailwind CSS.',
      techstack: ['MERN Stack', 'JWT Auth', 'Cloudinary', 'Tailwind CSS', 'Postman'],
      images: [project4Img_1, project4Img_2, project4Img_3, project4Img_4, project4Img_5, project4Img_6, project4Img_7, project4Img_8, project4Img_9, project4Img_10],
      url: 'https://pureharvest-mern.vercel.app/',
    },
    {
      name: 'FinSight',
      description: 'Built a full-stack personal finance management platform to help users track expenses, set budgets, and gain actionable AI-powered insights into their spending behavior. Designed with real-time notifications, daily reminders, and intelligent reporting for smarter financial decisions.',
      techstack: ['MERN Stack', 'Redux', 'Socket.io', 'Gemini API', 'Recharts', 'JWT Auth'],
      images: [project5Img_1, project5Img_2, project5Img_3, project5Img_4, project5Img_5, project5Img_6, project5Img_7, project5Img_8],
      url: 'https://finsight-et.netlify.app/',
    }
  ]
  return (
    <section id='projects' className='w-full py-5 px-4 bg-[var(--secondary-bg-color)]' data-aos="fade-in">
      <h2 className="text-xl md:text-3xl font-bold text-center md:mb-4 mb-2 text-[var(--text-color)]" data-as="fade-down">Projects</h2>
      <p className='text-[var(--secondary-text-color)] text-center text-sm md:text-lg' data-aos="fade-up"></p>
      <div>
        {projectList.slice().reverse().map(project => (
          <div key={project.name} className='flex flex-col lg:flex-row justify-center items-center my-4 bg-[var(--background-color)] px-2 py-0 rounded-lg shadow-lg' data-aos="fade-up">
            <div key={project.images} className='w-full lg:w-1/2 flex justify-center md:my-8'>
              <div className='w-full max-w-lg rounded-xl shadow-lg'>
                <ProjectCarousel images={project.images} />
              </div>
            </div>
            <div key={project.name} className='w-full lg:w-1/2 text-left md:text-left mb-2 md:px-2 md:pb-2' data-aos="fade-left">
              <h3 className='text-[var(--text-color)] text-lg md:text-xl font-bold mt-2'> {project.name} </h3>
              <p className='text-[var(--secondary-text-color)] text-sm md:text-lg mt-2 mb-2'> {project.description} </p>
              <div className='flex flex-wrap'>
                {project.techstack.map(tech => (
                  <span key={tech} className='text-white text-sm md:text-lg bg-[#6366F1] px-2 py-1 rounded-xl mr-2 mt-2'> {tech} </span>
                ))}
              </div>
              <div className='mt-4'>
                <a href={project.url} target='_blank' rel='noreferrer noopener' className='text-[var(--secondary-text-color)] md:bg-[var(--secondary-bg-color)] bg-[var(--secondary-bg-color)] rounded-xl md:rounded-lg py-1 md:py-2 px-2 text-lg md:text-xl mr-2 cursor-pointer hover:text-[var(--text-color)] duration-300'>
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
