import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page animate-fade-in">
      <div className="contact-card animate-fade-in-up">
        <span className="contact-icon" role="img" aria-label="contact">📬</span>
        <h1>Contact Us</h1>
        <p>Have questions or feedback? Fill out the form below and we'll get back to you soon!</p>
        {submitted ? (
          <div className="thank-you">Thank you for contacting us!</div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        )}
        <div className="contact-info">
          <div><b>Email:</b> prathammalhotra2410@gmail.com</div>
          <div><b>Phone:</b> +919557652678</div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 