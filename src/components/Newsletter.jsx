import React, { useState } from "react";

function Newsletter({ setPage }) {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container glass">

        <h2 className="section-title">Newsletter</h2>
        <p className="section-subtitle">
          Únete a una comunidad de desarrolladores, creadores y entusiastas de la tecnología.
        </p>

        {/* ZONA DE IMÁGENES */}
        <div className="newsletter-images">
          <img src="/src/images/nw2.jpg" alt="Tecnología" />
          <img src="/src/images/nw1.jpg" alt="Código" />
          <img src="/src/images/nw3.jpg" alt="Innovación" />
        </div>

        {/* TEXTO LARGO Y PROFESIONAL */}
        <p className="newsletter-description">
          Cada mes recibirás contenido cuidadosamente seleccionado para ayudarte a mantenerte al día
          con las últimas tendencias del sector tecnológico. Nuestro boletín incluye artículos 
          especializados, análisis profundos, tutoriales avanzados, recomendaciones de herramientas,
          estrategias de productividad y entrevistas con profesionales del sector.  
          <br/><br/>
          Además, obtendrás acceso anticipado a recursos exclusivos, guías completas y contenido que
          solo compartimos con los miembros más comprometidos de nuestra comunidad. Ya seas desarrollador,
          diseñador, ingeniero, estudiante o simplemente alguien apasionado por la tecnología, nuestro
          newsletter está diseñado para proporcionarte valor real, aplicable y actualizado.
        </p>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="tu@correo.com" required className="newsletter-input" />

          <div className="newsletter-buttons">
            <button className="btn-primary" type="submit">Suscribirme</button>
            <button className="btn-ghost" type="button" onClick={() => setPage("home")}>Volver</button>
          </div>
        </form>

        {subscribed && (
          <div className="newsletter-benefits">
            <h3>🎉 ¡Bienvenido a la comunidad!</h3>
            <p>
              Estás a un paso de obtener contenido profesional, estratégico y cuidadosamente 
              seleccionado para tu crecimiento continuo.
            </p>

            <ul>
              <li>⭐ <strong>Artículos premium ampliados</strong> cada mes.</li>
              <li>🚀 <strong>Acceso anticipado</strong> a nuevos proyectos, herramientas y recursos.</li>
              <li>📘 <strong>Guías completas</strong> sobre desarrollo, diseño y optimización.</li>
              <li>🧠 <strong>Consejos profesionales</strong> basados en experiencia real.</li>
              <li>🎤 <strong>Entrevistas mensuales</strong> con expertos del sector.</li>
              <li>📩 <strong>Contenido descargable</strong> (plantillas, snippets, dashboards).</li>
              <li>🎁 <strong>Recursos exclusivos para suscriptores</strong>, no disponibles públicamente.</li>
              <li>🌐 <strong>Acceso prioritario</strong> a workshops, directos y masterclasses.</li>
            </ul>

            <p className="newsletter-cta">
              ¡Gracias por formar parte de este proyecto! Cada mes recibirás información valiosa y 
              práctica diseñada para ayudarte a avanzar profesionalmente.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Newsletter;
