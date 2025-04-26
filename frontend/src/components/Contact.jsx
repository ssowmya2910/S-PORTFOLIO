import React from 'react'
import './style/Contact.css'
const Contact = () => {
  return (
    <section id='contact'>
        <h1>Contact</h1>
        <div className='contact-form'>
    <h3>Enter Email Id</h3> <input type="email" />
     <h3>Message </h3> <input type="text"  />
    
     <button className='butto'>Submit</button>
          
          
    </div>
    </section>
  )
}

export default Contact