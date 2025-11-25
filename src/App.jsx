import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  useEffect(() => {
    // Typing animation (Typed.js from CDN in index.html)
    if (window.Typed) {
      new window.Typed(".typing", {
        strings: [
          "Dharani S",
          "a Web Developer",
          "a CSE Student",
          "a Tech Enthusiast",
        ],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true,
      });
    }

    // Active nav highlight on scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    const handleScrollNav = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (current && link.getAttribute("href")?.includes(current)) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScrollNav);

    // Back to Top button
    const backToTop = document.getElementById("backToTop");

    const handleBackToTopVisibility = () => {
      if (!backToTop) return;
      backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    };

    const handleBackToTopClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", handleBackToTopVisibility);
    if (backToTop) {
      backToTop.addEventListener("click", handleBackToTopClick);
    }

    // Dark mode toggle
    const toggle = document.getElementById("themeToggle");
    const handleThemeToggle = () => {
      document.body.classList.toggle("dark-mode");
      if (toggle) {
        toggle.textContent = document.body.classList.contains("dark-mode")
          ? "☀️"
          : "🌙";
      }
    };

    if (toggle) {
      toggle.addEventListener("click", handleThemeToggle);
    }

    // IntersectionObserver for fade/slide in (ALWAYS runs – not inside emailjs)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    document
      .querySelectorAll(".fade-in, .slide-in")
      .forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScrollNav);
      window.removeEventListener("scroll", handleBackToTopVisibility);
      if (backToTop) {
        backToTop.removeEventListener("click", handleBackToTopClick);
      }
      if (toggle) {
        toggle.removeEventListener("click", handleThemeToggle);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />

      {/* Theme Toggle */}
      <button id="themeToggle">🌙</button>

      {/* Main Content – now using components */}
      <main>
        <Home />
        {/* About component will render your About section */}
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />

      {/* Back to Top */}
      <button id="backToTop">↑</button>
    </>
  );
}

export default App;
