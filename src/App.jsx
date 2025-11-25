import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    // Typed animation
    if (window.Typed) {
      new window.Typed(".typing", {
        strings: ["Dharani S", "a Web Developer", "a CSE Student", "a Tech Enthusiast"],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true,
      });
    }

    // Active nav highlight
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    const handleScrollNav = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) current = section.getAttribute("id");
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (current && link.getAttribute("href")?.includes(current)) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScrollNav);

    // Back to top
    const backToTop = document.getElementById("backToTop");
    const handleBackToTopVisibility = () => {
      backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    };
    const handleBackToTopClick = () =>
      window.scrollTo({ top: 0, behavior: "smooth" });

    window.addEventListener("scroll", handleBackToTopVisibility);
    backToTop.addEventListener("click", handleBackToTopClick);

    // Dark Mode
    const toggle = document.getElementById("themeToggle");
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    // Fade-in & slide-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    });

    document.querySelectorAll(".fade-in, .slide-in").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScrollNav);
    };
  }, []);

  return (
    <>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Sidebar toggle button */}
      <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? "⟨" : "☰"}
      </button>

      {/* Dark Mode Toggle */}
      <button id="themeToggle">🌙</button>

      {/* FULL PAGE MAIN CONTENT */}
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>

      <button id="backToTop">↑</button>
    </>
  );
}

export default App;
