import React, {useState} from 'react'
import javascript from '../assets/skills/javascript.png'
import react from '../assets/skills/react.png'
import nodejs from '../assets/skills/nodejs.png'
import tailwindcss from '../assets/skills/tailwind.png'
import bootstrap from '../assets/skills/bootstrap-framework.png'
import html from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import git from '../assets/skills/git.png'
import figma from '../assets/skills/figma.png'

function Skills() {
  const [isLoaded, setIsLoaded] = useState(false)
  const Skills = [
    {name: 'Javascript', image: javascript},
    {name: 'React', image: react},
    {name: 'Node.js', image: nodejs},
    {name: 'Tailwind CSS', image: tailwindcss},
    {name: 'Bootstrap', image: bootstrap},
    {name: 'HTML', image: html},
    {name: 'CSS', image: css},
    {name: 'Git', image: git},
    {name: 'Figma', image: figma},
  ]
  return (
    <section id='skills' className='text-center w-full py-5 px-4' data-aos="fade-in">
      <h2 className="text-xl md:text-3xl font-bold text-center text-white md:mb-4 mb-2 " data-aos="fade-down">Skills</h2>
      <p className='text-[#9CA3AF] text-sm md:text-lg' data-aos="fade-up">The Skills, Tools, and Technologies I'm familiar with</p>
      <div className='grid grid-cols-3 gap-4 md:grid-cols-6 md:gap-6 w-full px-4 py-6 '>
        {Skills.map(skill => (
          <div key={skill.name} className='flex flex-col items-center' data-aos="zoom-in">
            {!isLoaded && (
              <div className='w-14 h-14 md:w-25 md:h-25 bg-gray-700 animate-pulse rounded-lg'></div>
            )}
            <img src={skill.image} alt={`Image of ${skill.name}`} className={`${isLoaded ? 'block' : 'hidden'} w-14 h-14 md:w-25 md:h-25 object-contain hover:scale-110 duration-300 cursor-pointer`} onLoad={() => setIsLoaded(true)} />
            {!isLoaded && (
              <div className='w-36 h-6 bg-gray-700 animate-pulse rounded-lg'></div>
            )}
            <p className={`${isLoaded ? 'block' : 'hidden'} text-[#9CA3AF] text-sm md:text-lg mt-2`} onLoad={() => setIsLoaded(true)}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
