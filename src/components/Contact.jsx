import React, { useState } from "react";

function Contact({ setPage }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    // Opcional: borrar mensaje después de unos segundos
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="contact-section">
      <div className="section-inner glass">
        <h2 className="section-title">Contacto</h2>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="field">
              <span>Nombre</span>
              <input type="text" placeholder="Tu nombre" required />
            </label>

            <label className="field">
              <span>Email</span>
              <input type="email" placeholder="tu@correo.com" required />
            </label>

            <label className="field">
              <span>Mensaje</span>
              <textarea placeholder="Escribe tu mensaje..." rows="6" required />
            </label>

            <div className="form-actions">
              <button className="btn-ghost" type="submit">Enviar</button>
              <button className="btn-ghost" type="button" onClick={() => setPage("home")}>Cancelar</button>
            </div>

            {sent && (
              <p className="success-message" style={{ color: "limegreen", marginTop: "10px" }}>
                ✅ ¡Mensaje enviado correctamente!
              </p>
            )}
          </form>

          <aside className="contact-info">
            <h3>Mis datos</h3>
            <p><strong>Teléfono:</strong> +34 612 345 678</p>
            <p><strong>Email:</strong> mr001@iesemilidarder.com</p>
            <p><strong>Dirección:</strong> Sa Porrasa 123, Ciudad Calvia</p>
            <p><strong>GitHub:</strong> github.com/mikelrobak</p>
            <div className="contact-note">Disponible para freelancing y colaboración.</div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Contact;
