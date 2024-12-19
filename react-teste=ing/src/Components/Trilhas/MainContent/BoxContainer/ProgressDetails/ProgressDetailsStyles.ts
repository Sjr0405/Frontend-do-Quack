import styled from 'styled-components';

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Garante que os componentes sejam distribuídos entre o topo e a parte inferior */
  color: #ffffff;
  font-family: 'Montserrat Alternates', -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 600;
  width: 25%;
  text-align: left; /* Alinha o texto à esquerda */
  margin: 5px 0; /* Reduz a margem */
  padding: 5px 0; /* Reduz o padding */

  @media (max-width: 991px) {
    width: 100%;
    margin-top: 10px; /* Reduz a margem superior */
  }
`;

export const CompletionPercentage = styled.div`
  font-size: 16px; /* Diminui o tamanho da fonte */
  align-self: flex-start;
  margin-bottom: 5px; /* Reduz a margem inferior */
`;

export const StepsCompleted = styled.div`
  font-size: 14px; /* Diminui o tamanho da fonte */
  align-self: flex-start; /* Garante que o texto esteja alinhado à esquerda */
  margin-top: 5px; /* Reduz a margem superior */
`;