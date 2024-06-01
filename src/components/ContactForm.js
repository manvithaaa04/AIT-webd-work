import React from 'react';


function ContactForm() {
  return (
    <section id="contact-form" className="ContactForm">
      <h2>Contact Us</h2>
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
