import React from 'react'
import './style/Navbar.css'
import {Link} from "react-scroll"
const Navbar = () => {
  return (
      <nav>
    <div><ol className='navbar'>
        <Link to="home"  smooth={true} duration={500} className='top'>Home</Link>
        <Link to="about"  smooth={true} duration={500} className='top'>About</Link>
        <Link to="skills"  smooth={true} duration={500} className='top'>Skills</Link>
        <Link to="projects"  smooth={true} duration={500} className='top'></Link>
        <Link to="contact"  smooth={true} duration={500} className='top'>Contact</Link>
        
        </ol>
        </div>
     </nav> 
      
  )
}

export default Navbar