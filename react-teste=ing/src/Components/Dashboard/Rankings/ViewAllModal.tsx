import { Box, Typography, Avatar, Modal } from '@mui/material';
import { UserList as StyledUserList, ListItem, Points } from './RankingsStyles';

interface User {
  id: number;
  name: string;
  fullName: string;
  imagePath: string | null;
  points: number;
  ranking: number;
}

interface ViewAllModalProps {
  users: User[];
  onClose: () => void;
}

const ViewAllModal = ({ users, onClose }: ViewAllModalProps) => (
  <Modal open={true} onClose={onClose}>
    <Box sx={{ width: '80%', margin: 'auto', marginTop: '5%', backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
      <Typography variant="h4" gutterBottom>Todos os Usuários</Typography>
      <StyledUserList>
        {users.map((user) => (
          <ListItem key={user.id}>
            <Box display="flex" alignItems="center" mb={1}>
              <Typography variant="body1">#{user.ranking}</Typography>
              <Avatar 
                src={user.imagePath || ''} 
                alt={`${user.name}'s avatar`} 
                sx={{ width: 50, height: 50, marginLeft: 1, marginRight: 1 }} 
              />
              <Typography variant="body2">{user.name}</Typography>
            </Box>
            <Points>{user.points} pontos</Points>
          </ListItem>
        ))}
      </StyledUserList>
      <button onClick={onClose} style={{ marginTop: '20px', color: 'blue', cursor: 'pointer' }}>Fechar</button>
    </Box>
  </Modal>
);

export default ViewAllModal;
