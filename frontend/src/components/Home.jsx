import React from 'react';
import img from '../giff.gif';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './style/Home.css';

const Home = () => {
  const [text] = useTypewriter({
    words: ['I am Sowmya S', 'Welcome to my portfolio'],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <section id="home">
      <div className="home-content">
        <h1>Hi! 👋 <br /><span className="typed-text">{text}</span><Cursor /></h1>
        <img src={img} alt="Animated Home" className="home-img" />
      </div>
      <div className="social-icons">
          <a href="https://www.linkedin.com/in/sowmya-s-343436258/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/ssowmya2910" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:ssowmya@gmail.com">
            <FaEnvelope />
          </a>
        </div>
    </section>
  );
};

export default Home;
