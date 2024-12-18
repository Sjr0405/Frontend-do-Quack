import React from 'react';
import styled from 'styled-components';

// Estilos
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 20px;
  position: relative;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  border-bottom: 1px solid #ddd;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  border-top: 1px solid #ddd;
`;

const Button = styled.button`
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

const Description = styled.p`
  font-weight: normal;
  font-size: 1.2rem;
  text-align: left;
`;



const ContentContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  padding-right: 16px;
`;

const NodeModal: React.FC = () => {
  return (
    <ModalOverlay>
      <ModalContent>
        {/* Conteúdo estático do modal */}
        <HeaderContainer>
          <TitleContainer>
            <Title>Título Estático</Title>
            <HeaderRight>
              <button onClick={() => {/* ação de fechar modal */}}>Fechar</button>
            </HeaderRight>
          </TitleContainer>
        </HeaderContainer>
        <ContentContainer>
          <Description>Descrição estática do nó.</Description>
        </ContentContainer>
        <FooterContainer>
          <Button>Concluir</Button>
        </FooterContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default NodeModal;