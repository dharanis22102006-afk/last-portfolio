import React from "react";

function Contact() {
  return (
    <section id="contact" className="fade-in">
      <h2>Contact Me</h2>

      <p>Let’s connect! Send a message below 👇</p>

      <form id="contactForm">
        <label>Name:</label>
        <input type="text" name="from_name" placeholder="Your name" required />

        <label>Email:</label>
        <input type="email" name="from_email" placeholder="you@example.com" required />

        <label>Message:</label>
        <textarea name="message" rows="4" placeholder="Your message..." required></textarea>

        <input type="hidden" name="time" id="time" />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
