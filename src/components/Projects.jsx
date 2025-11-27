import React from "react";
import portfolioTitle from "../assets/portfolio-title.png";
import ecommerceTitle from "../assets/ecommerece.png";
import systemTitle from "../assets/system.png";
function Projects() {
  return (
    <section id="projects" className="fade-in">
      <h2>Projects</h2>

      <div className="project-container">

        {/* Portfolio Website */}
        <div className="project-card alive">
          <img src={portfolioTitle} className="project-title-img" alt="Portfolio" />

          <p>
            A modern and responsive portfolio website showcasing my skills, knowledge and
            journey in web development using HTML, CSS, JavaScript, and React.
          </p>

          <a
            href="https://dharanis22102006-afk.github.io/portfolio/"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            🔗 View Live
          </a>
        </div>

        {/* Ecommerce Website */}
        <div className="project-card alive">
          <img src={ecommerceTitle} className="project-title-img" alt="E-commerce" />

          <p>
            A clean and responsive e-commerce website offering a smooth shopping
            experience with organized product listings and showcases the beauty of vintage products.          </p>

          <a
            href="https://dharanis22102006-afk.github.io/E-commerce-website/"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            🔗 View Live
          </a>
        </div>

        {/* AASMS System (NEW) */}
        <div className="project-card alive">
          <img src={systemTitle} className="project-title-img" alt="AASMS system" />
          <p>
            AASMS (Automated Attendance & Student Management System) — a system
            designed to manage student attendance, records, and reports efficiently.
          </p>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            🔗 View Live
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;
