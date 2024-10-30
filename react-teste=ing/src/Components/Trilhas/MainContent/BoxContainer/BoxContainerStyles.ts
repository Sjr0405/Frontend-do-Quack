import styled from 'styled-components';

export const ProgressContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ProgressWrapper = styled.div`
  border-radius: 8px;
  background-color: #7a5ff5;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 18px 10px 28px 25px;
  display: flex;
  gap: 10px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 20px;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;