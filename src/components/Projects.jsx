import React from "react";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-container">

        {/* Project 1 */}
        <div className="project-card slide-in">
          <h3>Portfolio Website</h3>
          <p>
            A personal portfolio website built using HTML, CSS, and JavaScript —
            showcasing my skills, projects, and contact information.
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

        {/* Project 2 */}
        <div className="project-card slide-in">
          <h3>E-Commerce Website</h3>
          <p>
            An elegant and responsive e-commerce website with a modern UI and product listings.
          </p>
          <a
            href="https://dharanis22102006-afk.github.io/E-commerce-website/"
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
