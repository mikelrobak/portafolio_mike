import React from "react";
import personalPhoto from "../images/personal.jpg";

function Main({ setPage }) {
  return (
    <section className="main-hero">
      <div className="hero-content glass">
        <div className="hero-photo">
          <img src={personalPhoto} alt="Mikel Robak" className="hero-img" />
        </div>

        <div className="hero-text">
          <h2 className="hero-eyebrow">Hola, soy</h2>
          <h1 className="hero-title">Mikel Robak</h1>
          <p className="hero-subtitle">Desarrollador Web • Seguridad • Networking</p>

          <p className="hero-description">
            Creo aplicaciones robustas y elegantes. Me centro en código limpio,
            arquitectura práctica y experiencia de usuario. Aquí puedes ver
            algunos proyectos y contactarme.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => setPage("projects")}>Ver Proyectos</button>
            <button className="btn-ghost" onClick={() => setPage("contact")}>Contactar</button>
          </div>

          <div className="skills-row">
            <span className="skill-pill">React</span>
            <span className="skill-pill">JavaScript</span>
            <span className="skill-pill">Node</span>
            <span className="skill-pill">Python</span>
            <span className="skill-pill">Redes</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
