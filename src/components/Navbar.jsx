import React from "react";
import profilePic from "../assets/dharani.jpg";

function Navbar({ sidebarOpen, setSidebarOpen }) {
  return (
    <nav className={sidebarOpen ? "" : "nav-closed"}>
      <img src={profilePic} alt="Profile" className="profile-pic" />

      <h1>DHARANI S</h1>

      <ul>
        <li>
          <a
            href="#home"
            onClick={() => setSidebarOpen(false)}   // <-- CLOSE SIDEBAR
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            onClick={() => setSidebarOpen(false)}   // <-- CLOSE SIDEBAR
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#projects"
            onClick={() => setSidebarOpen(false)}   // <-- CLOSE SIDEBAR
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            onClick={() => setSidebarOpen(false)}   // <-- CLOSE SIDEBAR
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
