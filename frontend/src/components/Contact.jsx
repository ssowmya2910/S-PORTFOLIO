import React, { useState } from 'react';
import './style/Contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`Message sent from ${email}: ${message}`);
    setEmail('');
    setMessage('');
  };

  return (
    <section id='contact'>
      <h1>Contact</h1>
      <div className='contact-form'>
        <form onSubmit={handleSubmit}>
          <h3>Enter Email</h3>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <h3>Message</h3>
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className='butto'>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
