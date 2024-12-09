import styled from 'styled-components';

export const Section = styled.section`
  width: 100vw;
  background-color: #1D1534;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Centraliza o conteúdo verticalmente */
  padding: 2rem 0; /* Adiciona espaçamento interno */
`;


export const Container = styled.div`
  width: 100%; /* Ocupa toda a largura disponível */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden; /* Garante que nada ultrapasse os limites */

  @media (max-width: 48em) {
    width: 95%; /* Ajusta para telas menores */
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
  padding: 20px; /* Adiciona espaço interno para afastar o conteúdo das bordas */
  text-align: center; /* Centraliza todo o conteúdo dentro do card */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: calc(25% - 20px); /* Ajusta a largura do card */
  margin: 10px;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 80%; /* Reduz o tamanho da imagem */
    margin: 0 auto; /* Centraliza horizontalmente a imagem */
    display: block; /* Garante que a imagem seja tratada como um bloco */
  }

  h3 {
    font-size: 16px;
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
    width: calc(33% - 20px);
  }

  @media (max-width: 48em) {
    width: 90%;
    margin: 10px auto;
  }
`;


export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  overflow: hidden;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50px;
    z-index: 1;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, rgba(29, 21, 52, 1), rgba(29, 21, 52, 0));
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, rgba(29, 21, 52, 1), rgba(29, 21, 52, 0));
  }
`;

export const Carousel = styled.div`
  display: flex;
  flex-wrap: nowrap; /* Mantém os itens em linha */
  overflow-x: auto; /* Adiciona rolagem horizontal */
  scroll-snap-type: x mandatory; /* Comportamento de rolagem suave */
  -webkit-overflow-scrolling: touch; /* Suporte para dispositivos móveis */
  width: 100%;
  transition: transform 0.3s ease; /* Adiciona transição suave */
  cursor: grab;

  &::-webkit-scrollbar {
    display: none; /* Oculta a barra de rolagem */
  }

  &:active {
    cursor: grabbing; /* Indica arrastamento */
  }

  ${Card} {
    flex: 0 0 calc(25% - 20px); /* Ajusta o tamanho do card */
    margin: 10px;
    max-width: 300px; /* Limita a largura máxima do card */

    @media (max-width: 64em) {
      flex: 0 0 calc(33% - 20px);
    }

    @media (max-width: 48em) {
      flex: 0 0 90%; /* Ocupa quase toda a largura em telas menores */
      margin: 10px auto; /* Centraliza em telas menores */
    }

    img {
      width: 80%; /* Reduz o tamanho da imagem */
      margin: 0 auto; /* Centraliza a imagem */
    }

    h3 {
      font-size: 16px; /* Reduz o tamanho do título */
    }

    p {
      font-size: 12px; /* Reduz o tamanho do texto */
    }
  }
`;

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`;
