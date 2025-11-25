import React from "react";

function Navbar() {
  return (
    <nav>
      <img src="/dharani.jpg" alt="Profile" className="profile-pic" />

      <h1>DHARANI S</h1>
      <ul>
        <li>
          <a href="#home" className="active">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
