import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Code2, Figma } from 'lucide-react';
import ContactImg from '../assets/contact.webp';

function Contact({ email, socialLinks }) {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socialIcons = {
    github: <Github className="w-6 h-6" />,
    linkedin: <Linkedin className="w-6 h-6" />,
    leetcode: <Code2 className="w-6 h-6" />,
    figma: <Figma className="w-6 h-6" />,
  };

  const socialColors = {
    github: 'text-[var(--text-color)] dark:text-gray-300 md:text-[var(--secondary-text-color)] md:hover:text-gray-800 md:dark:hover:text-gray-300',
    linkedin: 'text-[#0A66C2] md:text-[var(--secondary-text-color)] md:hover:text-[#0A66C2]',
    leetcode: 'text-[#F89F1B] md:text-[var(--secondary-text-color)] md:hover:text-[#F89F1B]',
    figma: 'text-red-600 md:text-[var(--secondary-text-color)] md:hover:text-red-600',
  };

  return (
    <section id='contact' className='w-full py-5 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mb-6'
        >
          <h2 className="text-3xl font-bold text-[var(--text-color)] mb-3">Let's Connect</h2>
          <p className='text-[var(--secondary-text-color)] max-w-2xl mx-auto'>
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className='flex flex-col lg:flex-row items-center gap-12'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='w-full lg:w-1/2 flex justify-center'
          >
            {!isImgLoaded && (
              <div className='w-full h-64 md:h-80 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-xl'></div>
            )}
            <img 
              src={ContactImg} 
              alt="Contact illustration" 
              className={`${isImgLoaded ? 'block' : 'hidden'} w-full h-auto max-w-md rounded-xl shadow-xl object-cover brightness-90 hover:brightness-100 transition-all duration-300`}
              onLoad={() => setIsImgLoaded(true)}
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='w-full lg:w-1/2 space-y-8'
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className='p-6 bg-[var(--card-bg-color)] rounded-xl shadow-md hover:shadow-lg transition-all'
            >
              <div className='flex flex-col items-center text-center'>
                <div className='mb-4 p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full'>
                  <Mail className='w-8 h-8 text-indigo-600 dark:text-indigo-400' />
                </div>
                <h3 className='text-xl font-semibold text-[var(--text-color)] mb-2'>Email Me</h3>
                <a 
                  href={`mailto:${email}`} 
                  className='text-indigo-600 dark:text-indigo-400 text-lg md:text-xl font-semibold hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors flex items-center gap-2'
                >
                  {email}
                </a>
              </div>
            </motion.div>

            <div className='space-y-4'>
              <h3 className='text-lg font-medium text-[var(--text-color)] text-center'>Find me on social media</h3>
              <div className='flex justify-center gap-6'>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target='_blank'
                    rel='noreferrer noopener'
                    className={`p-3 rounded-full bg-[var(--card-bg-color)] border border-[var(--text-color)] shadow-sm ${socialColors[social.name]} transition-all`}
                    whileHover={{ y: -5 }}
                    onHoverStart={() => setHoveredSocial(social.name)}
                    onHoverEnd={() => setHoveredSocial(null)}
                    aria-label={social.name}
                  >
                    <div className='relative'>
                      {React.cloneElement(socialIcons[social.name], {
                        className: `${socialIcons[social.name].props.className} ${socialColors[social.name].split(' ')[0]}`
                      })}
                      {hoveredSocial === social.name && (
                        <motion.span 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium capitalize'
                        >
                          {social.name}
                        </motion.span>
                      )}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;