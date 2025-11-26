// src/components/Navbar.jsx
import React from "react";
import profilePic from "../assets/dharani.jpg";

function Navbar({ sidebarOpen, setSidebarOpen }) {
  const closeSidebar = () => setSidebarOpen(false);

  // call when nav item clicked; keeps anchor behavior + manages home-tagline class
  const handleNavClick = (hash) => {
    // close sidebar (mobile)
    setSidebarOpen(false);

    // show tagline only when Home clicked
    if (hash === "#home") {
      document.body.classList.add("show-home-tagline");
    } else {
      document.body.classList.remove("show-home-tagline");
    }

    // allow default anchor navigation (do NOT call event.preventDefault())
    // note: If you want to support direct keyboard activation, this still works.
  };

  return (
    <nav className={sidebarOpen ? "" : "nav-closed"} aria-label="Main navigation">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <h1>DHARANI S</h1>

      <ul>
        <li>
          <a href="#home" onClick={() => handleNavClick("#home")}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={() => handleNavClick("#about")}>
            About
          </a>
        </li>

        <li>
          <a href="#projects" onClick={() => handleNavClick("#projects")}>
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" onClick={() => handleNavClick("#contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
