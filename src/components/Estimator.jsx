import React, { useState } from 'react';
import TiltCard from './TiltCard';

const projectTypes = [
  { id: 'web', title: 'Sitio Web / Landing', price: 800, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
  { id: 'qorirest', title: 'QoriRest Restaurante', price: 1500, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg> },
  { id: 'custom', title: 'Software a Medida', price: 2500, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
  { id: 'mobile', title: 'App Móvil (iOS/Android)', price: 3200, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="3" ry="3"/><line x1="12" y1="19" x2="12.01" y2="19"/><rect x="7" y="6" width="10" height="6" rx="1"/><line x1="7" y1="14" x2="17" y2="14"/><line x1="7" y1="16" x2="13" y2="16"/></svg> },
];

const projectScopes = [
  { id: 'mvp', title: 'Inicial / MVP', mult: 1.0, time: '2 a 3 semanas', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
  { id: 'pro', title: 'Avanzado / Pro', mult: 1.6, time: '4 a 6 semanas', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  { id: 'enterprise', title: 'Enterprise Cloud', mult: 2.5, time: '8 a 12 semanas', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5Z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg> },
];

const Estimator = () => {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [selectedScope, setSelectedScope] = useState(projectScopes[0]);

  const estimatedPrice = Math.round(selectedType.price * selectedScope.mult);

  return (
    <section className="estimator" id="estimador">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title fade-in">Estimador de Proyectos</h2>
          <p className="fade-in delay-1" style={{ margin: '0 auto', maxWidth: '800px' }}>
            Selecciona el tipo de solución y la escala de tu proyecto para obtener una estimación aproximada de inversión y tiempo de desarrollo.
          </p>
        </div>

        <div className="calc-card fade-in delay-2">
          <div className="calc-grid">
            
            <div className="calc-options-container">
              {/* Type Selection */}
              <div className="calc-group">
                <label className="calc-label">1. ¿Qué tipo de software necesitas?</label>
                <div className="calc-options">
                  {projectTypes.map(type => (
                    <TiltCard 
                      key={type.id} 
                      className={`calc-opt ${selectedType.id === type.id ? 'selected' : ''}`}
                    >
                      <div onClick={() => setSelectedType(type)} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className="calc-opt-icon">{type.icon}</div>
                        <div className="calc-opt-title">{type.title}</div>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </div>

              {/* Scope Selection */}
              <div className="calc-group">
                <label className="calc-label">2. Escala y Funcionalidades</label>
                <div className="calc-options">
                  {projectScopes.map(scope => (
                    <TiltCard 
                      key={scope.id} 
                      className={`calc-opt ${selectedScope.id === scope.id ? 'selected' : ''}`}
                    >
                      <div onClick={() => setSelectedScope(scope)} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className="calc-opt-icon">{scope.icon}</div>
                        <div className="calc-opt-title">{scope.title}</div>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </div>
            </div>

            {/* Result Panel */}
            <div className="calc-result-box">
              <div className="calc-result-content">
                <span className="result-label">Estimado Aproximado</span>
                <div className="estimate-price">S/ {estimatedPrice.toLocaleString()}</div>
                <div className="estimate-time">Tiempo aprox: {selectedScope.time}</div>
                <p className="result-note">*Incluye garantía de código, despliegue en servidor y capacitación.</p>
              </div>

              <a href="#contact" className="btn-corporate" style={{ width: '100%', justifyContent: 'center' }}>
                Iniciar Proyecto
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Estimator;
