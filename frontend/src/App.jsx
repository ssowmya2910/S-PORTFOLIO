import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Profiles from './components/Profiles'
const App = () => {
 
  return (
    <div>
      <Navbar/> 
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Profiles/>
      <Contact/>
      

      </div>
  )
}

export default App
