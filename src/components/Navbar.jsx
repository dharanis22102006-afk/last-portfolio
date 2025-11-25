// src/components/Navbar.jsx
import React from "react";
import profilePic from "../assets/dharani.jpg";

function Navbar({ sidebarOpen, setSidebarOpen }) {
  return (
    <nav className={sidebarOpen ? "" : "nav-closed"}>
      <img src={profilePic} alt="Profile" className="profile-pic" />

      <h1>DHARANI S</h1>

      <ul>
        <li>
          <a href="#home" onClick={() => setSidebarOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setSidebarOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setSidebarOpen(false)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setSidebarOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
