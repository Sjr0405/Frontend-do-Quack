import styled from 'styled-components';
import { Box, Typography, InputLabel } from "@mui/material";
import BackgroundImage from '../../svgs/Cadastro-svgs/1.svg';

export const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  background: #FFFFFFFF;
  padding: 2rem;
  box-shadow: 0px 10px 20px rgba(0.1, 0.1, 0.1, 0);
  transition: box-shadow 300ms ease, transform 300ms ease;
`;

export const GoogleButton = styled.button`
  background-color: white;
  color: #000;
  border: 1px solid #ddd;
  border-radius: 8px;
  height: 50px;
  font-size: 16px;
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #f8f8f8;
  }
`;

export const ImageSection = styled(Box)`
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  font-family: "Lilita One", sans-serif;
  position: relative;
`;

export const StyledTypography = styled(Typography)`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 24px;

  h3, h4, p {
    text-decoration: none;
  }

  h3 {
    font-size: 24px;
    font-family: "Lilita One", sans-serif;
    margin-top: 30%;
  }

  h4 {
    font-size: 35px;
    font-family: "Montserrat Alternates", sans-serif;
    text-align: left;
    font-weight: 500;
    margin-top: -20%;
  }

  p {
    color: #ffffff;
    font-family: "Montserrat Alternates", sans-serif;
  }
`;

export const Inputinho = styled(InputLabel)`
  font-family: "Lilita One", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: lightgray;
`;

export const BackButton = styled.button`
  background-color: #7A5FF5;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #3700b3;
  }
`;