import React from 'react';
import styled from 'styled-components';

interface WaveProps {
  topColor: string;
  bottomColor: string;
}

const WaveContainer = styled.div`
  background-color: ${(props: { bottomColor: string }) => props.bottomColor};
  overflow: hidden;
  margin: -10px;
  padding: 0;
  line-height: 0;
`;

const WaveSVG = styled.svg`
  display: block;
  width: 100%;
  height: 100px; /* Altura padrão para telas pequenas */
  padding: 0;

  @media (min-width: 480px) {
    height: 150px; /* Telas pequenas */
  }
  @media (min-width: 768px) {
    height: 200px; /* Telas médias */
  }
  @media (min-width: 1024px) {
    height: 250px; /* Telas grandes */
  }
  @media (min-width: 1200px) {
    height: 300px; /* Telas extra grandes */
  }
  @media (min-width: 1600px) {
    height: 400px; /* Telas Full HD */
  }
`;

const Wave: React.FC<WaveProps> = ({ topColor, bottomColor }) => {
  return (
    <WaveContainer bottomColor={bottomColor}>
      <WaveSVG viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill={topColor}
          d="M0,64L48,85.3C96,107,192,149,288,176C384,203,480,213,576,192C672,171,768,117,864,117.3C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </WaveSVG>
    </WaveContainer>
  );
};

export default Wave;