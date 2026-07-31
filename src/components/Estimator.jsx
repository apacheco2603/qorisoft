import React, { useState } from 'react';

const projectTypes = [
  { id: 'web', title: 'Sitio Web / Landing', price: 800, icon: '🌐' },
  { id: 'qorirest', title: 'QoriRest Restaurante', price: 1500, icon: '🍽️' },
  { id: 'custom', title: 'Software a Medida', price: 2500, icon: '💻' },
  { id: 'mobile', title: 'App Móvil (iOS/Android)', price: 3200, icon: '📱' },
];

const projectScopes = [
  { id: 'mvp', title: 'Inicial / MVP', mult: 1.0, time: '2 a 3 semanas', icon: '🌱' },
  { id: 'pro', title: 'Avanzado / Pro', mult: 1.6, time: '4 a 6 semanas', icon: '⚡' },
  { id: 'enterprise', title: 'Enterprise Cloud', mult: 2.5, time: '8 a 12 semanas', icon: '🏢' },
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
                    <div 
                      key={type.id} 
                      className={`calc-opt ${selectedType.id === type.id ? 'selected' : ''}`}
                      onClick={() => setSelectedType(type)}
                    >
                      <div className="calc-opt-icon">{type.icon}</div>
                      <div className="calc-opt-title">{type.title}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scope Selection */}
              <div className="calc-group">
                <label className="calc-label">2. Escala y Funcionalidades</label>
                <div className="calc-options">
                  {projectScopes.map(scope => (
                    <div 
                      key={scope.id} 
                      className={`calc-opt ${selectedScope.id === scope.id ? 'selected' : ''}`}
                      onClick={() => setSelectedScope(scope)}
                    >
                      <div className="calc-opt-icon">{scope.icon}</div>
                      <div className="calc-opt-title">{scope.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Result Panel */}
            <div className="calc-result-box">
              <div className="calc-result-content">
                <span className="result-label">Estimado Aproximado</span>
                <div className="estimate-price">${estimatedPrice.toLocaleString()} USD</div>
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
