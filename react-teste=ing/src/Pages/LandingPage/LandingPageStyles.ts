import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  margin: 0 auto; /* Centraliza o contêiner horizontalmente */
  overflow-x: hidden; /* Evita a barra de rolagem horizontal */
  padding: 0; /* Adiciona padding 0 */
`;

export const Section = styled.section`
  width: 100%;
  overflow-x: hidden; /* Evita a barra de rolagem horizontal */
  padding: 0; /* Adiciona padding 0 */
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const Button = styled.button`
  cursor: pointer;
`;

export const HeroContainer = styled.div`
  position: relative;
  z-index: 1; /* Garante que o Hero fique acima da Wave */
`;