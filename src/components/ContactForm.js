import React from 'react';
import './ContactForm.css';
import image1 from './aitcon2.jpeg';

function ContactForm() {
  return (
    <section id="contact-form" className="ContactForm">
      <h2>Contact Us</h2>
      <br></br><br></br>
      <img src={image1} alt="Contact Us" />
      <br></br><br></br>
      <form>
        <label>
          Full Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email Address:
          <input type="email" name="email" />
        </label>
        <label>
          Contact Number:
          <input type="tel" name="phone" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
