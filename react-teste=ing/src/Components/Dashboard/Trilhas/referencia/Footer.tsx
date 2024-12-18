import React from "react";
import styled from "styled-components";

const Container = styled.div`
  grid-area: MF; 
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center; 
  align-items: center; 
  font-size: 0.8em;
  padding: 10px;
  text-align: center; 
  background-color: ${(props) => props.theme.colors.primary}; 
  border-top: 1px solid ${(props) => props.theme.colors.gray}; 

  @media (max-width: 768px) {
    font-size: 0.7em;
    padding: 20px;
  }

  @media (max-width: 480px) {
    font-size: 0.6em;
    padding: 15px;
  }

  @media (max-width: 320px) {
    font-size: 0.5em;
    padding: 10px;
  }
`;

const Footer: React.FC = () => {
  return (
    <Container>
      <p>Copyright © 2024 Quack. Todos os direitos reservados.</p>
    </Container>
  );
};

export default Footer;