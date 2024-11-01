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
    font-size: 24px;
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
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f8f9fa;
`;

export const FormSection = styled(Box)`
  width: 45%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageSection = styled(Box)`
  background-image: url("/src/svgs/Login-svgs/1.svg");
  background-repeat: no-repeat;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  font-family: "Lilita One", sans-serif;
`;

export const Form = styled.form`
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
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
  width: 500px;
  margin-top: 41%;
  margin-right: 25%;
`;