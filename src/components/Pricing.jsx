import React, { useState } from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('project'); // 'project' or 'recurrent'
  const [expandedFeatures, setExpandedFeatures] = useState(false);

  const plans = [
    {
      id: 'startup',
      name: 'Startup & MVP',
      badge: 'Lanzamiento Rápido',
      description: 'Ideal para validar ideas de negocio, landing pages de alta conversión y prototipos funcionales.',
      priceProject: '$990',
      priceRecurrent: '$290/mes',
      periodProject: 'Pago único por proyecto',
      periodRecurrent: 'Soporte y mantenimiento continuo',
      highlighted: false,
      features: [
        'Diseño UI/UX de Alto Impacto',
        'Desarrollo Web Responsive',
        'Integración con Redes y WhatsApp',
        'Optimización SEO y Velocidad',
        'Entrega en 10-15 Días Háviles',
        'Soporte Técnico de 30 Días'
      ]
    },
    {
      id: 'growth',
      name: 'Plataforma & SaaS',
      badge: 'MÁS POPULAR',
      description: 'Soluciones digitales avanzadas: aplicaciones web, dashboards de gestión y sistemas para restaurantes.',
      priceProject: '$2,490',
      priceRecurrent: '$690/mes',
      periodProject: 'Pago único por proyecto',
      periodRecurrent: 'Mantenimiento + Evolutivos continuos',
      highlighted: true,
      features: [
        'Todo lo del Plan Startup',
        'Panel de Administración a Medida',
        'Autenticación y Roles de Usuario',
        'Integración de Pasarelas de Pago',
        'Base de Datos Cloud Escalable',
        'Módulos de Reportes y Analítica',
        'Soporte Prioritario 24/7'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise & AI',
      badge: 'A MEDIDA',
      description: 'Infraestructura Cloud de alto rendimiento, microservicios, integración con IA y desarrollo móvil nativo.',
      priceProject: '$4,990+',
      priceRecurrent: '$1,490/mes',
      periodProject: 'Pago a medida según arquitectura',
      periodRecurrent: 'Equipo dedicado & DevOps',
      highlighted: false,
      features: [
        'Arquitectura de Microservicios Cloud',
        'Apps Móviles (iOS y Android)',
        'Integración de Modelos de IA (Gemini/OpenAI)',
        'Alta Disponibilidad y Seguridad Auditada',
        'Migración y Gestión AWS / Google Cloud',
        'Desarrolladores Dedicados',
        'Acuerdo de Nivel de Servicio (SLA 99.9%)'
      ]
    }
  ];

  const handleSelectPlan = (planName) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pricing-section" id="pricing" style={{ padding: '120px 0', backgroundColor: '#000000', position: 'relative', overflow: 'hidden' }}>
      {/* Background Ambient Glow */}
      <div className="pricing-ambient-glow" style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '750px',
        height: '750px',
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(126, 34, 206, 0.08) 50%, transparent 75%)',
        filter: 'blur(100px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header fade-in" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="badge">TABLA DE INVERSIÓN</span>
          <h2 className="section-title">Planes y <span className="gold-gradient-text">Servicios</span></h2>
          <p className="section-subtitle">
            Transparencia y flexibilidad. Selecciona la modalidad que mejor se adapte al crecimiento de tu empresa.
          </p>

          {/* Toggle Switch */}
          <div className="pricing-toggle-wrapper" style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'var(--surface-color)',
            border: '1px solid var(--surface-border)',
            padding: '6px',
            borderRadius: '40px',
            marginTop: '30px',
            gap: '8px',
            boxShadow: '0 0 20px rgba(168, 85, 247, 0.15)'
          }}>
            <button
              onClick={() => setBillingCycle('project')}
              style={{
                background: billingCycle === 'project' ? 'var(--accent-gradient)' : 'transparent',
                color: billingCycle === 'project' ? '#000000' : 'var(--text-secondary)',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '30px',
                fontWeight: '700',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              Proyecto Llave en Mano
            </button>
            <button
              onClick={() => setBillingCycle('recurrent')}
              style={{
                background: billingCycle === 'recurrent' ? 'var(--accent-gradient)' : 'transparent',
                color: billingCycle === 'recurrent' ? '#000000' : 'var(--text-secondary)',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '30px',
                fontWeight: '700',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Suscripción & Soporte
              <span style={{
                background: 'rgba(168, 85, 247, 0.3)',
                color: '#d8b4fe',
                fontSize: '0.75rem',
                padding: '2px 8px',
                borderRadius: '12px',
                fontWeight: '800'
              }}>AHORRA 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid fade-in delay-1" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '35px',
          alignItems: 'stretch'
        }}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
              style={{
                backgroundColor: 'var(--surface-color)',
                border: plan.highlighted ? '2px solid #FFE985' : '1px solid var(--surface-border)',
                borderRadius: '16px',
                padding: '40px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: plan.highlighted 
                  ? '0 12px 40px rgba(168, 85, 247, 0.35), inset 0 0 20px rgba(255, 233, 133, 0.1)' 
                  : '0 4px 20px rgba(0, 0, 0, 0.5)',
                transform: plan.highlighted ? 'scale(1.03)' : 'none',
                zIndex: plan.highlighted ? 3 : 1
              }}
            >
              {plan.highlighted && (
                <div style={{
                  position: 'absolute',
                  top: '-16px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--accent-gradient)',
                  color: '#000000',
                  padding: '6px 20px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '900',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 15px rgba(255, 233, 133, 0.4)'
                }}>
                  {plan.badge}
                </div>
              )}

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                  <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', margin: 0 }}>{plan.name}</h3>
                  {!plan.highlighted && (
                    <span className="portfolio-tag" style={{ margin: 0 }}>{plan.badge}</span>
                  )}
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', minHeight: '50px', marginBottom: '25px', lineHeight: '1.6' }}>
                  {plan.description}
                </p>

                {/* Price Display with Animation */}
                <div className="price-box" style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  padding: '20px',
                  marginBottom: '30px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}>
                  <div className="gold-gradient-text" style={{ fontSize: '3rem', fontWeight: '900', lineHeight: 1 }}>
                    {billingCycle === 'project' ? plan.priceProject : plan.priceRecurrent}
                  </div>
                  <span style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {billingCycle === 'project' ? plan.periodProject : plan.periodRecurrent}
                  </span>
                </div>

                {/* Features List */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 35px 0' }}>
                  {plan.features.map((feature, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      marginBottom: '14px'
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: plan.highlighted ? '#FFE985' : '#c084fc', flexShrink: 0 }}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleSelectPlan(plan.name)}
                className={`btn-corporate ${!plan.highlighted ? 'outline' : ''}`}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Cotizar {plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* Feature Comparison Footer / SLA guarantee */}
        <div className="pricing-guarantee fade-in delay-2" style={{
          marginTop: '60px',
          textAlign: 'center',
          background: 'rgba(168, 85, 247, 0.05)',
          border: '1px solid rgba(168, 85, 247, 0.2)',
          borderRadius: '16px',
          padding: '30px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              background: 'rgba(168, 85, 247, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(168, 85, 247, 0.4)'
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--text-primary)' }}>Garantía de Código Propio</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Propiedad intelectual 100% transferida a tu empresa</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              background: 'rgba(255, 233, 133, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 233, 133, 0.4)'
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFE985" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--text-primary)' }}>Tiempos de Entrega Garantizados</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Desarrollo ágil por sprints comprobables</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
