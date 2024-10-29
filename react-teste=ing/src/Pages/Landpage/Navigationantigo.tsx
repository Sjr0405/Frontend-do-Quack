import styled from 'styled-components';
import { Link } from 'react-router-dom';


// Ajustando a seção para cobrir a largura da tela
const Section = styled.section`
  grid-template-columns: repeat(12, 1fr); // Define a grid com 12 colunas
  background-color: ${(props) => props.theme.body};
  padding: 10px 20px;
  position: relative;

  @media (max-width: 768px) {
    padding: 10px 10px;
  }
`;

// Estilizando a barra de navegação
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  height: 80px;
  padding: 0 20px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

// Logo do lado esquerdo
const Logo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 50px;
  z-index: 2;

  img {
    height: 60px;
    margin-right: 15px;
  }

  span {
    font-size: 28px;
    font-weight: bold;
    color: #FF914D;
    transition: color 0.3s;
    cursor: pointer;
  
    &:hover {
    color: #4834d4;
  }
}

  @media (max-width: 768px) {
    padding-left: 0;
    margin-bottom: 10px;

    img {
      height: 50px;
    }

    span {
      font-size: 24px;
    }
  }
`;

// Estilizando o menu da navbar (ul)
const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: space-between;
  align-items: center;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

// Estilizando os itens da navbar
const NavItem = styled.li`
  color: #fff;
  margin: 0 1.5rem;
  font-size: 16px;
  cursor: pointer;
  z-index: 2;
  transition: color 0.3s;
  text-transform: uppercase;

  &:hover {
    color: #4834d4;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
    font-size: 14px;
  }
`;

// Estilizando o botão de "Entrar"
const Button = styled.button`
  color: #333;
  background-color: #fff;
  font-size: 14px;
  padding: 12px 35px;
  margin-left: 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
  z-index: 2;

  &:hover {
    background-color: #D3D3D3;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 13px;
    margin-left: 0;
  }
`;

// Grupo de SVGs com posicionamento específico
const Vector = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 1; /* SVGs ficam abaixo da navbar */

  img {
    position: absolute;
    object-fit: cover;
  }

  /* Posicionando os SVGs individualmente */
  .svg1 {
    top: 0%;
    left: 17.3%;
  }

  .svg2 {
    top: 0%;
    left: 24.8%;
  }

  .svg3 {
    top: 0%;
    left: 42.7%;
  }

  .svg4 {
    top: 0%;
    left: 24.7%;
  }
`;

const Navigation = () => {

  const scrollToSection = (sectionId : string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section>
      <NavBar>
        <Logo>
          <img src="/src/assets/Logo.svg" alt="Logo Quack()" />
          <span>Quack()</span>
        </Logo>
        <Menu>
          <NavItem onClick={() => scrollToSection('landpage')}>
            O que é Quack()
          </NavItem>
          <NavItem onClick={() => scrollToSection('showcase')}>
            Trilhas
          </NavItem>
          <NavItem onClick={() => scrollToSection('about')}>
            Sobre
          </NavItem>
          <NavItem onClick={() => scrollToSection('faq')}>
            Contato
          </NavItem>
          <NavItem>
            <Link to="/Cadastro">Criar Conta</Link>
          </NavItem>
          <Link to="/Login">
            <Button>Entrar</Button>
          </Link>
        </Menu>
      </NavBar>
      <Vector>
        <img className="svg1" src="/src/svgs/Landpage-svgs/4.svg" alt="SVG 1" />
      </Vector>
    </Section>
  );
};

export default Navigation;
