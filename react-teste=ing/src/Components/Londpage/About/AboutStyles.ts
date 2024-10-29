import styled from 'styled-components';
import { Section as LandingSection } from '../../../Pages/LandingPage/LandingPageStyles';

export const Section = styled(LandingSection)`
  position: relative;
  background-color: #dbd5e0;
  z-index: 2;
  padding: 40px 0; /* Adiciona mais espaço vertical */
  font-family: 'Arial', sans-serif; /* Fonte agradável */
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  z-index: 2;
`;

export const Titulo = styled.h1`
  color: #333;
  font-size: 42px;
  text-align: center;
  font-weight: bold;
  margin-top: 0;
  padding: 20px 0;
  z-index: 2;
  @media (max-width: 991px) {
    font-size: 32px;
  }
`;

export const CardRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 2rem;

  @media (max-width: 48em) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 15px;
  text-align: left;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: calc(30% - 20px);
  margin: 10px;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  h3 {
    font-size: 18px;
    color: #333;
    margin-bottom: 8px;
    transition: color 0.3s ease;

    &:hover {
      color: #eb832e;
    }
  }

  p {
    color: #666;
    line-height: 1.5;
    font-size: 14px;
  }

  @media (max-width: 64em) {
    width: calc(45% - 20px);
  }

  @media (max-width: 48em) {
    width: 90%; /* Ajusta a largura do card para 90% da tela em dispositivos móveis */
    margin: 10px auto; /* Centraliza o card horizontalmente */
    text-align: center; /* Centraliza o texto no card */
  }
`;