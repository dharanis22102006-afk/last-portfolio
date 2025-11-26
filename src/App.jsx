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

  useEffect(() => {
    // Typed.js (safe init + destroy)
    if (window.Typed) {
      if (window._typedInstance?.destroy) {
        try { window._typedInstance.destroy(); } catch (e) {}
      }

      window._typedInstance = new window.Typed(".typing", {
        strings: [
          "Dharani S",
          "a Web Developer",
          "a CSE Student",
          "a Tech Enthusiast",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        startDelay: 300,
        backDelay: 1600,
        smartBackspace: true,
        loop: true,
        showCursor: true,
        cursorChar: "|",
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

    // Back to Top
    const backToTop = document.getElementById("backToTop");
    const handleBackToTopVisibility = () => {
      if (!backToTop) return;
      backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    };
    const handleBackToTopClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("scroll", handleBackToTopVisibility);
    if (backToTop) backToTop.addEventListener("click", handleBackToTopClick);

    // Theme toggle
    const toggle = document.getElementById("themeToggle");
    const updateThemeToggleText = () => {
      if (toggle) {
        toggle.textContent = document.body.classList.contains("dark-mode")
          ? "☀️"
          : "🌙";
      }
    };
    updateThemeToggleText();

    const handleThemeToggle = () => {
      document.body.classList.toggle("dark-mode");
      updateThemeToggleText();
    };
    if (toggle) toggle.addEventListener("click", handleThemeToggle);

    // IntersectionObserver for fade/slide in
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    });
    document.querySelectorAll(".fade-in, .slide-in").forEach((el) => observer.observe(el));

    // sync body class for sidebar
    document.body.classList.toggle("sidebar-closed", !sidebarOpen);

    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScrollNav);
      window.removeEventListener("scroll", handleBackToTopVisibility);
      if (backToTop) backToTop.removeEventListener("click", handleBackToTopClick);
      if (toggle) toggle.removeEventListener("click", handleThemeToggle);
      observer.disconnect();
      // optional: destroy typed instance on unmount
      if (window._typedInstance?.destroy) {
        try { window._typedInstance.destroy(); } catch (e) {}
      }
    };
    // Magnetic glow follow effect for project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });
});

  }, [sidebarOpen]);
useEffect(() => {
  // Create container
  const starContainer = document.createElement("div");
  starContainer.className = "starry-bg";
  document.body.appendChild(starContainer);

  // generate stars only in LIGHT MODE
  if (!document.body.classList.contains("dark-mode")) {
    const numStars = 80;

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      const size = Math.random() * 3 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 4;

      star.className = "star";
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${y}vh`;
      star.style.left = `${x}vw`;
      star.style.animationDelay = `${delay}s`;

      starContainer.appendChild(star);
    }
  }

  return () => starContainer.remove();
}, []);

  // Toggle handler that updates body class too
  const toggleSidebar = () => {
    setSidebarOpen((prev) => {
      const next = !prev;
      document.body.classList.toggle("sidebar-closed", !next);
      return next;
    });
  };

  return (
    <>
      {/* Cinematic background layers (keep these first so UI overlays appear above them) */}
      <div className="animated-bg" aria-hidden="true" />
      <div className="glow" aria-hidden="true" />

      {/* Sidebar */}
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Sidebar toggle (keeps visible when sidebar closed) */}
      <button
        className="sidebar-toggle"
        aria-label="Toggle sidebar"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? "⟨" : "☰"}
      </button>

      {/* Theme Toggle */}
      <button id="themeToggle" title="Toggle theme">🌙</button>

      {/* Main content (centered). Each component wrapped in a .page-card */}
      <main>
        <div className="content">
          <div className="page-card">
            <Home />
          </div>

          <div className="page-card">
            <About />
          </div>

          <div className="page-card">
            <Projects />
          </div>

          <div className="page-card">
            <Contact />
          </div>

          <Footer />
        </div>
      </main>

      {/* Back to top */}
      <button id="backToTop" aria-label="Back to top">↑</button>
    </>
  );
}

export default App;
