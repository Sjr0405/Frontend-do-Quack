import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import { styled as muiStyled } from '@mui/material/styles';

export const CardWrapper = styled.article`
  border-radius: 20px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin-right: -4px;
  padding: 22px 38px 50px;
  border: 1px solid #bfb9b9;
  background-color: white; /* Fundo branco */
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 39px;
    padding: 0 20px;
  }
`;

export const ChallengeTitle = styled.h2`
  color: #fb7901;
  text-align: center;
  font: 400 38px Lilita One, sans-serif;
  @media (max-width: 991px) {
    font-size: 24px;
  }
`;

export const StartButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px; 
`;

export const CustomIconButton = muiStyled(IconButton)({
  backgroundColor: '#fb7901',
  borderRadius: '50%',
  width: '160px',
  height: '160px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontSize: '24px',
  fontWeight: '700',
  fontFamily: 'Montserrat Alternates, -apple-system, Roboto, Helvetica, sans-serif',
  '&:hover': {
    backgroundColor: '#C56003',
  },
  '@media (max-width: 991px)': {
    width: '120px',
    height: '120px',
    fontSize: '18px',
  },
});

export const StartText = styled.span`
  margin-top: 10px;
  font: 700 24px Montserrat Alternates, -apple-system, Roboto, Helvetica, sans-serif;
  color: #fff;
  @media (max-width: 991px) {
    font-size: 18px;
  }
`;

export const IconImage = styled.img`
  width: 100%;
  @media (max-width: 991px) {
    width: 40px;
    height: 40px;
  }
`;