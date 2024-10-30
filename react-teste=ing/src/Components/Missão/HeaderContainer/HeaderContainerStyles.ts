import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  border-radius: 25px;
  background-color: #7a5ff5;
  width: 100%;
  padding: 13px 54px 13px 0;
  box-sizing: border-box; /* Garantir que o padding seja incluído na largura total */
  @media (max-width: 991px) {
    padding: 13px 20px; /* Ajustar o padding para telas menores */
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 50%; /* Garantir que a coluna esquerda não ultrapasse 50% */
  @media (max-width: 991px) {
    width: 100%;
    max-width: 100%; /* Ajustar para telas menores */
  }
`;

export const RightColumn = styled.div`
  display: flex;
  justify-content: flex-end; /* Ajustar a imagem para a direita */
  align-items: center;
  flex: 1;
  max-width: 50%; /* Garantir que a coluna direita não ultrapasse 50% */
  @media (max-width: 991px) {
    width: 100%;
    max-width: 100%; /* Ajustar para telas menores */
  }
`;

export const ProfileImage = styled.img`
  width: auto;
  height: auto;
  max-width: 150px;
  max-height: 150px;
  object-fit: cover;
  margin-right: 20px; /* Adicionar margem à direita */
`;

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