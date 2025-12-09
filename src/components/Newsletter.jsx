import React from "react";

function Newsletter({ setPage }) {
  return (
    <section className="newsletter-section">
      <div className="section-inner glass">
        <h2 className="section-title">Newsletter</h2>
        <p className="muted">Suscríbete para recibir novedades y artículos técnicos mensuales.</p>

        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="tu@correo.com" required />
          <div className="form-actions">
            <button className="btn-primary" type="submit">Suscribirme</button>
            <button className="btn-ghost" type="button" onClick={() => setPage("home")}>Volver</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
