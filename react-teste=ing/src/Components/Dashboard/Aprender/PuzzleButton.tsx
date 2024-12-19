import Puzzle from '../../../Assets/svgs/Home-svgs/Puzzle.svg';
import { PuzzleButton as StyledPuzzleButton } from './AprenderStyles';

const PuzzleButton = ({ onClick }: { onClick: () => void }) => {
  // Função para renderizar o botão de puzzle
  return (
    <StyledPuzzleButton onClick={onClick}>
      <img src={Puzzle} alt="Estrela icon" />
      <p> Missões diário! </p>
    </StyledPuzzleButton>
  );
};

export default PuzzleButton;
