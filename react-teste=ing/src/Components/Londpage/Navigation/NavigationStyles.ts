import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const Section = styled.section`
  width: 100%;
  position: relative;
  background-color: transparent;
`;

export const NavBar = styled.nav<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  position: relative;
  z-index: 2;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto; /* Centralizando o NavBar */
  background-color: #fff; /* Adiciona cor de fundo branca */
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Adiciona transição para sombra */
  border-radius: 20px; /* Adiciona arredondamento das bordas */
  border: 1px solid #d3d3d3; /* Adiciona borda cinza clara */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adiciona sombra */
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 60px;
    margin-right: 15px;
  }

  span {
    font-size: 32px; /* Aumenta o tamanho da fonte */
    font-weight: bold;
    color: #FF914D;
    transition: color 0.3s;
    cursor: pointer;
    font-family: 'Lilita One', sans-serif; /* Muda a fonte para Lilita One */

    &:hover {
      color: #6a0dad; /* Muda a cor para roxo ao passar o mouse */
    }
  }
`;

export const Menu = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: space-between;
  align-items: center;
  font-family: 'Montserrat Alternates', sans-serif; /* Muda a fonte para Montserrat Alternates */
  font-weight: bold; /* Deixa a fonte em negrito */
  border-radius: 20px;
  

  @media (max-width: 1920px) {
    font-size: 20px;
  }

  @media (max-width: 1200px) {
    font-size: 18px;
  }

  @media (max-width: 991px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: ${({ isOpen }) => (isOpen ? 'rgba(255, 255, 255, 0.9)' : 'transparent')};
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
    overflow: hidden;
    transition: height 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const NavItem = styled.li`
  color: #000;
  margin: 0 1.5rem;
  font-size: 18px; /* Aumenta o tamanho da fonte */
  cursor: pointer;
  transition: color 0.3s;
  text-transform: uppercase;
  

  &:hover {
    color: #FF914D; /* Muda a cor ao passar o mouse */
  }

  @media (max-width: 1920px) {
    margin: 0 1.5rem;
  }

  @media (max-width: 1200px) {
    margin: 0 1rem;
  }

  @media (max-width: 991px) {
    margin: 0 0.5rem;
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
  }

  @media (max-width: 576px) {
    font-size: 16px;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-family: 'Montserrat Alternates', sans-serif;
    font-weight: bold;
    transition: color 0.3s; /* Adiciona transição ao link */

    &:hover {
      color: #FF914D; /* Muda a cor ao passar o mouse */
    }
  }
`;

export const Button = styled.button`
  color: #fff;
  background-color: #6a0dad; /* Muda a cor de fundo para roxo */
  font-size: 16px; /* Aumenta o tamanho da fonte */
  padding: 14px 40px; /* Ajusta o padding */
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Montserrat Alternates', sans-serif; /* Muda a fonte para Montserrat Alternates */
  transition: background-color 0.3s;
  margin-right: 20px;

  &:hover {
    background-color: #D3D3D3;
  }

  @media (max-width: 1920px) {
    font-size: 18px;
    padding: 16px 45px;
  }

  @media (max-width: 1200px) {
    font-size: 14px;
    padding: 12px 35px;
  }

  @media (max-width: 991px) {
    font-size: 12px;
    padding: 10px 30px;
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
  }

  @media (max-width: 576px) {
    font-size: 10px;
    padding: 8px 25px;
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MenuIcon = styled(FaBars)`
  color: #FF914D;
  font-size: 20px;
`;