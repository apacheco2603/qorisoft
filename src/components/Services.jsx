import React from 'react';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title fade-in">Nuestras Capacidades</h2>
        <div className="bento-grid">
          
          <div className="bento-item bento-large fade-in">
            <div className="bento-content">
              <h3>Software a Medida & Cloud</h3>
              <p>Diseñamos y desarrollamos arquitecturas robustas para misiones críticas: desde ERPs y sistemas logísticos, hasta automatización de procesos empresariales en la nube.</p>
              <a href="#portfolio" className="link-arrow">Ver casos de estudio <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            </div>
          </div>

          <div className="bento-item fade-in delay-1">
            <div className="bento-content">
              <h3>QoriRest (Restaurantes)</h3>
              <p>Nuestro ecosistema integral de punto de venta, facturación y gestión operativa para llevar tu restaurante al siguiente nivel.</p>
              <a href="#estimador" className="link-arrow">Cotizar ahora <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            </div>
          </div>

          <div className="bento-item fade-in delay-2">
            <div className="bento-content">
              <h3>Apps Móviles & Web</h3>
              <p>Desarrollo nativo, plataformas web de alto impacto y Landing Pages orientadas 100% a la conversión B2B.</p>
              <a href="#contact" className="link-arrow">Agendar consultoría <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
