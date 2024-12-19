import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { BackButtonStyled, ArrowIcon } from './BackButtonStyles';

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