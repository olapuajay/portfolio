import React from 'react'
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
    <section id='skills' className='text-center w-full py-5 px-4'>
      <h2 className="text-xl md:text-3xl font-bold text-center text-white mb-5 ">Skills</h2>
      <p className='text-[#9CA3AF] text-sm md:text-lg'>The Skills, Tools, and Technologies I'm familiar with</p>
      <div className='grid grid-cols-3 gap-4 md:grid-cols-6 md:gap-6 w-full  px-8 py-10 '>
        {Skills.map(skill => (
          <div key={skill.name} className='flex flex-col items-center'>
            <img src={skill.image} alt={`Image of ${skill.name}`} className='w-14 h-14 md:w-25 md:h-25 object-contain hover:scale-110 duration-300 cursor-pointer' />
            <p className='text-[#9CA3AF] text-sm md:text-lg mt-2'>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
