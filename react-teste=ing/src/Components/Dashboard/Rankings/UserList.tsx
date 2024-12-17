import { Box, Typography, Avatar } from '@mui/material';
import { UserList as StyledUserList, ListItem, Points } from './RankingsStyles';
import profileIcon from '../../../Assets/Icons/profile.svg';

interface User {
  id: number;
  name: string;
  fullName: string;
  imagePath: string | null;
  points: number;
  ranking: number;
}

interface UserListProps {
  users: User[];
}

const UserList = ({ users }: UserListProps) => (
  <StyledUserList>
    {users.map((user) => (
      <ListItem key={user.id}>
        <Box display="flex" alignItems="center" mb={1}>
          <Typography variant="body1">#{user.ranking}</Typography>
          <Avatar 
            src={user.imagePath || profileIcon} 
            alt={`${user.name}'s avatar`} 
            sx={{ width: 50, height: 50, marginLeft: 1, marginRight: 1 }} 
          />
          <Typography variant="body2">{user.name}</Typography>
        </Box>
        <Points>{user.points} pontos</Points>
      </ListItem>
    ))}
  </StyledUserList>
);

export default UserList;
