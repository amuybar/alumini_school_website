// Components/Home/Contact.js
import React from 'react';
import '../../styles/Home/Contact.css';
const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: alumni@stamms.com</p>
        <p>Phone: + (254) 7456-7890</p>
        <p>Address: 71 Mlimani Street, Turbo</p>
      </div>
      <div className="contact-form">
        <h3>Contact Us</h3>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
