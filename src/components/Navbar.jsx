// src/components/Navbar.jsx
import React from "react";
import profilePic from "../assets/dharani.jpg";

function Navbar({ sidebarOpen, setSidebarOpen, activePage, setActivePage }) {
  const handleClick = (e, page) => {
    e.preventDefault();

    // toggle active page: if clicked same page, toggle back to 'all'
    setActivePage((prev) => (prev === page ? "all" : page));

    // close sidebar on click (useful for mobile)
    setSidebarOpen(false);

    // scroll to the section after a short delay to allow the layout to settle
    setTimeout(() => {
      const el = document.getElementById(page);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  };

  return (
    <nav className={sidebarOpen ? "" : "nav-closed"} aria-label="Main navigation">
      <img src={profilePic} alt="Profile" className="profile-pic" />

      <h1>DHARANI S</h1>

      <ul>
        <li>
          <a
            href="#home"
            onClick={(e) => handleClick(e, "home")}
            className={activePage === "home" ? "active" : ""}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            onClick={(e) => handleClick(e, "about")}
            className={activePage === "about" ? "active" : ""}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#projects"
            onClick={(e) => handleClick(e, "projects")}
            className={activePage === "projects" ? "active" : ""}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "contact")}
            className={activePage === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </li>

        <li style={{ padding: "14px 28px" }}>
          {/* small "All" control to return to full scrolly view */}
          <button
            className="nav-btn"
            onClick={() => {
              setActivePage("all");
              setSidebarOpen(false);
              setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 80);
            }}
          >
            All
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
