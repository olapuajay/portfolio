import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, GitBranch, Database } from 'lucide-react';

import javascript from '../assets/skills/javascript.png';
import react from '../assets/skills/react.png';
import nodejs from '../assets/skills/nodejs.png';
import tailwindcss from '../assets/skills/tailwind.png';
import bootstrap from '../assets/skills/bootstrap-framework.png';
import html from '../assets/skills/html.png';
import css from '../assets/skills/css.png';
import git from '../assets/skills/git.png';
import figma from '../assets/skills/figma.png';
import expressjs from '../assets/skills/expressjs.png';
import mongodb from '../assets/skills/mongodb.png';
import postman from '../assets/skills/postman.png';
import api from '../assets/skills/api.png'
import responsivewebdesign from '../assets/skills/responsivedesign.png'
import notion from '../assets/skills/notion.png'
import redux from "../assets/skills/redux.png";
import socketio from "../assets/skills/socketio.png";
import sql from "../assets/skills/sql.png";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Palette className="w-5 h-5" />,
    skills: [
      { name: 'HTML', image: html },
      { name: 'CSS', image: css },
      { name: 'JavaScript', image: javascript },
      { name: 'React JS', image: react },
      { name: 'Redux', image: redux },
      { name: 'Tailwind CSS', image: tailwindcss },
      { name: 'Bootstrap', image: bootstrap },
      { name: 'Responsive Design', image: responsivewebdesign }
    ]
  },
  {
    title: "Backend",
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: 'Node.js', image: nodejs },
      { name:  'Express.js', image: expressjs},
      { name: 'MongoDB', image: mongodb },
      { name: 'MySql', image: sql },
      { name: 'Socket io', image: socketio },
      { name: 'RestAPI', image: api },
    ]
  },
  {
    title: "Tools",
    icon: <GitBranch className="w-5 h-5" />,
    skills: [
      { name: 'Git', image: git },
      { name: 'Postman', image: postman },
      { name: 'Notion', image: notion },
      { name: 'Figma', image: figma },
    ]
  }
];

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id='skills' className='w-full py-5 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className="text-3xl font-bold text-[var(--text-color)] mb-3">Skills & Expertise</h2>
          <p className='text-[var(--secondary-text-color)] max-w-2xl mx-auto'>
            Technologies and tools I work with to create exceptional digital experiences
          </p>
        </motion.div>

        <div className='space-y-12'>
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className='flex items-center mb-6'>
                <div className='mr-3 p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-[#6366F1] dark:text-indigo-300'>
                  {category.icon}
                </div>
                <h3 className='text-xl font-semibold text-[var(--text-color)]'>{category.title}</h3>
              </div>

              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -5 }}
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    className='relative'
                  >
                    <div className={`p-4 rounded-xl bg-[var(--card-bg-color)] border border-[var(--card-border-color)] transition-all duration-300 ${hoveredSkill === skill.name ? 'shadow-lg' : 'shadow-md'}`}>
                      <div className='flex flex-col items-center'>
                        <div className='w-16 h-16 flex items-center justify-center mb-3'>
                          <motion.img
                            src={skill.image}
                            alt={skill.name}
                            className='w-12 h-12 object-contain'
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          />
                        </div>
                        <p className='text-sm font-medium text-[var(--text-color)] text-center'>{skill.name}</p>
                      </div>
                    </div>
                    {hoveredSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className='absolute -bottom-8 left-0 right-0 text-center text-xs text-indigo-500 font-medium'
                      >
                        {skill.name}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className='mt-16 text-center'
        >
          <p className='text-[var(--secondary-text-color)] italic'>
            Continuously learning and expanding my skill set
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;