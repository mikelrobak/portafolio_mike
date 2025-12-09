import React, { useState, useEffect } from 'react';

const Loading = () => {
  const [dots, setDots] = useState('');
  const [loadingText, setLoadingText] = useState('Cargando DigitalEvolution');

  useEffect(() => {
    // Animación de puntos
    const dotsInterval = setInterval(() => {
      setDots(prev => {
        if (prev.length >= 3) return '';
        return prev + '.';
      });
    }, 300);

    // Cambiar textos de carga
    const texts = [
      'Cargando DigitalEvolution',
      'Inicializando componentes',
      'Preparando experiencia',
      'Casi listo...'
    ];
    
    let textIndex = 0;
    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % texts.length;
      setLoadingText(texts[textIndex]);
    }, 2000);

    return () => {
      clearInterval(dotsInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="loading">
      <div className="loading-container">
        <div className="loading-logo">
          <i className="fas fa-code fa-spin"></i>
        </div>
        
        <div className="loading-content">
          <h2>DigitalEvolution S.A</h2>
          <div className="loading-text">
            {loadingText}{dots}
          </div>
          
          <div className="loading-progress">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
          
          <div className="loading-tips">
            <p><i className="fas fa-lightbulb"></i> Consejo: Visita nuestro portafolio para ver nuestros proyectos</p>
          </div>
        </div>
        
        <div className="loading-footer">
          <p>Desarrollado con React para ASIX</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;