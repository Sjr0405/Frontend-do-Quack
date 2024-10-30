import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const waveAnimation = keyframes`
  0% {
    d: path("M0,64L48,85.3C96,107,192,149,288,176C384,203,480,213,576,192C672,171,768,117,864,117.3C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z");
  }
  50% {
    d: path("M0,96L48,128C96,160,192,224,288,256C384,288,480,288,576,256C672,224,768,160,864,160C960,160,1056,224,1152,256C1248,288,1344,288,1392,256L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z");
  }
  100% {
    d: path("M0,64L48,85.3C96,107,192,149,288,176C384,203,480,213,576,192C672,171,768,117,864,117.3C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z");
  }
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

  path {
    animation: ${waveAnimation} 10s infinite linear;
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