import React, { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Sidebar from './components/Sidebar'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Education from './components/Education'

function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const siteProps = {
    name: 'Olapu Ajay',
    designation: 'Full-Stack Web Developer',
    description: 'Hi, I\'m a Web Developer specializing in JavaScript and the MERN stack. I’m passionate about building intuitive, responsive, and visually engaging web experiences. I focus on crafting seamless UI/UX designs that are fast, accessible, and user-friendly.',
    email: 'olapuajay@gmail.com',
    location: 'Peddapalli, India',
    socialLinks: [
      { name: 'github', url: 'https://github.com/olapuajay' },
      { name: 'linkedin', url: 'https://www.linkedin.com/in/olapuajay/' },
      { name: 'figma', url: 'https://www.figma.com/@olapuajay' },
      { name: 'leetcode', url: 'https://leetcode.com/u/olapuajay/' },
    ],
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      disable: 'mobile',
    })
    window.addEventListener('scroll', AOS.refresh);
    return () => {
      window.removeEventListener('scroll', AOS.refresh);
    }
  }, [])

  return (
    <div className="App">
      {!isPageLoaded && (
        <div className='fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black opacity-90'>
          <div className='animate-pulse'>
            <i className='fas fa-circle-notch text-5xl text-[#6366F1] animate-spin'></i>
          </div>
        </div>
      )}
      <div className={`${isPageLoaded ? 'block' : 'hidden'}`} onLoad={() => setIsPageLoaded(true)}>
        <Navbar />
        <Sidebar email={siteProps.email} socialLinks={siteProps.socialLinks} />
        <Home name={siteProps.name} designation={siteProps.designation} description={siteProps.description} location={siteProps.location} />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Contact email={siteProps.email} socialLinks={siteProps.socialLinks} />
        <Footer name={siteProps.name} />
      </div>
    </div>
  )
}

export default App
