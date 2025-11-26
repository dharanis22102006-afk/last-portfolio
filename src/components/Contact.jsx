import React from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k6xz1oo",       // Service ID
        "template_86jeymp",      // Template ID
        e.target,
        "iBtfUhyWZcAiLs8Ay"      // Public Key
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        e.target.reset();
      })
      .catch((error) =>
        alert("❌ Failed to send: " + JSON.stringify(error))
      );
  };

  return (
    <section id="contact" className="fade-in">
      <h2>Contact Me</h2>
      <p>Let’s connect! Send a message below 👇</p>

      {/* ========== CONTACT FORM ========== */}
      <form onSubmit={sendEmail}>
        <label>Name:</label>
        <input type="text" name="from_name" placeholder="Your name" required />

        <label>Email:</label>
        <input type="email" name="from_email" placeholder="you@example.com" required />

        <label>Message:</label>
        <textarea name="message" rows="4" placeholder="Your message..." required />

        <button type="submit">Send Message</button>
      </form>

      {/* ========== CONNECT WITH ME ========== */}
      <div className="connect-section">
        <h3 className="connect-title">Connect with Me</h3>

        <div className="connect-icons">
          <a
            href="https://github.com/dharanis22102006-afk"
            target="_blank"
            rel="noreferrer"
            className="icon github"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/dharani-s-28490b333"
            target="_blank"
            rel="noreferrer"
            className="icon linkedin"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
