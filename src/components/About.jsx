import React, { useState } from 'react';
import aboutImg from '../assets/about-img.jpeg'

const About = () => {
  const [isImgLoaded, setIsImgLoaded] = useState(false)
  const quickBits = [
    'Pursuing a Bachelor’s degree in CSE',
    'Currently learning backend technologies with javascript',
    'Experience with version control systems like Git',
    'Passionate about learning new technologies and frameworks',
    'Enthusiastic about creating seamless user experiences',
  ]
  
  return (
    <section id="about" className="w-full py-5 px-4 bg-gray-900 text-white"
     data-aos="fade-in">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-4 ">About Me</h2>
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center lg:gap-10 gap-5 md:px-4">
        <div className="w-full lg:w-1/2 flex justify-center my-auto" data-aos="fade-right">
          {!isImgLoaded && (
            <div className='w-60 h-40 md:w-96 md:h-56 bg-gray-700 animate-pulse rounded-lg overflow-x-hidden'>
            </div>
          )}
          <img
            src={aboutImg}
            alt="About Image"
            className={`w-full max-w-lg rounded-2xl shadow-lg ${isImgLoaded ? 'block' : 'hidden'}`}
            onLoad={() => setIsImgLoaded(true)}
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
        </div>

        <div className="w-full lg:w-1/2 text-left md:text-left">
          <p className="text-[#9CA3AF] text-sm md:text-lg" data-aos="fade-left">
            I'm a passionate web developer with a keen eye for UI/UX design and a love for crafting smooth, responsive, and visually engaging web applications. My expertise lies in React.js, but I also enjoy exploring backend technologies to create seamless full-stack solutions.
          </p>
          <p className="text-[#9CA3AF] text-sm md:text-lg mt-2" data-aos="fade-left">
            I thrive on learning and experimenting with new technologies, always staying up to date with the latest industry trends. I believe in clean, readable, and maintainable code that enhances user experience and performance. Whether it’s bringing a Figma design to life, optimizing a website for accessibility, or implementing smooth animations, I’m always up for the challenge.
          </p>
          <p className="text-[#9CA3AF] text-sm md:text-lg mt-2" data-aos="fade-up">Some quick bits about me:</p>
          <ul className="list-disc list-inside text-[#9CA3AF] mt-2">
            {quickBits.map(bit => (
              <li key={bit} className="mb-2 md:text-lg text-sm" data-aos="fade-up">{bit}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
