import { CardWrapper, ChallengeTitle, StartButtonWrapper, CustomIconButton, StartText, IconImage } from './ChallengeCardStyles';
import Icon from '@mui/material/Icon';

const ChallengeCard = ({ changeSection }: { changeSection: (section: string) => void }) => {
  return (
    <CardWrapper>
      <ChallengeTitle>Vamos colocar suas habilidades à prova!</ChallengeTitle>
      <StartButtonWrapper>
        <CustomIconButton>
          <Icon style={{ width: '80px', height: '80px' }} onClick={() => changeSection('Atividades')}>
            <IconImage src="/src/Assets/iconprogramming.svg" alt="Programming Icon" />
          </Icon>
          <StartText>Iniciar!</StartText>
        </CustomIconButton>
      </StartButtonWrapper>
    </CardWrapper>
  );
}

export default ChallengeCard;