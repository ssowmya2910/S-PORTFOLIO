import React from 'react'
import lc from '../assets/lc.png'
import gfg from '../assets/gfg.png'
import cn from '../assets/cn.png'
import './style/Profiles.css'
const Profiles = () => {
  return (
    <section id="profiles">
          <h1>Coding Profiles</h1>
          <div className="profiles-grid">
            
            <div className="profile-card">
              <img src={lc} alt="leetcode profile" />
              <h3>Leetcode</h3>
              
              <a href="https://leetcode.com/u/ssowmya_2910/" target="_blank" rel="noopener noreferrer">
                <button className="view-btn">visit</button>
              </a>
             
            </div>
    
            <div className="profile-card">
              <img src={gfg} alt="geeksforgeeks profile" />
              <h3>GeeksForGeeks</h3>
             
              <a href="https://www.geeksforgeeks.org/user/ssowmy7qzh/" target="_blank" rel="noopener noreferrer">
                <button className="view-btn">visit</button>
              </a>
            </div>
            <div className="profile-card">
              <img src={cn} alt="CodingNinjas Profile" />
              <h3>Coding Ninjas</h3>
             
              <a href="https://www.naukri.com/code360/profile/a3d0b9ae-6faa-4d59-be2c-21516472b797" target="_blank" rel="noopener noreferrer">
                <button className="view-btn">visit</button>
              </a>
            </div>
            </div>
  </section>
  )
}

export default Profiles