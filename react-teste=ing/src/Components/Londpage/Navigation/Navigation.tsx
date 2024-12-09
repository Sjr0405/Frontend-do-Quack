import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Section, NavBar, Logo, Menu, NavItem, Button, Hamburger, MenuIcon, OrangeButton } from './NavigationStyles';
import LogoImage from '../../../Assets/Svg_thigas/Pato_de_perfil.svg';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Fechar o menu após clicar em um item
    }
  };

  return (
    <Section>
      <NavBar isOpen={isOpen}>
        <Logo>
          <img src={LogoImage} alt="Logo Quack()" />
          <span>Quack()</span>
        </Logo>
        <Hamburger onClick={toggleMenu} aria-label="Toggle menu">
          <MenuIcon />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <NavItem onClick={() => scrollToSection('about')}>
            Funcionalidades
          </NavItem>
          <NavItem onClick={() => scrollToSection('showcase')}>
            Trilhas
          </NavItem>
          <NavItem onClick={() => scrollToSection('faq')}>
            Perguntas
          </NavItem>
          <NavItem onClick={() => scrollToSection('team')}>
            Equipe
          </NavItem>
          
          <Link to="/Login">
            <Button>Entrar</Button>
          </Link>
          <Link to="/Cadastro">
            <OrangeButton>Criar Conta</OrangeButton>
          </Link>
        </Menu>
      </NavBar>
    </Section>
  );
};

export default Navigation;