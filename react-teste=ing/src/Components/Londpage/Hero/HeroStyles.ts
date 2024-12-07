import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 40px 0;
  z-index: 2;
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
  font-size: 36px;
  font-weight: 500;
  font-family: 'lilita one', sans-serif;
  text-align: left;
  margin-bottom: 20px;
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
  font-size: 24px;
  font-weight: 500;
  font-family: 'montserrat', sans-serif;
  text-align: left;
  margin-bottom: 20px;
  @media (max-width: 991px) {
    font-size: 20px;
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

export const CadButton = styled.button`
  color: #fff;
  background-color: #337447;
  font-size: 20px;
  padding: 16px 45px;
  border-radius: 8px;
  border: none;
  font-family: 'Montserrat Alternates', sans-serif;
  transition: background-color 0.3s, color 0.3s;
  align-self: center;
  margin-top: 20px;
  @media (max-width: 991px) {
    align-self: center;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    padding: 14px 40px;
  }
  @media (max-width: 576px) {
    font-size: 16px;
    padding: 12px 35px;
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