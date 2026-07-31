import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <div className="logo-placeholder">QORISOFT</div>
          <div className="footer-links-grid">
            <div>
              <h4>Acerca de Qorisoft</h4>
              <a href="#">Liderazgo</a>
              <a href="#">Nuestra Propuesta</a>
            </div>
            <div>
              <h4>Capacidades</h4>
              <a href="#">Desarrollo de Software</a>
              <a href="#">Consultoría IT</a>
            </div>
            <div>
              <h4>Síganos</h4>
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Qorisoft. Todos los derechos reservados.</p>
          <div className="legal-links">
            <a href="#">Privacidad</a>
            <a href="#">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
