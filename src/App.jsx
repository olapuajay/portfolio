import './App.css'
import About from './components/About'
import Contact from './components/Contact'
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

  return (
    <div className="App">
      <Navbar />
      <Sidebar email={siteProps.email} socialLinks={siteProps.socialLinks} />
      <Home name={siteProps.name} description={siteProps.description} location={siteProps.location} socialLinks={siteProps.socialLinks} />
      <About />
      <Skills />
      <Projects />
      <Contact email={siteProps.email} socialLinks={siteProps.socialLinks} />
    </div>
  )
}

export default App
