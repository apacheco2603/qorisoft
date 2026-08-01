import React from 'react';

const ValueProp = () => {
  return (
    <section className="value-prop" id="about">
      <div className="container">
        <div className="value-content fade-in">
          <h2>UNA VISIÓN COMPARTIDA PARA TRANSFORMAR IDEAS EN TECNOLOGÍA.</h2>
          <p>
            <strong>QoriSoft</strong> nació a partir de una visión en común: ayudar a empresas y emprendedores a aprovechar la tecnología para resolver problemas reales y alcanzar nuevos objetivos.
          </p>
          <p>
            Como ingenieros apasionados por el software, decidimos unir nuestra experiencia y creatividad para construir soluciones digitales de calidad, combinando buenas prácticas de ingeniería con un enfoque centrado en las personas.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            Nuestro objetivo es simple: crear tecnología que impulse el crecimiento de nuestros clientes.
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
