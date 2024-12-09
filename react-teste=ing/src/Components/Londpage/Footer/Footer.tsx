import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Section, Container, Left, Logo, SocialIcons, NavMenu, Bottom } from './FooterStyles';
import LogoImg from  '../../../Assets/Svg_thigas/Pato_de_perfil.svg';
import YouTubeIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              <YouTubeIcon />
            </Link>
            <Link to="https://facebook.com" target="_blank">
              <FacebookIcon />
            </Link>
            <Link to="https://linkedin.com" target="_blank">
              <LinkedinIcon />
            </Link>
            <Link to="https://instagram.com" target="_blank">
              <InstagramIcon />
            </Link>
          
          </SocialIcons>
        </Left>
        <NavMenu>
          <Link to={"#"} onClick={() => scrollToSection('about')}>Funcionalidades</Link>
          <Link to={"#"} onClick={() => scrollToSection('showcase')}>Trilhas</Link>
          <Link to={"#"} onClick={() => scrollToSection('faq')}>Perguntas</Link>
          <Link to={"#"} onClick={() => scrollToSection('team')}>Equipe</Link>
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