import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  border-top: 1px solid #ddd;
`;

export const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  font-size: 1rem;

  &:disabled {
    background-color: #9e9e9e;
    cursor: not-allowed;
  }
`;