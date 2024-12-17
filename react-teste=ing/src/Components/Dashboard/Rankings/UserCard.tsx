import { Box, Typography } from '@mui/material';
import { UserCard as StyledUserCard, UserImage, UserName, RankingIcon, Points } from './RankingsStyles';
import PrimeiroLugar from '../../../Assets/svgs/Home-svgs/Rankings/PrimeiroLugar.svg';
import SegundoLugar from '../../../Assets/svgs/Home-svgs/Rankings/SegundoLugar.svg';
import TerceiroLugar from '../../../Assets/svgs/Home-svgs/Rankings/TerceiroLugar.svg';
import profileIcon from '../../../Assets/Icons/profile.svg';

interface User {
  id: number;
  name: string;
  fullName: string;
  imagePath: string | null;
  points: number;
  ranking: number;
}

interface UserCardProps {
  user: User;
  isFirst: boolean;
  isSecond: boolean;
  isThird: boolean;
  style: React.CSSProperties;
}

const getRankingIcon = (ranking: number) => {
  if (ranking === 1) return PrimeiroLugar;
  if (ranking === 2) return SegundoLugar;
  if (ranking === 3) return TerceiroLugar;
  return null;
};

const UserCard = ({ user, isFirst, isSecond, isThird, style }: UserCardProps) => (
  <StyledUserCard isFirst={isFirst} isSecond={isSecond} isThird={isThird} style={style}>
    <UserImage src={user.imagePath || profileIcon} alt={`${user.name}'s avatar`} />
    <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
      <RankingIcon src={getRankingIcon(user.ranking) || ''} alt={`Ranking ${user.ranking}`} />
    </Box>
    <UserName>{user.name}</UserName>
    <Typography variant="body1">#{user.ranking}</Typography>
    <Points>{user.points} pontos</Points>
  </StyledUserCard>
);

export default UserCard;
