import React from 'react'
import { School, MapPin, CalendarRange } from 'lucide-react'

function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'Lovely Professional University',
      location: 'Punjab, India',
      duration: '2022 - 2026',
    },
    {
      degree: 'Intermediate',
      institution: 'Sree Chaitanya Junior College',
      location: 'Karimnagar, India',
      duration: '2020 - 2022',
    },
    {
      degree: 'Secondary Education',
      institution: 'Shantiniketan High School',
      location: 'Peddapalli, India',
      duration: '2019 - 2020',
    }
  ]

  return (
    <div className='w-full py-12 px-4 sm:px-6 lg:px-8 bg-[var(--secondary-bg-color)]' data-aos='fade-in'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-12 text-[var(--text-color)]'>Education</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {education.map((edu, index) => (
            <div 
              key={index} 
              className='relative p-6 rounded-xl shadow-lg bg-[var(--card-bg-color)] border border-[var(--card-border-color)] hover:shadow-xl transition-all duration-300 group overflow-hidden'
              data-aos={`fade-up`}
              data-aos-delay={index * 100}
            >
              <div className='absolute top-0 left-0 w-full h-1 bg-[#6366F1]'></div>
              <div className='flex flex-col h-full'>
                <h3 className='text-lg font-bold text-[var(--text-color)] mb-2'>{edu.degree}</h3>
                <div className='flex items-center mb-3'>
                  <School className='w-5 h-5 mr-2 text-[var(--secondary-text-color)]' />
                  <p className='text-sm font-medium text-[var(--secondary-text-color)]'>{edu.institution}</p>
                </div>
                
                <div className='flex items-center mb-4'>
                  <MapPin className='w-5 h-5 mr-2 text-[var(--secondary-text-color)]' />
                  <p className='text-sm text-[var(--secondary-text-color)]'>{edu.location}</p>
                </div>
                
                <div className='mt-auto pt-4 border-t border-[var(--card-border-color)]'>
                  <div className='flex items-center'>
                    <CalendarRange className='w-5 h-5 mr-2 text-[#6366F1]' />
                    <p className='text-sm font-semibold text-indigo-500'>{edu.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education