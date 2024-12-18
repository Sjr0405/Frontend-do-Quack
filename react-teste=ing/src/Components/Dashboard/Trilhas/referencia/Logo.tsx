import React from 'react';
import styled from "styled-components";
import LogoSvg from '../../../../Assets/Logo.svg';

// Estilos
const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const LogoImage = styled.img`
  margin-right: 10px; /* Espaçamento entre a imagem e o texto */
`;

const LogoText = styled.span`
  font-size: 24px;
  font-weight: bold; 
  color: #FF914D;
`;

// Componente
const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <LogoImage src={LogoSvg} alt="Logo" />
      <LogoText>Quack()</LogoText>
    </LogoContainer>
  );
};

export default Logo;