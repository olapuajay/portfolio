import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  const siteProps = {
    name: 'Ajay',
    description: 'I\'m a Web Developer specializing in JavaScript(React.js and Node.js) with a passion for building intuitive, responsive, and visually engaging web experiences. I focus on crafting seamless UI/UX designs that are fast, accessible, and user-friendly.',
    socialLinks: [
      { name: 'Github', url: ''},
      { name: 'LinkedIn', url: ''},
    ],
  }

  return (
    <div className="App">
      <Navbar />
      <Home name={siteProps.name} description={siteProps.description} />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
