import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container contact-container fade-in">
        <div className="contact-info">
          <h2>Inicia tu Proyecto con QoriSoft</h2>
          <p>Déjanos un mensaje con los detalles de tu proyecto o necesidades empresariales. Nuestro equipo técnico se pondrá en contacto contigo en menos de 24 horas para agendar una consultoría gratuita.</p>
          
          <div className="contact-details">
            <div className="contact-detail-item">
              <span className="contact-detail-title">Correo Corporativo</span>
              <span>contacto@qorisoft.com</span>
            </div>
            <div className="contact-detail-item">
              <span className="contact-detail-title">Horario de Atención</span>
              <span>Lunes a Sábado, 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Nombre Completo</label>
              <input type="text" placeholder="Ej. Carlos Mendoza" required />
            </div>
            
            <div className="form-group">
              <label>Correo Electrónico</label>
              <input type="email" placeholder="ejemplo@tuempresa.com" required />
            </div>
            
            <div className="form-group">
              <label>Empresa (Opcional)</label>
              <input type="text" placeholder="Nombre de tu empresa" />
            </div>

            <div className="form-group">
              <label>Cuéntanos sobre tu proyecto</label>
              <textarea rows="4" placeholder="Requerimientos, objetivos, presupuesto estimado..." required></textarea>
            </div>

            <button type="submit" className="btn-corporate" style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}>
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
