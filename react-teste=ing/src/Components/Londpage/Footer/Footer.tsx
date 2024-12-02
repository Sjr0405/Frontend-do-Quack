import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Section, Container, Left, Logo, SocialIcons, NavMenu, Bottom } from './FooterStyles';
import LogoImg from '../../../Assets/Logo.svg';
import TwitterIcon from '../../../Assets/Icons/twitter.svg';
import FacebookIcon from '../../../Assets/Icons/facebook.svg';
import LinkedinIcon from '../../../Assets/Icons/linkedin.svg';

const Footer = () => {
  return (
    <Section>
      <Suspense fallback={null}>
      </Suspense>
      <Container>
        <Left>
          <Logo>
            <Link to={"/"}>
              <img src={LogoImg} alt="Logo" />
            </Link>
            <span>Quack()</span>
          </Logo>
          <SocialIcons>
            <Link to="https://github.com/Sjr0405/Login-do-Quack" target="_blank">
              <img src={TwitterIcon} alt="Twitter" />
            </Link>
            <Link to="https://facebook.com" target="_blank">
              <img src={FacebookIcon} alt="Facebook" />
            </Link>
            <Link to="https://linkedin.com" target="_blank">
              <img src={LinkedinIcon} alt="Linkedin" />
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