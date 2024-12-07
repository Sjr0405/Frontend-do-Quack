import styled from 'styled-components';
import { Section as LandingSection } from '../../../Pages/LandingPage/LandingPageStyles';

export const Section = styled(LandingSection)`
  position: relative;
  background-color: #dbd5e0;
  z-index: 2;
  padding: 0 0; /* Ajuste no padding vertical */
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
  padding: 0 30px; /* Ajuste no padding */
  z-index: 2;

  @media (max-width: 991px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const Titulo = styled.h1`
  color: #333;
  font-size: 36px; /* Diminuir o tamanho da fonte */
  text-align: center;
  font-weight: bold;
  margin-top: 0;
  padding: 15px 0; /* Ajuste no padding */
  z-index: 2;

  @media (max-width: 991px) {
    font-size: 28px; /* Diminuir o tamanho da fonte para telas menores */
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

export const CardRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 1.5rem; /* Ajuste na margem superior */

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
    font-size: 16px; /* Diminuir o tamanho da fonte */
    color: #333;
    margin-bottom: 8px;
    transition: color 0.3s ease;

    &:hover {
      color: #eb832e;
    }

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 576px) {
      font-size: 12px;
    }
  }

  p {
    color: #666;
    line-height: 1.5;
    font-size: 13px; /* Diminuir o tamanho da fonte */

    @media (max-width: 768px) {
      font-size: 12px;
    }

    @media (max-width: 576px) {
      font-size: 11px;
    }
  }

  @media (max-width: 64em) {
    width: calc(45% - 20px);
  }

  @media (max-width: 48em) {
    width: 90%;
    margin: 10px auto;
    text-align: center;
  }
`;