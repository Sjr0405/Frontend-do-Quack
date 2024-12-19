import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';

export const ModalOverlay = styled.div`
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

export const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
  max-height: 90vh; /* Ajuste a altura máxima para 90% da altura da viewport */
  overflow-y: auto; /* Adicione rolagem vertical se o conteúdo exceder a altura máxima */
  padding: 20px;
  position: relative;
`;

export const LinkItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 8px;
`;

export const OrangeCheckbox = styled(Checkbox)`
  color: orange !important;
  margin-right: 10px;
`;

export const LinkType = styled.span<{ type: string }>`
  background-color: ${({ type }) => {
    switch (type) {
      case 'vídeo':
        return '#ffeb3b'; // Amarelo
      case 'artigo':
        return '#2196f3'; // Azul
      case 'livro':
        return '#4caf50'; // Verde
      default:
        return '#9e9e9e'; // Cinza para outros tipos
    }
  }};
  color: black;
  padding: 2px 6px;
  border-radius: 4px;
  margin-right: 10px;
`;

export const LinkText = styled.a`
  color: black;
  text-decoration: none;
`;