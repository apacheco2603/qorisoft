import React from 'react';

const ValueProp = () => {
  return (
    <section className="value-prop" id="about">
      <div className="container">
        <div className="value-content fade-in">
          <h2>Impulsando la Transformación Digital en QoriSoft.</h2>
          <p>
            Fundada por ingenieros en software apasionados por la tecnología moderna, <strong>QoriSoft</strong> nació para ofrecer desarrollo de código limpio, arquitecturas escalables y soluciones comerciales ágiles para empresas de todos los tamaños.
          </p>
          <p style={{ marginTop: '-1.5rem', marginBottom: '3rem' }}>
            Nuestro compromiso es combinar un diseño visual impecable con una ingeniería robusta para que cada producto que construimos sea rápido, seguro y genere resultados reales de negocio.
          </p>
          <a href="#contact" className="btn-corporate outline">
            Contactar con los Fundadores
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
