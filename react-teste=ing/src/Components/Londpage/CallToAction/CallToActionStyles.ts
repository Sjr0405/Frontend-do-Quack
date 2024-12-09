import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background: #ff7300;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  position: relative;
  z-index: 0;
  overflow: visible;
  margin: 0 auto;


  @media (max-width: 991px) {
    flex-direction: column; 
  }

  @media (max-width: 768px) {
    padding: 30px 10px;
  }
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: transparent;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  padding: 20px; /* Ajuste de espaçamento */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  z-index: 2;
  padding: 20px; /* Ajuste de espaçamento */

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 48px;
  line-height: 1.2;
  font-weight: bold;
  margin-bottom: 30px; /* Ajuste de espaçamento */
  z-index: 2;
  @media (max-width: 991px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  color: #000;
  margin-bottom: 30px; /* Ajuste de espaçamento */
  z-index: 2;
  @media (max-width: 991px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ImageRight = styled.div`
  position: absolute;
  bottom: -50px; /* Ajuste conforme necessário para ultrapassar a seção */
  right: -50px; /* Ajuste conforme necessário para ultrapassar a seção */
  z-index: 5; /* Maior que o z-index dos outros elementos */
  overflow: visible;

  img {
    width: 100%;
    max-width: 300px; /* Ajuste conforme necessário */
    height: auto;
    margin-right: 100px; /* Ajuste conforme necessário */
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25)); /* Sombra nos pés do pato */
  }

  @media (max-width: 991px) {
    display: none;
  }
`;

export const Button = styled.button`
  color: #fff;
  background-color: #8e44ad; /* Cor do botão ajustada */
  font-size: 18px;
  border-radius: 8px;
  border: none;
  padding: 12px 35px;
  margin-top: 20px;
  transition: background-color 0.3s ease, transform 0.3s ease; /* Transições suaves */
  z-index: 2;

  &:hover {
    background-color: #5e3370; /* Cor do hover ajustada */
    transform: translateY(-2px); /* Animação de hover */
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 30px;
  }
`;