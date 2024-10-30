import styled from 'styled-components';

export const Description = styled.p`
  font-weight: normal;
  font-size: 1.2rem;
  text-align: left;
`;

export const Separator = styled.div`
  width: 100%;
  border-bottom: 1px solid #ddd;
  margin: 20px 0;
  text-align: center;
  position: relative;

  &::before {
    content: 'Recursos';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 0 10px;
    color: #333;
    font-weight: bold;
  }
`;

export const ContentContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  padding-right: 16px;
`;