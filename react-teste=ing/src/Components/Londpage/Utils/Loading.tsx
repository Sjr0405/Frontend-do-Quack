import styled from 'styled-components';

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loading: React.FC = () => (
  <LoadingWrapper>
    <div aria-busy="true" aria-live="polite">Carregando...</div>
  </LoadingWrapper>
);

export default Loading;