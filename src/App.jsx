import { useEffect, useState } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Sidebar from './components/Sidebar'
import Skills from './components/Skills'
import Loading from './components/Loading'

function App() {
  const [loader, setLoader] = useState(true);
  const siteProps = {
    name: 'Ajay',
    description: 'I\'m a Web Developer specializing in JavaScript(React.js and Node.js) with a passion for building intuitive, responsive, and visually engaging web experiences. I focus on crafting seamless UI/UX designs that are fast, accessible, and user-friendly.',
    email: 'olapuajay@gmail.com',
    location: 'Peddapalli, India',
    socialLinks: [
      { name: 'github', url: 'https://github.com/olapuajay'},
      { name: 'linkedin', url: 'https://www.linkedin.com/in/olapuajay/'},
      { name: 'figma', url: 'https://www.figma.com/@olapuajay'},
      { name: 'twitter', url: 'https://x.com/_ajaypatel_18' },
    ],
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      disable: 'mobile',
    })
    window.addEventListener('scroll', AOS.refresh);

    const timer = setTimeout(() => {
      setLoader(false)
    }, 2000)
    return () => {
      setTimeout(timer);
      window.removeEventListener('scroll', AOS.refresh);
    }
  }, [])

  return (
    <div className="App">
      {
        loader ? (
          <div className='flex justify-center items-center min-h-screen overflow-x-hidden'>
            <Loading />
          </div>
        ) : (
          <>
            <Navbar />
            <Sidebar email={siteProps.email} socialLinks={siteProps.socialLinks} />
            <Home name={siteProps.name} description={siteProps.description} location={siteProps.location} />
            <About />
            <Skills />
            <Projects />
            <Contact email={siteProps.email} socialLinks={siteProps.socialLinks} />
            <Footer name={siteProps.name} />
          </>
        )
      }
    </div>
  )
}

export default App
