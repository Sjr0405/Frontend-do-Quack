import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import LogoSvg from '../../Assets/Svg_thigas/Pato_de_perfil.svg';
import MainContent from "./MainContent";
import MainFooter from "./Footer";
import Roadmap from "./RoadMap";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr; 
  grid-template-areas:
    "MH"  /* Main Header */
    "MC"  /* Main Content */
    "RT"  /* Roadmap */
    "MF"; /* Main Footer */
  
  height: 100%; /* O layout ocupa toda a altura da tela */
  width: 100%; /* O layout ocupa toda a largura da tela */
  overflow-x: hidden; /* Evitando mostrar a barra de rolagem horizontal */

  @media (max-width: 768px) {
    grid-template-rows: 60px auto 1fr 60px;
  }

  @media (max-width: 480px) {
    grid-template-rows: 50px auto 1fr 50px;
  }
`;

// Estilos que estavam no MainHeaderStyles.ts
const Container = styled.div`
  grid-area: MH;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5em;
  border-bottom: 1px solid rgba(132, 0, 255, 0.1);
  box-shadow: 0 8px 16px rgba(132, 0, 255, 0.1); /* Adiciona sombra */

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    font-size: 1.2em;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 1em;
  }
`;

// Estilos que estavam no LogoStyles.ts
const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const LogoImage = styled.img`
  margin-right: 10px; /* Espaçamento entre a imagem e o texto */
  width: 50px; /* Ajuste o tamanho da imagem */
  height: auto;

  @media (max-width: 480px) {
    width: 40px;
  }
`;

const LogoText = styled.span`
  font-size: 24px;
  font-weight: bold; 
  color: #FF914D;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

// Estilos que estavam no BackButtonStyles.ts
const BackButtonStyled = styled.button`
  background-color: #FF3E41;
  color: #FFFFFF;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Montserrat Alternates', sans-serif;
  border-radius: 20px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e62e33;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 8px 16px;
  }
`;

const ArrowIcon = styled.div`
  margin-right: 12px;
  color: #FFFFFF;
  width: 24px;
  height: 24px;

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;

// Componentes Logo e BackButton diretamente no MainHeader.tsx
const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <LogoImage src={LogoSvg} alt="Logo" />
      <LogoText>Quack()</LogoText>
    </LogoContainer>
  );
};

const BackButton: React.FC<{ changeSection: (section: string) => void }> = ({ changeSection }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    changeSection('Aprender');
    navigate('/Home', { state: { section: 'Aprender' } });
  };

  return (
    <BackButtonStyled onClick={handleBackClick}>
      <ArrowIcon>
        <FontAwesomeIcon icon={faArrowLeft} />
      </ArrowIcon>
      Voltar
    </BackButtonStyled>
  );
};

const MainHeader: React.FC<{ changeSection: (section: string) => void }> = ({ changeSection }) => {
  return (
    <Container>
      <Logo />
      <BackButton changeSection={changeSection} />
    </Container> 
  );
}

const StyledMainContent = styled(MainContent)`
  grid-area: MC;
`;

const StyledRoadmap = styled(Roadmap)`
  grid-area: RT;
`;

const StyledMainFooter = styled(MainFooter)`
  grid-area: MF;
`;

const Home: React.FC = () => {
  return (
    <Grid>
      <MainHeader changeSection={() => {}} />
      <StyledMainContent />
      <StyledRoadmap />
      <StyledMainFooter />
    </Grid>
  );
}

export default Home;