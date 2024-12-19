import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 40px; /* Aumentando a altura do footer */
  position: relative;
  bottom: 0;
  width: 100%;
  overflow-x: hidden; /* Evitando mostrar a barra de rolagem horizontal */
  overflow-y: hidden; /* Evitando mostrar a barra de rolagem vertical */

  @media (max-width: 768px) {
    padding: 20px 20px; /* Aumentando a altura do footer para telas menores */
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.gray};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const Bottom = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column; /* Ajustando a direção para coluna */
  justify-content: center;
  align-items: center;
  text-align: center; /* Centralizando o texto */

  a {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Footer: React.FC = () => {
  return (
    <Container>
      <Divider />
      <Bottom>
        <span>&copy; {new Date().getFullYear()} Quack. Todos os direitos reservados.</span>
        <span>Feito com &#10084; porr <a href="#" target="_blank" rel="dofollow noreferrer">EquipeQuack</a></span>
      </Bottom>
    </Container>
  );
};

export default Footer;