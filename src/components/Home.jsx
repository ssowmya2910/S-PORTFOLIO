import React from 'react'
import img from '../giff.gif'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import './style/Home.css'
const Home = () => {
  const[text]=useTypewriter({
    words:['I am Sowmya S','Welcome to my portfolio'],
    loop:true,
  });
  return (
    <section id="home">
    <div>
       <h1>Hi !<br/><span>{text}</span><span><Cursor/></span></h1>
       <img src={img} alt='homegif'/>
    </div>
    </section>
  )
}

export default Home;


