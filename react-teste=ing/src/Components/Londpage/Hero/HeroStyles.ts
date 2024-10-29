import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 20px 0;
`;

export const BackgroundWrapper = styled.div<{ position: 'left' | 'right' }>`
  position: absolute;
  top: 0;
  ${({ position }) => position}: 0;
  z-index: -1;
  overflow: visible;
  pointer-events: none;
`;

export const BackgroundLayerRight = styled.img`
  width: 100%;
  max-width: 700px; /* Ajuste o tamanho máximo conforme necessário */
  height: auto;
`;

export const BackgroundLayerLeft = styled.img`
  margin-top: 110px;
  width: 100%;
  max-width: 250px; /* Ajuste o tamanho máximo conforme necessário */
  height: auto;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  display: flex;
  gap: 20px;
  padding-left: 150px;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    padding-left: 0;
  }
`;

export const Column = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 60%;
  z-index: 1;
  @media (max-width: 991px) {
    width: 100%;
    align-items: center;
  }
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  z-index: 1;
  overflow: hidden;
  @media (max-width: 991px) {
    width: 100%;
    align-items: center;
  }
`;

export const Titulo = styled.h1`
  color: #000; /* Muda a cor para branco */
  font-size: 52px; /* Aumenta o tamanho da fonte */
  font-weight: 500;
  font-family: 'lilita one', sans-serif;
  text-align: left;
  margin-bottom: 20px;
  @media (max-width: 991px) {
    font-size: 42px; /* Ajusta o tamanho da fonte para dispositivos móveis */
    text-align: center;
  }
`;

export const Subtitulo = styled.h3`
  color: #000; /* Muda a cor para branco */
  font-size: 24px; /* Aumenta o tamanho da fonte */
  font-weight: 400;
  font-family: 'montserrat', sans-serif;
  text-align: left;
  margin-bottom: 20px;
  @media (max-width: 991px) {
    font-size: 20px; /* Ajusta o tamanho da fonte para dispositivos móveis */
    text-align: center;
  }
`;

export const CadButton = styled.button`
  color: #fff;
  background-color: #337447;
  font-size: 20px; /* Aumenta o tamanho da fonte */
  padding: 16px 45px; /* Ajusta o padding */
  border-radius: 8px;
  border: none;
  font-family: 'Montserrat Alternates', sans-serif;
  transition: background-color 0.3s, color 0.3s;
  align-self: center; /* Centraliza o botão */
  margin-top: 20px; /* Adiciona margem superior para espaçamento */
  @media (max-width: 991px) {
    align-self: center;
  }
  &:hover {
    background-color: #255233;
  }
`;

export const Img = styled.img`
  aspect-ratio: 0.84;
  object-fit: contain;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 80%;
    margin-top: 20px;
  }
`;