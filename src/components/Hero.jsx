import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-placeholder"></div>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="fade-in">Deje que el cambio<br/>sea su ventaja.</h1>
        <p className="fade-in delay-1">Construimos el núcleo digital que transforma empresas y acelera el crecimiento en la era de la inteligencia artificial.</p>
        <a href="#services" className="btn-corporate fade-in delay-2">
          Descubra nuestras capacidades
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
