import React from 'react'

const Profiles = () => {
  return (
    <section id="profiles">
          <h1>Coding Profiles</h1>
          <div className="profiles-grid">
            
            <div className="profile-card">
              <img src={todo} alt="To-Do List" />
              <h3>Leetcode</h3>
              
              <a href="https://taskmanager-gamma-livid.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button className="view-btn">Visit</button>
              </a>
             
            </div>
    
            <div className="profile-card">
              <img src={musicapp} alt="Music Player" />
              <h3>GeeksForGeeks</h3>
             
              <a href="https://isaiwreathe.netlify.app/" target="_blank" rel="noopener noreferrer">
                <button className="view-btn">visit</button>
              </a>
            </div>
            <div className="profile-card">
              <img src={musicapp} alt="Music Player" />
              <h3>Coding Ninjas</h3>
             
              <a href="https://isaiwreathe.netlify.app/" target="_blank" rel="noopener noreferrer">
                <button className="view-btn">visit</button>
              </a>
            </div>
            </div>
  </section>
  )
}

export default Profiles