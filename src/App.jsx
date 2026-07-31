import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Team from './components/Team';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Estimator from './components/Estimator';
import ValueProp from './components/ValueProp';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <svg style={{ height: 0, width: 0, position: 'absolute', pointerEvents: 'none' }} aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B6615" />
            <stop offset="50%" stopColor="#FFE985" />
            <stop offset="100%" stopColor="#8B6615" />
          </linearGradient>
        </defs>
      </svg>
      <Navbar />
      <Hero />
      <TechStack />
      <Team />
      <Services />
      <Portfolio />
      <Estimator />
      <ValueProp />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
