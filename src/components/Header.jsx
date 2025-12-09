import React from "react";

function Header({ setPage }) {
  return (
    <header className="header">
      <div className="logo" onClick={() => setPage("home")} role="button" tabIndex={0}>
        <h1>Mikel<span className="logo-accent">.dev</span></h1>
      </div>

      <nav className="nav-links" aria-label="Main navigation">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("projects")}>Proyectos</button>
        <button onClick={() => setPage("contact")}>Contacto</button>
        <button onClick={() => setPage("newsletter")}>Newsletter</button>
      </nav>
    </header>
  );
}

export default Header;
