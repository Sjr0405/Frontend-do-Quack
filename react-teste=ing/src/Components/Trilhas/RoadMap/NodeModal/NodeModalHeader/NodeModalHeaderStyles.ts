import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  border-bottom: 1px solid #ddd;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

export const StatusLabel = styled.span<{ status: string }>`
  margin-left: 10px;
  font-size: 1rem;
  color: ${({ status }) => (status === 'concluído' ? '#4caf50' : '#ff9800')};
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;