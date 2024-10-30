import styled from 'styled-components';

export const Section = styled.section`
  width: 100vw;
  background-color: #1D1534;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 75%;
  max-width: 1200px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 48em) {
    width: 90%;
  }
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 2rem;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
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