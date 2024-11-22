// Login.styles.ts
import styled from 'styled-components';
import { Box, Typography } from "@mui/material";

export const A = styled.a`
  color: white;
  text-decoration: none;
  font-family: "Montserrat Alternates", sans-serif;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #eb832e;
  font-family: "Montserrat Alternates", sans-serif;
  cursor: pointer;

  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  color: #eb832e;
  font-family: "Montserrat Alternates", sans-serif;
  border-radius: 8px;
  border: 1px solid #eb832e;
  padding: 0 16px;
  font-size: 16px;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    border-color: #7A5FF5;
  }
`;

export const StyledTypography = styled(Typography)`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 24px;
  margin-bottom: 20px;

  h3 {
    text-decoration: none;
    font-size: 32px; /* Aumenta a fonte */
    font-family: "Lilita One", sans-serif;
    font-weight: 300;
    margin-top: 50%;
  }

  h4 {
    text-decoration: none;
    font-size: 24px;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 500;
    margin-top: 30%;
  }

  p {
    color: #ffffff;
    text-decoration: none;
    font-family: "Montserrat Alternates", sans-serif;
  }
`;

export const LoginContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f8f9fa;
  overflow-x: hidden; /* Evita rolagem horizontal */
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
  }
`;

export const FormSection = styled(Box)`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

export const ImageSection = styled(Box)`
  background-image: url("/src/svgs/Login-svgs/1.svg");
  background-repeat: no-repeat;
  background-size: cover; /* Ajusta a imagem para cobrir toda a área */
  background-position: left; /* Estica a imagem para a esquerda */
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  font-family: "Lilita One", sans-serif;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    background-position: top;
  }
`;

export const Form = styled.form`
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const StyledButton = styled.button`
  color: white;
  background-color: #7A5FF5;
  border-radius: 8px;
  height: 50px;
  font-size: 16px;
  width: 100%;
  margin-top: 20px;
  border: none;
  cursor: pointer;
  font-family: "Montserrat Alternates", sans-serif;

  &:hover {
    background-color: #3700b3;
  }
  @media (max-width: 768px) {
    height: 40px;
    font-size: 14px;
  }
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
  @media (max-width: 768px) {
    height: 40px;
    font-size: 14px;
  }
`;

export const LoginLink = styled.a`
  color: #eb832e;
  cursor: pointer;
  font-family: "Montserrat Alternates", sans-serif;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const DuckImage = styled.img`
  max-width: 500px;
  width: 100%;
  
  margin-top: auto; /* Empurra a imagem para a parte de baixo */
  
  @media (max-width: 768px) {
    width: 60%;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  font-family: "Montserrat Alternates", sans-serif;
  margin-top: -15px;
  margin-bottom: 10px;
  display: block;
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