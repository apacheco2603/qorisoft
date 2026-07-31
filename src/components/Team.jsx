import React from 'react';

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
          
          <div className="team-card fade-in delay-1">
            <div className="team-image-placeholder">
              {/* Geometric corporate placeholder */}
              <div className="geo-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="geo-icon">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
            <div className="team-info">
              <h3>Ing. Alejandro Pacheco</h3>
              <span className="team-role">CEO & Lead Software Engineer</span>
              <a href="#" className="team-social">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                Conectar
              </a>
            </div>
          </div>

          <div className="team-card fade-in delay-2">
            <div className="team-image-placeholder">
              {/* Geometric corporate placeholder */}
              <div className="geo-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="geo-icon">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
            <div className="team-info">
              <h3>Ing. [Nombre Apellido]</h3>
              <span className="team-role">CTO & Cloud Architect</span>
              <a href="#" className="team-social">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                Conectar
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;
