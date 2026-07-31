import React, { useState } from 'react';

const FlipCard = ({ frontContent, backContent, className = '', frontStyle = {}, backStyle = {} }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`flip-card-wrapper ${className}`} 
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{ perspective: '1000px', backgroundColor: 'transparent', minHeight: '400px' }}
    >
      <div 
        className="flip-card-inner" 
        style={{ 
          position: 'relative',
          width: '100%',
          height: '100%',
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        <div 
          className="flip-card-front" 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            backgroundColor: 'var(--surface-color)',
            border: '1px solid var(--surface-border)',
            borderRadius: '12px',
            overflow: 'hidden',
            ...frontStyle
          }}
        >
          {frontContent}
        </div>
        <div 
          className="flip-card-back" 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundColor: '#111',
            border: '1px solid var(--accent-color)',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '30px',
            textAlign: 'center',
            ...backStyle
          }}
        >
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
