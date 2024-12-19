import styled from "styled-components";
/** 
layout
MH = Main Header
MC = Main Content
MF = Main Footer
RT = Roadmap
*/

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr; 
  grid-template-rows: 50px auto auto 30px; 
  grid-template-areas:
    "MH"  /* Main Header */
    "MC"  /* Main Content */
    "RT"  /* Roadmap */
    "MF"; /* Main Footer */
  
  height: 100vh; /* O layout ocupa toda a altura da tela */
  width: 100vw; /* O layout ocupa toda a largura da tela */

  @media (max-width: 768px) {
    grid-template-rows: 60px auto 1fr 60px;
  }

  @media (max-width: 480px) {
    grid-template-rows: 50px auto 1fr 50px;
  }
`;