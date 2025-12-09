import React from "react";

function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="brand">
          <strong>Mikel Robak</strong>
          <div className="brand-sub">Desarrollo Web & Seguridad</div>
        </div>

        <div className="footer-links">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("projects")}>Proyectos</button>
          <button onClick={() => setPage("contact")}>Contacto</button>
        </div>

        <div className="socials">
          <a href="https://github.com/mikelrobak" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://instagram.com/mikxl_" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>

      <div className="footer-bottom">© {new Date().getFullYear()} Mikel Robak — Todos los derechos reservados.</div>
    </footer>
  );
}

export default Footer;
