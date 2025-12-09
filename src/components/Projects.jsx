import React from "react";
import ProjectCard from "./ProjectCard";

function Projects({ setPage, projects }) {
  return (
    <section className="projects-section">
      <div className="section-inner">
        <h2 className="section-title">Proyectos destacados</h2>

        <div className="project-grid">
          {projects.map((p, idx) => (
            <ProjectCard
              key={idx}
              title={p.title}
              description={p.description}
              img={p.img}
            />
          ))}
        </div>

        <div className="back-cta">
          <button className="btn-ghost" onClick={() => setPage("home")}>← Volver al inicio</button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
