import styled from 'styled-components';

export const ContainerPerfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ContainerCabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Conteudo = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ColunasPerfil = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

