import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const LogoImage = styled.img`
  margin-right: 10px; /* Espaçamento entre a imagem e o texto */
`;

export const LogoText = styled.span`
  font-size: 24px;
  font-weight: bold; 
  color: #FF914D;
`;