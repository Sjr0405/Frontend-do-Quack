import styled from 'styled-components';
import { Button, IconButton, Typography } from '@mui/material';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Centralizar todos os elementos */
  height: 100%;
  width: 100%;
  background-color: #f8f8f8;
  overflow-x: hidden; /* Adicione esta linha */
  overflow-y: auto; /* Adicione esta linha */
  
`;

export const Header = styled.div`

  position: relative; /* Permite alinhamento interno */
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px; /* Ajustar o padding para manter espaçamento igual */
  background-color: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr auto 1fr; /* Dividir em 3 colunas */
  align-items: center;
  justify-content: center; /* Centralizar o texto */
`;

export const BackButton = styled(IconButton)`
  
  justify-self: start; /* Alinhar à esquerda */
  color: #800080;
  &:hover {
    background: rgba(128, 0, 128, 0.1);
    
  }
`;

export const EnterButton = styled(Button)`
  justify-self: end; /* Alinhar à direita */
  color: #800080;
  
  border-color: #800080;
  &:hover {
    border-color: #660066;
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: #333;
  text-align: center;
  
  margin: 0; /* Remover margem para centralizar corretamente */
  
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  background: #ffffff;
  padding: 40px;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Actions = styled.div`
  grid-column: span 2;
  display: flex;
  justify-content: center; /* Centralizar o botão */
  align-items: center;
`;

export const PasswordRequirements = styled.div`
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr 1fr; /* Dividir em 2 colunas */
  gap: 10px;
  margin-top: 10px;
  font-size: 0.9rem;
  color: #666;
`;

export const StyledHint = styled(Typography)<{ valid: boolean }>`
  color: ${({ valid }) => (valid ? "#4caf50" : "#f44336")};
`;

export const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 800,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  borderRadius: '20px',
  overflowY: 'auto',
  maxHeight: '80vh',
};

export const Description = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center;
  margin-top: 20px;
  max-width: 600px;
`;