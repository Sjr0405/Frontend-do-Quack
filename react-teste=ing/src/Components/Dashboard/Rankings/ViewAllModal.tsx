import { Box, Typography, Avatar, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
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

interface ViewAllModalProps {
  users: User[];
  onClose: () => void;
}

const ViewAllModal = ({ users, onClose }: ViewAllModalProps) => (
  <Modal open={true} onClose={onClose}>
    <Box sx={{ 
      width: '90%', 
      maxWidth: '600px', 
      margin: 'auto', 
      marginTop: '5%', 
      backgroundColor: 'white', 
      padding: '20px', 
      borderRadius: '8px',
      overflowY: 'auto',
      maxHeight: '80vh',
      position: 'relative',
      fontFamily: 'Montserrat Alternates, sans-serif',
      fontSize: '18px'
    }}>
      <IconButton 
        onClick={onClose} 
        sx={{ 
          position: 'absolute', 
          top: 10, 
          right: 10 
        }}
      >
        <CloseIcon />
      </IconButton>
      <Typography variant="h4" gutterBottom>Todos os Usuários</Typography>
      <StyledUserList>
        {users.map((user) => (
          <ListItem key={user.id}>
            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
              <Box display="flex" alignItems="center">
                <Typography variant="body1">#{user.ranking}</Typography>
                <Avatar 
                  src={user.imagePath || profileIcon} 
                  alt={`${user.name}'s avatar`} 
                  sx={{ width: 50, height: 50, marginLeft: 1, marginRight: 1 }} 
                />
                <Typography variant="body2">{user.name}</Typography>
              </Box>
              <Points>{user.points} pontos</Points>
            </Box>
          </ListItem>
        ))}
      </StyledUserList>
    </Box>
  </Modal>
);

export default ViewAllModal;
