import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Section, NavBar, Logo, Menu, NavItem, Button, Hamburger, MenuIcon } from './NavigationStyles';

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
      <NavBar>
        <Logo>
          <img src="/src/assets/Logo.svg" alt="Logo Quack()" />
          <span>Quack()</span>
        </Logo>
        <Hamburger onClick={toggleMenu} aria-label="Toggle menu">
          <MenuIcon />
        </Hamburger>
        <Menu isOpen={isOpen}>
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
            <Link to="/Cadastro" style={{ color: '#000', textDecoration: 'none', fontFamily: 'Montserrat Alternates, sans-serif', fontWeight: 'bold' }}>Criar Conta</Link>
          </NavItem>
          <Link to="/Login">
            <Button>Entrar</Button>
          </Link>
        </Menu>
      </NavBar>
    </Section>
  );
};

export default Navigation;