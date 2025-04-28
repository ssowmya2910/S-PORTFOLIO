import React from 'react';
import './style/Projects.css';
import musicapp from '../assets/isaiwreathe.png'
import todo from '../assets/todo.png'
import tictactoe from '../assets/tictactoe.png'
const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        
        <div className="project-card">
          <img src={todo} alt="To-Do List" />
          <h3>To-Do List</h3>
          <p>
            Implemented a To-Do List web application with full CRUD operations using <strong>React.js</strong>.  
          </p>
         
        </div>

        <div className="project-card">
          <img src={musicapp} alt="Music Player" />
          <h3>Music Player</h3>
          <p>
            Built a simple <strong>music player</strong> interface using React.js. <br />
            (Working to upgrade it with dynamic song fetching soon!)
          </p>
        </div>

        {/* <div className="project-card">
          <img src={tictactoe} alt="Tic Tac Toe" />
          <h3>Tic Tac Toe</h3>
          <p>
            Developed a fully functional <strong>Tic Tac Toe</strong> game using <strong>Java</strong>.<br />
            Features include player turn tracking and win condition detection.
          </p>
        </div> */}

      </div>
    </section>
  );
};

export default Projects;
