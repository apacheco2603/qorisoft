import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container nav-container">
        <div className="logo">
          <div className="logo-placeholder">QORISOFT</div>
        </div>
        <nav className={`nav-links ${menuActive ? 'active' : ''}`}>
          <a href="#home" onClick={() => setMenuActive(false)}>INICIO</a>
          <a href="#services" onClick={() => setMenuActive(false)}>CAPACIDADES</a>
          <a href="#about" onClick={() => setMenuActive(false)}>NOSOTROS</a>
          <a href="#contact" onClick={() => setMenuActive(false)}>CONTACTO</a>
        </nav>
        <div className={`hamburger ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
