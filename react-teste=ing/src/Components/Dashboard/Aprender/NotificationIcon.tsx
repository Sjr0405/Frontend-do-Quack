import NotificationsIcon from '@mui/icons-material/Notifications';
import { NotificationIconWrapper, NotificationDot } from './AprenderStyles';

const NotificationIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <NotificationIconWrapper onClick={onClick}>
      <NotificationsIcon style={{ color: '#FFD700', fontSize: '30px' }} />
      <NotificationDot />
    </NotificationIconWrapper>
  );
};

export default NotificationIcon;