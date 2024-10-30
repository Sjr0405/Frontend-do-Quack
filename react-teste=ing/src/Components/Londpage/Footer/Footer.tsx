import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Section, Container, Left, Logo, SocialIcons, NavMenu, Bottom } from './FooterStyles';


const Footer = () => {
  return (
    <Section>
      <Suspense fallback={null}>
      </Suspense>
      <Container>
        <Left>
          <Logo>
            <Link to={"/"}>
              <img src="/src/assets/Logo.svg" alt="Logo" />
            </Link>
            <span>Quack()</span>
          </Logo>
          <SocialIcons>
            <Link to="https://github.com/Sjr0405/Login-do-Quack" target="_blank">
              <img src="/src/Icons/twitter.svg" alt="Twitter" />
            </Link>
            <Link to="https://facebook.com" target="_blank">
              <img src="/src/Icons/facebook.svg" alt="Facebook" />
            </Link>
            <Link to="https://linkedin.com" target="_blank">
              <img src="/src/Icons/linkedin.svg" alt="Linkedin" />
            </Link>
          </SocialIcons>
        </Left>
        <NavMenu>
          <Link to={"#"}>Início</Link>
          <Link to={"#"}>Produto</Link>
          <Link to={"#"}>Sobre</Link>
          <Link to={"#"}>Contato</Link>
        </NavMenu>
      </Container>
      <Bottom>
        <span>&copy; {new Date().getFullYear()} Seu Projeto. Todos os direitos reservados.</span>
        <span>Feito com &#10084; por <a href="#" target="_blank" rel="dofollow noreferrer">EquipeQuack </a></span>
      </Bottom>
    </Section>
  );
};

export default Footer;