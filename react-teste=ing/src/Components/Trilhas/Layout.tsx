import React from "react";
import styled from "styled-components";
import MainHeader from "./MainHeader";
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

const StyledMainHeader = styled(MainHeader)`
  grid-area: MH;
`;

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
      <StyledMainHeader />
      <StyledMainContent />
      <StyledRoadmap />
      <StyledMainFooter />
    </Grid>
  );
}

export default Home;