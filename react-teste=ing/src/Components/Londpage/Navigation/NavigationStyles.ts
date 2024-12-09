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
  
  height: 70px; /* Ajusta a altura */
  padding: 0 15px; /* Ajusta o padding */
  position: relative;
  z-index: 2;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto; /* Centralizando o NavBar */
  background-color: #fff; /* Adiciona cor de fundo branca */
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Adiciona transição para sombra */
  border-radius: 15px; /* Ajusta o arredondamento das bordas */
  border: 1px solid #d3d3d3; /* Adiciona borda cinza clara */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Ajusta a sombra */
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 40px; /* Ajusta a altura da imagem */
    margin-right: 10px; /* Ajusta o espaçamento */
  }

  span {
    font-size: 24px; /* Ajusta o tamanho da fonte */
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
  font-family: 'Poppins', sans-serif; /* Muda a fonte para Poppins */
  font-weight: bold; /* Deixa a fonte em negrito */
  border-radius: 15px;
  
  

  @media (max-width: 1920px) {
    font-size: 18px;
  }

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 991px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: ${({ isOpen }) => (isOpen ? 'rgba(255, 255, 255, 0.9)' : 'transparent')};
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
    overflow: hidden;
    transition: height 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }

  li:last-child {
    margin-right: 20px; /* Adiciona espaçamento ao último item */
  }
`;

export const NavItem = styled.li`
  color: #000;
  margin: 0 1.5rem; /* Ajusta o espaçamento */
  font-size: 14px; /* Diminui o tamanho da fonte */
  cursor: pointer;
  transition: color 0.3s;
  text-transform: uppercase;
  

  &:hover {
    color: #FF914D; /* Muda a cor ao passar o mouse */
    text-decoration: underline; /* Adiciona sublinhado ao passar o mouse */
  }

  @media (max-width: 1920px) {
    margin: 0 1.5rem;
  }

  @media (max-width: 1200px) {
    margin: 0 1rem;
  }

  @media (max-width: 991px) {
    margin: 0 0.75rem;
  }

  @media (max-width: 768px) {
    margin: 0.75rem 0;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-family: 'Poppins', sans-serif; /* Muda a fonte para Poppins */
    font-weight: bold;
    transition: color 0.3s; /* Adiciona transição ao link */

    &:hover {
      color: #FF914D; /* Muda a cor ao passar o mouse */
      text-decoration: underline; /* Adiciona sublinhado ao passar o mouse */
    }
  }
`;

export const Button = styled.button`
  color: #fff;
  background-color: #8A2BE2; /* Ajusta a cor de fundo para roxo mais suave */
  font-size: 14px; /* Ajusta o tamanho da fonte */
  border-radius: 15px; /* Ajusta o arredondamento das bordas */
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Poppins', sans-serif; /* Muda a fonte para Poppins */
  transition: background-color 0.3s;
  margin-right: 20px; /* Ajusta o espaçamento */
  margin-left: 100px; /* Ajusta o espaçamento */

  &:hover {
    background-color: #D3D3D3;
  }

  @media (max-width: 1920px) {
    font-size: 16px;
    padding: 14px 40px;
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

export const OrangeButton = styled.button`
  color: #fff;
  background-color: #FF8C42; /* Ajusta a cor de fundo para laranja mais vibrante */
  font-size: 14px;
  padding: 12px 35px;
  border-radius: 15px; /* Ajusta o arredondamento das bordas */
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  transition: background-color 0.3s;
  margin-left: 20px; /* Ajusta o espaçamento */

  &:hover {
    background-color: #D3D3D3;
  }

  @media (max-width: 1920px) {
    font-size: 16px;
    padding: 14px 40px;
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