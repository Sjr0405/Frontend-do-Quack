import styled from 'styled-components';

export const Container = styled.main`
  border-radius: 0;
  padding: 20px;
  background-color: white; /* Fundo branco */
`;

export const MissionsWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between; /* Adiciona espaçamento igual entre os itens */
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

export const MissionsColumn = styled.div`
  flex: 1; /* Ajuste para ocupar metade do espaço */
  margin-right: 10px; /* Adiciona margem à direita */
`;

export const MissionsContent = styled.div`
  padding: 20px;
  border-radius: 8px;
  border: '1px #BFB9B9 solid';
`;

export const MissionsTitle = styled.h2`
  color: #FC7A02;
  font-size: 25px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 600;
  word-wrap: break-word;
  margin-bottom: 10px;
  @media (max-width: 991px) {
    font-size: 24px;
  }
`;

export const NextMissionInfo = styled.p`
  color: #FF3E41;
  font-size: 10px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 600;
  word-wrap: break-word;
  margin-bottom: 20px;
  @media (max-width: 991px) {
    font-size: 8px;
  }
`;

export const ChallengeColumn = styled.div`
  flex: 1; 
  margin-left: 10px; /* Adiciona margem à esquerda */
  @media (max-width: 991px) {
    margin-top: 20px;
    margin-left: 0; /* Remove margem à esquerda em telas menores */
  }
`;