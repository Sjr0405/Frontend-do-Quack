// HeroStyles.ts
import styled from 'styled-components';
import svgImage from '../../../svgs/Landpage-svgs/Vector 2.svg';

export const Section = styled.section`
  width: 100%;
  position: relative;
  overflow-x: hidden; 
  padding: 20px 0; 
  z-index: 1;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: transparent;
  position: relative;
  display: flex;
  gap: 20px;
  padding-left: 150px; /* Adiciona padding à esquerda para garantir que o texto não toque na imagem */
  background-image: url(${svgImage});
  background-repeat: no-repeat;
  background-size: contain; /* Ajusta o tamanho da imagem para que ela seja exibida completamente */
  background-position: left top; /* Posiciona a imagem no canto superior esquerdo */

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-left: 0; /* Remove o padding em dispositivos móveis */
    background-position: center top; /* Ajusta a posição da imagem em dispositivos móveis */
  }
`;

export const Column = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 60%;
  z-index: 2; /* Garante que o texto fique acima da imagem de fundo */
  @media (max-width: 991px) {
    width: 100%;
    align-items: center; /* Centraliza o conteúdo dentro da coluna */
  }
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 40%;
  z-index: 2; /* Garante que o texto fique acima da imagem de fundo */
  @media (max-width: 991px) {
    width: 100%;
    align-items: center; /* Centraliza o conteúdo dentro da coluna */
  }
`;

export const Titulo = styled.h1`
  color: ${(props) => props.theme.text};
  font-size: 42px;
  font-weight: 500;
  position: relative;
  font-family: 'lilita one', sans-serif;
  z-index: 2;
  text-align: left;
  margin-bottom: 20px;
  @media (max-width: 991px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const Subtitulo = styled.h3`
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 400;
  font-family: 'montserrat', sans-serif;
  position: relative;
  z-index: 2;
  text-align: left;
  margin-bottom: 20px;
  @media (max-width: 991px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const CadButton = styled.button`
  color: #fff;
  background-color: #337447;
  font-size: 14px;
  padding: 12px 35px;
  border-radius: 8px;
  border: none;
  font-family: 'Montserrat Alternates', sans-serif;
  position: relative;
  transition: background-color 0.3s, color 0.3s;
  z-index: 2;
  align-self: flex-start;
  
  @media (max-width: 991px) {
    align-self: center;
  }

  &:hover {
    background-color: #255233;
    color: white;
  }
`;

export const Img = styled.img`
  aspect-ratio: 0.84;
  object-fit: contain;
  object-position: left; /* Alinha a imagem mais à esquerda */
  width: 100%;
  flex-grow: 1;

  
  @media (max-width: 991px) {
    max-width: 80%; /* Ajusta a largura da imagem para 80% da tela em dispositivos móveis */
    margin-top: 20px;
  }
`;