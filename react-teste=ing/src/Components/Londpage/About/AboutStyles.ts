import styled from 'styled-components';
import { Section as LandingSection } from '../../../Pages/LandingPage/LandingPageStyles';

export const Section = styled(LandingSection)`
  position: relative;
  background-color: #dbd5e0;
  z-index: 2;
  padding: 0 0;
  font-family: 'Arial', sans-serif;

  @media (max-width: 991px) {
    padding: 20px 0;
  }

  @media (max-width: 768px) {
    padding: 15px 0;
  }
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  z-index: 2;

  @media (max-width: 991px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const Titulo = styled.h1`
  color: #6A0DAD;
  font-size: 28px;
  text-align: center;
  font-weight: bold;
  margin-top: 0;
  padding: 15px 0;
  z-index: 2;

  @media (max-width: 991px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

export const Subtitulo = styled.h2`
  color: #333;
  font-size: 18px;
  text-align: center;
  font-weight: normal;
  margin-top: 0;
  padding: 10px 0;
  z-index: 2;

  @media (max-width: 991px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const CardRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 1.5rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 12px; /* Aumentar arredondamento dos cantos */
  padding: 10px; /* Reduzir padding */
  text-align: center; /* Centralizar texto */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Sombra mais sutil */
  transition: transform 0.3s ease, border 0.3s ease;
  width: calc(100% - 20px); /* Ajustar largura dos cards */
  margin: 10px auto;

  &:hover {
    transform: scale(1.05); /* Efeito de hover */
    border: 2px solid #FF914D; /* Destaque na borda */
  }

  img {
    width: 100%;
    border-radius: 12px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  h3 {
    font-size: 18px; /* Ajustar tamanho da fonte */
    color: #6A0DAD; /* Cor do título */
    margin-bottom: 8px;
    transition: color 0.3s ease;

    &:hover {
      color: #FF914D;
    }

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (max-width: 576px) {
      font-size: 14px;
    }
  }

  p {
    color: #666;
    line-height: 1.5;
    font-size: 14px; /* Ajustar tamanho da fonte */

    @media (max-width: 768px) {
      font-size: 12px;
    }

    @media (max-width: 576px) {
      font-size: 10px;
    }
  }
`;