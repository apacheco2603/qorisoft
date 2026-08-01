import React from 'react';
import FlipCard from './FlipCard';

const Team = () => {
  return (
    <section id="equipo" className="team-section">
      <div className="container">
        <div className="section-header text-center fade-in">
          <span className="badge">LIDERAZGO TÉCNICO</span>
          <h2 className="section-title">Fundada por Ingenieros de Software</h2>
          <p className="section-subtitle">
            Un equipo con profunda experiencia técnica, dedicado a construir 
            soluciones que transforman industrias complejas.
          </p>
        </div>

        <div className="team-grid">
          
          <FlipCard 
            className="fade-in delay-1"
            frontContent={
              <>
                <div className="team-image-placeholder" style={{ backgroundColor: '#111' }}>
                  <img 
                    src="/alejandro_pacheco.jpg" 
                    alt="Ing. Alejandro Pacheco" 
                    style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '8px' }}
                  />
                </div>
                <div className="team-info">
                  <h3>Ing. Alejandro Pacheco</h3>
                  <span className="team-role">CEO & Lead Software Engineer</span>
                </div>
              </>
            }
            backContent={
              <>
                <h4 className="gold-gradient-text" style={{ marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>Visión Estratégica</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '25px', lineHeight: '1.6' }}>
                  Experto en arquitecturas de alta disponibilidad y soluciones Cloud B2B. Lidero el desarrollo de ecosistemas escalables enfocados en conversión y rendimiento.
                </p>
                <a href="#" className="team-social">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Conectar en LinkedIn
                </a>
              </>
            }
          />

          <FlipCard 
            className="fade-in delay-2"
            frontContent={
              <>
                <div className="team-image-placeholder" style={{ backgroundColor: '#111' }}>
                  <img 
                    src="/franco_gutierrez.jpg" 
                    alt="Ing. Franco Gutiérrez" 
                    style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '8px' }}
                  />
                </div>
                <div className="team-info">
                  <h3>Ing. Franco Gutiérrez</h3>
                  <span className="team-role">CTO & Cloud Architect</span>
                </div>
              </>
            }
            backContent={
              <>
                <h4 className="gold-gradient-text" style={{ marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>Innovación Técnica</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '25px', lineHeight: '1.6' }}>
                  Especialista en modernización de infraestructuras, DevOps y seguridad. Mi enfoque es asegurar que cada línea de código aporte valor y resiliencia al sistema.
                </p>
                <a href="#" className="team-social">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Conectar en LinkedIn
                </a>
              </>
            }
          />

        </div>
      </div>
    </section>
  );
};

export default Team;
