import React, { useRef, useState } from 'react';

const TiltCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    setGlareStyle({
      opacity: 1,
      background: `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(226, 188, 87, 0.25) 0%, rgba(255, 255, 255, 0.05) 30%, transparent 60%)`,
      transition: 'none'
    });
  };

  const handleMouseLeave = () => {
    setGlareStyle({
      opacity: 0,
      transition: 'opacity 0.5s ease'
    });
  };

  return (
    <div 
      ref={cardRef}
      className={className}
      style={{ ...style, transformStyle: 'preserve-3d', willChange: 'transform', position: 'relative' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          pointerEvents: 'none',
          zIndex: 10,
          mixBlendMode: 'screen',
          ...glareStyle
        }} 
      />
      {children}
    </div>
  );
};

export default TiltCard;
