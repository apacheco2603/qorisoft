import React from 'react';

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title fade-in">Casos de Éxito</h2>
        <div className="portfolio-grid">
          
          <div className="portfolio-card fade-in delay-1">
            <div className="portfolio-img-placeholder">
              <span>[Imagen QoriRest Dashboard]</span>
            </div>
            <div className="portfolio-content">
              <span className="portfolio-tag">SaaS Restaurantes</span>
              <h3>QoriRest POS & Management</h3>
              <p>Sistema integral en la nube para la gestión de restaurantes. Incluye facturación electrónica, control de inventario en tiempo real y comandas móviles.</p>
              <a href="#" className="portfolio-link">Ver Caso de Estudio <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            </div>
          </div>

          <div className="portfolio-card fade-in delay-2">
            <div className="portfolio-img-placeholder">
              <span>[Imagen Software Logístico]</span>
            </div>
            <div className="portfolio-content">
              <span className="portfolio-tag">Enterprise / A Medida</span>
              <h3>Plataforma de Logística Cloud</h3>
              <p>Desarrollo a medida de un ERP logístico con rastreo GPS, optimización de rutas mediante algoritmos propios y un panel administrativo de alto rendimiento.</p>
              <a href="#" className="portfolio-link">Ver Caso de Estudio <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
