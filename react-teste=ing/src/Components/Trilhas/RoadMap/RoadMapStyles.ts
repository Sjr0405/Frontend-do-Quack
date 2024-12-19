import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  grid-area: RT;
  min-height: 100vh; /* Garantir altura mínima */
  min-width: 100vw; /* Garantir largura mínima */
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  position: relative; /* Ajustado para se comportar corretamente dentro do grid */
  overflow: auto; /* Permitir rolagem se necessário */
`;

export const GlobalStyle = createGlobalStyle`
  .react-flow__attribution {
    display: none;
  }
`;

export const StyledNode = styled.div<{ completed: boolean }>`
  background-color: ${({ completed }) => (completed ? '#A3E4A7' : '#F6C761')};
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: none;
  font-family: 'Montserrat Alternates', sans-serif;
  color: black;
`;