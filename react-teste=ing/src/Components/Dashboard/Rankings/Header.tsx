import { Header as StyledHeader } from './RankingsStyles';
import Trofeu from '../../../Assets/svgs/Home-svgs/Rankings/Trofeu.svg';

const Header = () => (
  <StyledHeader>
    <img src={Trofeu} alt="Trofeu" />
    <h1>Classificações Geral</h1>
    <img src={Trofeu} alt="Trofeu" />
  </StyledHeader>
);

export default Header;
