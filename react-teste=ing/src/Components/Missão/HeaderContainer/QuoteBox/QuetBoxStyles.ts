import styled from 'styled-components';

export const StyledQuoteBox = styled.blockquote`
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0 20px 20px 0;
  background-color: #daf55f;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-family: 'Montserrat Alternates', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px; /* Diminuir o tamanho da fonte */
  font-weight: 600;
  color: #000000;
  margin: 11px 0 20px; /* Aumentar a margem inferior */
  padding: 20px 30px 10px; /* Ajustar o padding */
  width: 100%; /* Garantir que o QuoteBox ocupe toda a largura disponível */
  max-width: 100%; /* Garantir que o QuoteBox não ultrapasse os limites */
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 15px;
    font-size: 18px;
  }
`;

export const Author = styled.span`
  display: block;
  font-size: 0.8em;
  margin-top: 10px;
  text-align: right;
  color: #7a5ff5; /* Adicionar cor roxa ao nome do autor */
`;

export const Highlight = styled.span`
  color: #7a5ff5; /* Cor roxa */
`;