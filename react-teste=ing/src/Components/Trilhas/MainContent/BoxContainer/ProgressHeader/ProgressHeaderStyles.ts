import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-family: 'Montserrat Alternates', -apple-system, Roboto, Helvetica, sans-serif;
  color: #ffffff;
  font-weight: 600;
  width: 75%;
  text-align: left; /* Alinha o texto à esquerda */
  margin: 5px 0; /* Reduz a margem */

  @media (max-width: 991px) {
    width: 100%;
    margin-top: 10px; /* Reduz a margem superior */
  }
`;

export const Title = styled.h2`
  font-size: 24px; /* Diminui o tamanho da fonte */
  align-self: flex-start;
  margin-bottom: 5px; /* Adiciona margem inferior para espaçamento */
`;

export const Description = styled.p`
  font-size: 14px; /* Diminui o tamanho da fonte */
  margin-top: 5px; /* Ajusta a margem superior */
  padding-right: 10px; /* Ajusta o padding direito */

  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 0;
  }
`;