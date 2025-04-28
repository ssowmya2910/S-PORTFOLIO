import React, { useState } from 'react';
import './style/Contact.css';
import Swal from 'sweetalert2'


const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f8a93265-1570-4a4e-93f7-f84c0cb35085");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Thanks!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };

  return (
    <section id='contact'>
      <h1>Contact</h1>
      <div className='contact-form'>
        <form onSubmit={onSubmit}>
        <h3>Enter Name</h3>
          <input
            type="text"
            placeholder="Your Name"
            name='name'
            required
          />
          <h3>Enter Email</h3>
          <input
            type="email"
            placeholder="Your email"
            name='email'
            required
          />
          <h3>Message</h3>
          <textarea
            placeholder="Your message"
            name="message"
            required
          ></textarea>
          <button type="submit" className='butto'>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
