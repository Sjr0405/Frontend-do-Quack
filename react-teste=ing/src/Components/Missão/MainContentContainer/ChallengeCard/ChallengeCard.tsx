import React from 'react';
import { CardWrapper, ChallengeTitle, StartButtonWrapper, CustomIconButton, StartText, IconImage } from './ChallengeCardStyles';
import Icon from '@mui/material/Icon';

const ChallengeCard: React.FC = () => {
  return (
    <CardWrapper>
      <ChallengeTitle>Vamos colocar suas habilidades à prova!</ChallengeTitle>
      <StartButtonWrapper>
        <CustomIconButton>
          <Icon>
            <IconImage src="/src/Assets/iconprogramming.svg" alt="Programming Icon" />
          </Icon>
          <StartText>Iniciar!</StartText>
        </CustomIconButton>
      </StartButtonWrapper>
    </CardWrapper>
  );
}

export default ChallengeCard;