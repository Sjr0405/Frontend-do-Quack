import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Vector from './Vector'; 

// Estiliza o contêiner do SVG
const VectorContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  overflow: hidden;

  svg {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 48em) {
    left: 1rem;
  }
`;

// Animação de bounce para a bola
const Bounce = keyframes`
  from { transform: translateX(-50%) scale(0.5); }
  to { transform: translateX(-50%) scale(1); }
`;

// Estiliza a bola que se move ao longo do SVG
const Ball = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.text};
  animation: ${Bounce} 0.5s linear infinite alternate;

  @media (max-width: 48em) {
    left: 1rem;
  }
`;

const DrawSvg: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null); // Referência para o contêiner do SVG
  const ballRef = useRef<HTMLDivElement>(null); // Referência para a bola

  gsap.registerPlugin(ScrollTrigger); // Registra o plugin ScrollTrigger do GSAP

  useLayoutEffect(() => {
    let element = ref.current;
    let svg = document.getElementsByClassName("svg-path")[0] as SVGPathElement;
    const length = svg.getTotalLength(); // Obtém o comprimento total do caminho SVG

    // Define o comprimento do traçado do SVG
    svg.style.strokeDasharray = `${length}`;
    // Oculta o traçado do SVG antes do scroll
    svg.style.strokeDashoffset = `${length}`;

    // Cria uma linha do tempo do GSAP para animar o traçado do SVG
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: element, // Elemento que aciona a animação
        start: "top center", // Início da animação
        end: "bottom bottom", // Fim da animação
        onUpdate: (self) => {
          const draw = length * self.progress; // Calcula o progresso do traçado
          svg.style.strokeDashoffset = `${length - draw}`; // Atualiza o traçado do SVG

          // Atualiza a posição da bola para alinhar com os itens do roadmap
          if (ballRef.current) {
            const ballPosition = self.progress * length;
            ballRef.current.style.top = `${ballPosition}px`;
          }
        },
        onToggle: (self) => {
          if (self.isActive) {
            if (ballRef.current) ballRef.current.style.display = 'none'; // Oculta a bola quando a animação está ativa
          } else {
            if (ballRef.current) ballRef.current.style.display = 'inline-block'; // Mostra a bola quando a animação não está ativa
          }
        }
      }
    });

    return () => {
      if (t1) t1.kill(); // Limpa a linha do tempo quando o componente é desmontado
    };
  }, []);

  return (
    <>
      <Ball ref={ballRef} />
      <VectorContainer ref={ref}>
        <Vector />
      </VectorContainer>
    </>
  );
};

export default DrawSvg;