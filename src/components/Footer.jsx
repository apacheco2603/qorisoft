import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <div className="logo-placeholder">QORISOFT</div>
          <div className="footer-links-grid">
            <div>
              <h4>Navegación</h4>
              <a href="#home">Inicio</a>
              <a href="#services">Capacidades</a>
              <a href="#about">Sobre Nosotros</a>
            </div>
            <div>
              <h4>Soluciones</h4>
              <a href="#">Desarrollo a Medida</a>
              <a href="#">QoriRest Restaurantes</a>
              <a href="#">Desarrollo Web Pro</a>
              <a href="#">Consultoría IT & Cloud</a>
            </div>
            <div>
              <h4>Contacto Oficial</h4>
              <a href="#">qorisoft.com</a>
              <a href="mailto:contacto@qorisoft.com">contacto@qorisoft.com</a>
              <a href="#">Lunes a Sábado</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 QoriSoft Technologies (qorisoft.com). Todos los derechos reservados.</p>
          <div className="legal-links">
            <a href="#">Términos y Condiciones</a>
            <a href="#">Política de Privacidad</a>
            <a href="#">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
