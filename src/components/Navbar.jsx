// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import profilePic from "../assets/dharani.jpg";

function Navbar({ sidebarOpen, setSidebarOpen }) {
  const [activeHash, setActiveHash] = useState("#home"); // DEFAULT: Home is active

  useEffect(() => {
    const updateActive = () => {
      const hash = window.location.hash || "#home";
      setActiveHash(hash);
    };

    updateActive();
    window.addEventListener("hashchange", updateActive);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    document.querySelectorAll("section[id]").forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("hashchange", updateActive);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (hash) => {
    setSidebarOpen(false); // close mobile menu
    setActiveHash(hash);   // instantly move green bar
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <nav className={sidebarOpen ? "mobile-menu-open" : ""}>
        <img src={profilePic} alt="Dharani S" className="profile-pic" />
        <h1>DHARANI S</h1>

        <ul>
          {["home", "about", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={activeHash === `#${item}` ? "active" : ""}
                onClick={() => handleNavClick(`#${item}`)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;