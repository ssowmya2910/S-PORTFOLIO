import React from 'react';
import './style/Skills.css';
import java from '../assets/java.webp'
import c from '../assets/c.png'
import mongo from '../assets/mongodb.svg'
import express from '../assets/express.png'
import react from '../assets/React.webp'
import node from '../assets/node.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import vscode from '../assets/vscode.webp'
import figma from '../assets/figma.png'

const Skills = () => {
  return (
    <section id='skills'>
      <h1>Skills</h1>
      <div className='myskills'>
        <div className="skills-category">
          <div className="skills-group">
            <div className="tech">
              <h3>Coding</h3>
              <ul>
                <li><img src={java} alt='/'/></li>
                <li><img src={c} alt='/'/></li>                
              </ul>
            </div>

            <div className="tech">
              <h3>Web Development</h3>
              <ul>
                <li><img src={mongo} alt='/'/></li>
                <li><img src={express} alt='/'/></li>
                <li><img src={react} alt='/'/></li>
                <li><img src={node} alt='/'/></li>

              </ul>
            </div>

            <div className="tech">
              <h3>Tools</h3>
              <ul>
              <li> <img src={git} alt='/'/> </li>
              <li> <img src={github} alt='/'/> </li>
              <li> <img src={vscode} alt='/'/> </li>
              <li> <img src={figma} alt='/'/> </li>
              </ul>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Skills;
