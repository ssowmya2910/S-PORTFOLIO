import React from 'react'
import './style/Skills.css'
const Skills = () => {
  return (
    <section id='skills'>
        <h1>Skills</h1>
    <div className='myskills'>
        <ol className='skills-main'>
        <ol> <li><h2>Technical</h2>
                <ol className='tech'><li><h3>Coding</h3><p>I have a basic understanding of programming and have worked with the following languages:  
                </p>
                <li className='prog'>Java - Familiar with object-oriented programming and building simple applications.  </li>
                <li className='prog'>C - Understands fundamental programming concepts and problem-solving. </li>
                <li className='prog'>JavaScript - Basic knowledge of adding interactivity to web pages.  
                </li></li></ol>
                <ol className='tech'>
                <li><h3>Web Development</h3><p>I have explored front-end web development and can work with:  
                </p>
                <li className='prog'>HTML & CSS - Able to create and style basic web pages. </li>
                <li className='prog'>React.js - Learning to build interactive web applications using components.  

</li>
                    </li></ol>
                <ol className='tech'>
                <li><h3>Tools</h3>
                <li className='prog'>VS Code - My primary code editor for writing and testing code. </li>
                <li className='prog'>Figma - Basic knowledge of designing UI/UX prototypes.</li>
                <li className='prog'> Canva - Comfortable creating simple graphics and presentations. </li>
                <li className='prog'> MS Excel - Familiar with basic data organization and analysis.  

</li>
                </li>
                </ol>
            </li></ol>
            <ol >
            <li><h2>Softskills</h2>
               <ul> <li className='prog'>
                <li>1.Problem-solving</li>
                <li>2.Critical-Thinking</li>
                <li>3.Adaptability</li>
                <li>4.Communication</li>
                <li>5.Time management</li>
                    </li></ul></li></ol>
           
        </ol>
    </div>
    </section>
  )
}

export default Skills