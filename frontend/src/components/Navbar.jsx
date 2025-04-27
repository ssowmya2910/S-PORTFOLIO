import React from 'react';
import './style/Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav>
      <div>
        <ul className="navbar">
          <li><Link to="home" smooth={true} duration={500} className="top">Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} className="top">About</Link></li>
          <li><Link to="projects" smooth={true} duration={500} className="top">Projects</Link></li>
          <li><Link to="skills" smooth={true} duration={500} className="top">Skills</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="top">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
