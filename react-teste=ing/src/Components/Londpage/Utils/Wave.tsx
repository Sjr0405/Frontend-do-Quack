// Wave.tsx
import React from 'react';

interface WaveProps {
  topColor: string;
  bottomColor: string;
}


const Wave: React.FC<WaveProps> = ({ topColor, bottomColor }) => {
    return (
      <div style={{ backgroundColor: bottomColor, overflow: 'hidden', margin: 0, padding: 0 }}>
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: 'auto', margin: 0, padding: 0 }}
        >
          <path
            fill={topColor}
            d="M0,64L48,85.3C96,107,192,149,288,176C384,203,480,213,576,192C672,171,768,117,864,117.3C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
  };
  
  
export default Wave;