// src/App.jsx
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
  const [isDark, setIsDark] = useState(false);

  // Typed.js, active nav, back-to-top, animations
  useEffect(() => {
    // Typed animation (if script is loaded in index.html)
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
        const top = section.offsetTop - 150;
        if (window.scrollY >= top) {
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

    // Back to top
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

    // IntersectionObserver for fade/slide in
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

    return () => {
      window.removeEventListener("scroll", handleScrollNav);
      window.removeEventListener("scroll", handleBackToTopVisibility);
      if (backToTop) {
        backToTop.removeEventListener("click", handleBackToTopClick);
      }
      observer.disconnect();
    };
  }, []);

  // React-controlled dark mode: update body class whenever isDark changes
  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDark);
  }, [isDark]);

  return (
    <>
      {/* Sidebar */}
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Sidebar toggle button (left chevron / burger) */}
      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen((prev) => !prev)}
      >
        {sidebarOpen ? "⟨" : "☰"}
      </button>

      {/* Theme toggle button (dark / light) */}
      <button
        id="themeToggle"
        onClick={() => setIsDark((prev) => !prev)}
      >
        {isDark ? "☀️" : "🌙"}
      </button>

      {/* Main content – always rendered, scroll page sections */}
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>

      {/* Back to top button */}
      <button id="backToTop">↑</button>
    </>
  );
}

export default App;
