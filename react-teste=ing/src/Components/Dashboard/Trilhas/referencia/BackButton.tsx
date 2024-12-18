import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButtonStyled = styled.button`
  background-color: #FF3E41;
  color: #FFFFFF;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Montserrat Alternates', sans-serif;
  border-radius: 20px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e62e33;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const ArrowIcon = styled.div`
  margin-right: 12px;
  color: #FFFFFF;
  width: 24px;
  height: 24px;
`;

const BackButton: React.FC = () => {
  return (
    <BackButtonStyled onClick={() => window.history.back()}>
      <ArrowIcon>
        <FontAwesomeIcon icon={faArrowLeft} />
      </ArrowIcon>
      Voltar
    </BackButtonStyled>
  );
};

export default BackButton;