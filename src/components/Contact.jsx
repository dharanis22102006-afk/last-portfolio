import React from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.target;

    // optional hidden time field like in your older HTML
    const timeInput = form.elements.time;
    if (timeInput) {
      timeInput.value = new Date().toLocaleString();
    }

    emailjs
      .sendForm(
        "service_k6xz1oo",          // your EmailJS service ID
        "template_86jeymp",         // your EmailJS template ID
        form,
        "Ig6WH0_aJOHXCjXos"         // your PUBLIC KEY from EmailJS
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        alert("❌ Failed to send message: " + JSON.stringify(error));
      });
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Let’s connect! Reach me on LinkedIn or send a message below 👇</p>
      <p>
        💼 <strong>LinkedIn:</strong>{" "}
        <a
          href="https://www.linkedin.com/in/dharani-s-28490b333"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/dharani-s
        </a>
        <br />
        💻 <strong>GitHub:</strong>{" "}
        <a
          href="https://github.com/dharanis22102006-afk"
          target="_blank"
          rel="noreferrer"
        >
          github.com/dharanis22102006-afk
        </a>
      </p>

      <form onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="from_name"
          placeholder="Your name"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="from_email"
          placeholder="you@example.com"
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Your message..."
          required
        ></textarea>

        <input type="hidden" name="time" />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
