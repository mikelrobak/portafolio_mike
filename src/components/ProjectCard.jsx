import React from "react";

function ProjectCard({ title, description, img }) {
  return (
    <article className="project-card">
      <div className="project-image-container">
        <img src={img} alt={title} className="project-image" />
      </div>

      <div className="project-body">
        <h3 className="project-name">{title}</h3>
        <p className="project-description">{description}</p>
      </div>

      <div className="project-footer">
        <button className="project-btn" onClick={() => alert("Detalle del proyecto pronto")}>Ver proyecto</button>
      </div>
    </article>
  );
}

export default ProjectCard;
