import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 40px 0 0 0;
  z-index: 2; /* Certifique-se de que este valor seja maior que o do WaveContainer */
  background-color: #f9f9f9;
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
  margin-top: -50px;

  @media (max-width: 768px) {
    
    display: none;

  }
  
  @media (max-width: 576px) {
    max-width: 500px;
  }
`;

export const BackgroundLayerLeft = styled.img`
  margin-top: 110px;
  width: 100%;
  max-width: 250px; /* Ajuste o tamanho máximo conforme necessário */
  height: auto;
  @media (max-width: 768px) {
    display: none;
  }
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
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
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
  color: #333;
  font-size: 48px; /* Aumentado para destacar */
  font-weight: 500;
  font-family: 'lilita one', sans-serif;
  text-align: left;
  margin-bottom: 30px; /* Aumentado para mais espaçamento */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); /* Adicionada sombra leve */
  @media (max-width: 991px) {
    font-size: 42px;
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 36px;
  }
  @media (max-width: 576px) {
    font-size: 30px;
  }
`;

export const Subtitulo = styled.h3`
  color: #555;
  font-size: 20px; /* Reduzido para criar contraste */
  font-weight: 500;
  font-family: 'montserrat', sans-serif;
  text-align: left;
  margin-bottom: 30px; /* Aumentado para mais espaçamento */
  @media (max-width: 991px) {
    font-size: 18px;
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const CadButton = styled.button`
  color: #fff;
  background-color: #FF914D; /* Alterado para tom vibrante de laranja */
  font-size: 22px; /* Aumentado para destacar */
  padding: 18px 50px; /* Aumentado para destacar */
  border-radius: 8px;
  border: none;
  font-family: 'Montserrat Alternates', sans-serif;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  align-self: center;
  margin-top: 30px; /* Aumentado para mais espaçamento */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Adicionada sombra sutil */
  @media (max-width: 991px) {
    align-self: center;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    padding: 16px 45px;
  }
  @media (max-width: 576px) {
    font-size: 18px;
    padding: 14px 40px;
  }
  &:hover {
    background-color: #FF7A30; /* Escurecido no hover */
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15); /* Aumentada a sombra no hover */
  }
`;

export const Img = styled.img`
  aspect-ratio: 0.84;
  object-fit: contain;
  width: 100%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Adicionada sombra leve */
  @media (max-width: 991px) {
    max-width: 80%;
    margin-top: 20px;
    display: none;
  }
  @media (max-width: 768px) {
    max-width: 70%;
    display: none;

  }
  @media (max-width: 576px) {
    max-width: 60%;
    display: none;

  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background-color: #f9f9f9;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavLink = styled.a`
  color: #333;
  font-size: 18px;
  font-family: 'montserrat', sans-serif;
  text-decoration: none;
  margin: 0 15px;
  &:hover {
    color: #337447;
  }
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background-color: #333;
`;

export const FooterNavLink = styled.a`
  color: #fff;
  font-size: 16px;
  font-family: 'montserrat', sans-serif;
  text-decoration: none;
  margin: 0 10px;
  &:hover {
    color: #337447;
  }
`;