import React from 'react';
import img from '../giff.gif';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
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
    </section>
  );
};

export default Home;
