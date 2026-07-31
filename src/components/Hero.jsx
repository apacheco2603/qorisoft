import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-placeholder"></div>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="fade-in">Creamos el Software<br/>del Futuro para<br/>Tu Empresa.</h1>
        <p className="fade-in delay-1">
          En <strong>QoriSoft</strong> diseñamos y desarrollamos soluciones tecnológicas de alto rendimiento: software a medida, aplicaciones móviles, sistemas integrales para restaurantes, desarrollo web avanzado y consultoría en la nube.
        </p>
        <a href="#services" className="btn-corporate fade-in delay-2">
          Solicitar Cotización Sin Compromiso
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
