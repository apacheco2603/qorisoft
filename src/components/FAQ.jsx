import React, { useState } from 'react';

const faqs = [
  {
    question: "¿En qué tecnologías desarrollan sus proyectos?",
    answer: "Principalmente utilizamos un stack moderno y escalable: React, Node.js, Python, PostgreSQL y despliegues en AWS o Google Cloud. Sin embargo, nos adaptamos a los requerimientos de tu infraestructura."
  },
  {
    question: "¿Ofrecen soporte y mantenimiento post-lanzamiento?",
    answer: "Absolutamente. Todos nuestros desarrollos incluyen garantía de código. Además, ofrecemos pólizas de mantenimiento continuo para asegurar que tu software esté actualizado y protegido 24/7."
  },
  {
    question: "¿El código fuente nos pertenece?",
    answer: "Sí. Para todos los desarrollos 'A Medida', entregamos el repositorio completo y los derechos de propiedad intelectual al finalizar y liquidar el proyecto."
  },
  {
    question: "¿Cuáles son los tiempos de entrega?",
    answer: "Un MVP (Producto Mínimo Viable) suele tomar de 2 a 3 semanas. Proyectos de nivel Enterprise pueden tomar de 8 a 12 semanas. Siempre establecemos un cronograma transparente desde el primer día."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <h2 className="section-title fade-in">Preguntas Frecuentes</h2>
        <div className="faq-container fade-in delay-1">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(i)}>
                {faq.question}
                <span className="faq-icon">{openIndex === i ? '−' : '+'}</span>
              </button>
              <div className="faq-answer-wrapper">
                <div className="faq-answer">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
