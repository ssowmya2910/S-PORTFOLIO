import React from 'react';
import './style/Skills.css';

const Skills = () => {
  return (
    <section id='skills'>
      <h1>Skills</h1>
      <div className='myskills'>
        <div className="skills-category">
          <h2>Technical Skills</h2>
          <div className="skills-group">
            <div className="tech">
              <h3>Coding</h3>
              <ul>
                <li>Java - Familiar with object-oriented programming and building simple applications.</li>
                <li>C - Understands fundamental programming concepts and problem-solving.</li>
                <li>JavaScript - Basic knowledge of adding interactivity to web pages.</li>
              </ul>
            </div>

            <div className="tech">
              <h3>Web Development</h3>
              <ul>
                <li>HTML & CSS - Able to create and style basic web pages.</li>
                <li>React.js - Learning to build interactive web applications using components.</li>
              </ul>
            </div>

            <div className="tech">
              <h3>Tools</h3>
              <ul>
                <li>VS Code - My primary code editor for writing and testing code.</li>
                <li>Figma - Basic knowledge of designing UI/UX prototypes.</li>
                <li>Canva - Comfortable creating simple graphics and presentations.</li>
                <li>MS Excel - Familiar with basic data organization and analysis.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h2>Soft Skills</h2>
          <div className="tech">
            <ul>
              <li>Problem-solving</li>
              <li>Critical Thinking</li>
              <li>Adaptability</li>
              <li>Communication</li>
              <li>Time Management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
