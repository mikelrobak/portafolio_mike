import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";

import pry1 from "./images/pry1.jpg";
import pry2 from "./images/pry2.jpg";
import pry3 from "./images/pry3.jpg";
import pry4 from "./images/pry4.jpg";
import pry5 from "./images/pry5.jpg";
import pry6 from "./images/pry6.jpg";

function App() {
  const [page, setPage] = useState("home");

  const projects = [
    { title: "TaskFlow – Gestor de Tareas", description: "App para organizar tareas con prioridades, etiquetas y autenticación.", img: pry1 },
    { title: "SecurePass – Generador de contraseñas", description: "Generador avanzado y gestor de contraseñas con export cifrado.", img: pry2 },
    { title: "WeatherNow – App del tiempo", description: "Dashboard de clima en tiempo real usando APIs y visualizaciones.", img: pry3 },
    { title: "NetScan – Analizador de redes", description: "Herramienta para inventario de red y detección de dispositivos (prototipo).", img: pry4 },
    { title: "Portfolio v2", description: "Versión mejorada del portfolio con animaciones y experiencia de usuario.", img: pry5 },
    { title: "ShopEasy – Tienda Online", description: "E-commerce demo con carrito, filtros y proceso de compra simulado.", img: pry6 },
  ];

  return (
    <div className="app-container">
      <Header setPage={setPage} />

      <main className="page-wrap">
        {page === "home" && <Main setPage={setPage} />}
        {page === "projects" && <Projects setPage={setPage} projects={projects} />}
        {page === "contact" && <Contact setPage={setPage} />}
        {page === "newsletter" && <Newsletter setPage={setPage} />}
      </main>

      <Footer setPage={setPage} />

      {/* Quick contact floating button */}
      <button className="quick-contact" onClick={() => setPage("contact")} aria-label="Contacto rápido">
        ✉
      </button>
    </div>
  );
}

export default App;
