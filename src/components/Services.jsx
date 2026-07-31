import React from 'react';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title fade-in">Nuestras Capacidades</h2>
        <div className="bento-grid">
          
          <div className="bento-item bento-large fade-in">
            <div className="bento-content">
              <h3>Desarrollo Web & Plataformas</h3>
              <p>Arquitecturas robustas y escalables diseñadas para misiones críticas y alto rendimiento corporativo.</p>
              <a href="#contact" className="link-arrow">Conocer más <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            </div>
          </div>

          <div className="bento-item fade-in delay-1">
            <div className="bento-content">
              <h3>Apps Móviles</h3>
              <p>Experiencias nativas e híbridas que conectan a sus usuarios dondequiera que estén.</p>
              <a href="#contact" className="link-arrow">Conocer más <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            </div>
          </div>

          <div className="bento-item fade-in delay-2">
            <div className="bento-content">
              <h3>Análisis de Datos</h3>
              <p>Insights precisos basados en datos para la toma de decisiones estratégicas.</p>
              <a href="#contact" className="link-arrow">Conocer más <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
