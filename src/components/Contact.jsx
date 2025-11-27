// src/components/Contact.jsx
import React, { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const PUBLIC_KEY = "Ig6WH0_aJOHXCjXos";      // replace with your public key (if different)
const SERVICE_ID = "service_k6xz1oo";         // make sure this matches EmailJS
const TEMPLATE_ID = "template_86jeymp";       // make sure this matches EmailJS

function Contact() {
  useEffect(() => {
    // initialize once
    if (emailjs && emailjs.init) emailjs.init(PUBLIC_KEY);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    // double-check form field names match your EmailJS template variables
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target)
      .then(() => {
        alert("✅ Message sent successfully!");
        e.target.reset();
      })
      .catch((err) => {
        // show a human friendly message and log details
        console.error("EmailJS error:", err);
        alert("❌ Failed to send message. Please confirm your EmailJS service/template/public key are correct. \n\nError: " + (err?.text || err?.message || JSON.stringify(err)));
      });
  };

  return (
    <section id="contact" className="fade-in">
      <div className="page-card contact-card">
        <h2>Contact Me</h2>
        <p>Let’s connect! Send a message below 👇</p>

        <form onSubmit={sendEmail}>
          <label>Name:</label>
          <input type="text" name="from_name" placeholder="Your name" required />

          <label>Email:</label>
          <input type="email" name="from_email" placeholder="you@example.com" required />

          <label>Message:</label>
          <textarea name="message" rows="4" placeholder="Your message..." required />

          <button type="submit" className="btn">Send Message</button>
        </form>

        {/* Connect with me (centered). Heading uses theme green; icons pink */}
        <div className="connect-section">
          <h3 className="connect-title">Connect with Me</h3>

          <div className="connect-icons">
            <a href="https://github.com/dharanis22102006-afk" target="_blank" rel="noreferrer" className="icon github" aria-label="GitHub">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/dharani-s-28490b333" target="_blank" rel="noreferrer" className="icon linkedin" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
