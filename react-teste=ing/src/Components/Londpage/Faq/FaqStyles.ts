import styled from 'styled-components';

export const Section = styled.section`
  width: 100vw;
  background-color: #292929;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size:60px ;
  text-transform: uppercase;
  color: #ffffff; /* Cor do texto alterada para branco */
  margin: 1rem auto;
  border-bottom: 2px solid #ffffff; /* Cor da linha alterada para branco */
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1200px; /* Define uma largura máxima para o contêiner */
  margin: 0 auto; /* Centraliza o contêiner horizontalmente */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  color: #ffffff; /* Cor do texto alterada para branco */

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    & > *:last-child {
      & > *:first-child {
        margin-top: 0;
      }
    }
  }
`;

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  color: #ffffff; /* Cor do texto alterada para branco */

  @media (max-width: 48em) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  width: 45%;
  color: #ffffff; /* Cor do texto alterada para branco */

  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }

  .icon {
    color: #ffffff; /* Cor dos ícones alterada para branco */
  }
`;