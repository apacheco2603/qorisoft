import React from 'react';
import Hero3DModel from './Hero3DModel';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-ambient-glow" />
      <Hero3DModel />
      <div className="container hero-content" style={{ position: 'relative', zIndex: 10, pointerEvents: 'none', maxWidth: '1200px', width: '100%', userSelect: 'none' }}>
        <h1 className="fade-in" style={{ pointerEvents: 'auto', textAlign: 'left', marginBottom: '2rem' }}>Software<br/>del <span className="violet-gradient-text">Futuro</span> para<br/>Tu Empresa.</h1>
        
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
          <p className="fade-in delay-1" style={{ pointerEvents: 'auto', textAlign: 'right', maxWidth: '600px', margin: 0 }}>
            En <strong>QoriSoft</strong> diseñamos y desarrollamos soluciones tecnológicas de alto rendimiento: software a medida, aplicaciones móviles, sistemas integrales para restaurantes, desarrollo web avanzado y consultoría en la nube.
          </p>
        </div>

        <div className="hero-stats fade-in delay-2" style={{ display: 'flex', justifyContent: 'flex-start', gap: '4rem', pointerEvents: 'auto', marginTop: '5rem' }}>
          <div className="stat-item">
            <h2 className="gold-gradient-text" style={{ fontSize: '3.5rem', margin: 0, lineHeight: 1 }}>+45</h2>
            <p style={{ margin: '0.5rem 0 0 0', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Proyectos Entregados</p>
          </div>
          <div className="stat-item">
            <h2 className="gold-gradient-text" style={{ fontSize: '3.5rem', margin: 0, lineHeight: 1 }}>99%</h2>
            <p style={{ margin: '0.5rem 0 0 0', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Satisfacción B2B</p>
          </div>
          <div className="stat-item">
            <h2 className="gold-gradient-text" style={{ fontSize: '3.5rem', margin: 0, lineHeight: 1 }}>10+</h2>
            <p style={{ margin: '0.5rem 0 0 0', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Años de Experiencia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
