import React from 'react'
import './style/Projects.css'
const Projects = () => {
  return (
    <section id='projects'>
    <div className='pro'><h1>Projects</h1>
      <div className='project'>
      <h3>To Do List</h3>
      <img src='../todo.jpg' alt='project1'/>
      <p>Implemented a to-do List website with CRUD operations using React.js </p></div>
      <div className='project'>
      <h3>Tic Tac Toe</h3>
      <img src='../tictactoe.png' alt='project2'/>
      <p>Developed a fully functional tic tac toe game using Java. <br/>The project includes tracking of player’s turn
      and win condition detection</p></div></div>
    </section>
  )
}

export default Projects