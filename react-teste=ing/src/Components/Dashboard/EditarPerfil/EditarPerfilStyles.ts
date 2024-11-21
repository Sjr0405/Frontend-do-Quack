import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';

const colors = {
  primary: '#FF6F00',
  secondary: '#FF8F00',
  background: '#FFF',
  text: '#212121',
  shadow: 'rgba(0, 0, 0, 0.2)',
};

export const StyledContainer = styled.div`
  font-family: 'Montserrat Alternates';
  border-radius: 16px;
  background-color: ${colors.background};
  box-shadow: 0 4px 8px ${colors.shadow};
  padding: 24px;
  @media (max-width: 600px) {
    padding: 16px;
  }
  overflow-x: hidden;
`;

export const BasicInfoContainer = styled.div`
  margin-top: 24px;
  padding: 24px;
  border-radius: 16px;
  background-color: ${colors.background};
  box-shadow: 0 4px 8px ${colors.shadow};
  @media (max-width: 600px) {
    padding: 16px;
    margin-top: 16px;
  }
`;

export const ContactInfoContainer = styled.div`
  margin-top: 24px;
  padding: 24px;
  border-radius: 16px;
  background-color: ${colors.background};
  box-shadow: 0 4px 8px ${colors.shadow};
  @media (max-width: 600px) {
    padding: 16px;
    margin-top: 16px;
  }
`;

export const SecurityInfoContainer = styled.div`
  margin-top: 24px;
  padding: 24px;
  border-radius: 16px;
  background-color: ${colors.background};
  box-shadow: 0 4px 8px ${colors.shadow};
  @media (max-width: 600px) {
    padding: 16px;
    margin-top: 16px;
  }
`;

export const StyledButton = styled.button`
  padding: 16px;
  font-size: 18px;
  font-weight: bold;
  margin-top: 16px;
  background-color: ${colors.primary};
  color: white;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 0 4px 8px ${colors.shadow};
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const StyledLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: ${colors.primary};
`;

export const DialogContainer = styled(Dialog)`
  .MuiPaper-root {
    border-radius: 24px;
    max-width: 500px;
  }
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  right: -100px;
  color: ${colors.primary};
`;

export const colorPalette = colors;