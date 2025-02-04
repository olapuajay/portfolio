import { useEffect } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Sidebar from './components/Sidebar'
import Skills from './components/Skills'

function App() {
  const siteProps = {
    name: 'Ajay',
    description: 'I\'m a Web Developer specializing in JavaScript(React.js and Node.js) with a passion for building intuitive, responsive, and visually engaging web experiences. I focus on crafting seamless UI/UX designs that are fast, accessible, and user-friendly.',
    email: 'olapuajay@gmail.com',
    location: 'Peddapalli, India',
    socialLinks: [
      { name: 'github', url: 'https://github.com/olapuajay'},
      { name: 'linkedin', url: 'https://www.linkedin.com/in/olapuajay/'},
      { name: 'figma', url: 'https://www.figma.com/@olapuajay'},
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
      <Navbar />
      <Sidebar email={siteProps.email} socialLinks={siteProps.socialLinks} />
      <Home name={siteProps.name} description={siteProps.description} location={siteProps.location} />
      <About />
      <Skills />
      <Projects />
      <Contact email={siteProps.email} socialLinks={siteProps.socialLinks} />
      <Footer />
    </div>
  )
}

export default App
