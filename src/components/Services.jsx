import React from 'react';
import TiltCard from './TiltCard';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title fade-in">Nuestras Capacidades</h2>
        <div className="bento-grid">
          
          <TiltCard className="bento-item bento-large fade-in">
            <div className="bento-content">
              <svg viewBox="0 0 24 24" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" width="48" height="48" style={{ marginBottom: '20px' }}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              <h3>Software a Medida & Cloud</h3>
              <p className="reveal-text">Diseñamos y desarrollamos arquitecturas robustas para misiones críticas: desde ERPs y sistemas logísticos, hasta automatización de procesos empresariales en la nube.</p>
              <a href="#portfolio" className="link-arrow reveal-text">Ver casos de estudio <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            </div>
          </TiltCard>

          <TiltCard className="bento-item fade-in delay-1">
            <div className="bento-content">
              <svg viewBox="0 0 24 24" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" width="40" height="40" style={{ marginBottom: '15px' }}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              <h3>QoriRest (Restaurantes)</h3>
              <p className="reveal-text">Nuestro ecosistema integral de punto de venta, facturación y gestión operativa para llevar tu restaurante al siguiente nivel.</p>
              <a href="#estimador" className="link-arrow reveal-text">Cotizar ahora <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            </div>
          </TiltCard>

          <TiltCard className="bento-item fade-in delay-2">
            <div className="bento-content">
              <svg viewBox="0 0 24 24" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" width="40" height="40" style={{ marginBottom: '15px' }}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              <h3>Apps Móviles & Web</h3>
              <p className="reveal-text">Desarrollo nativo, plataformas web de alto impacto y Landing Pages orientadas 100% a la conversión B2B.</p>
              <a href="#contact" className="link-arrow reveal-text">Agendar consultoría <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            </div>
          </TiltCard>

        </div>
      </div>
    </section>
  );
};

export default Services;
