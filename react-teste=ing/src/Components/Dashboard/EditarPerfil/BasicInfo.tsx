import { Typography, Avatar, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { BasicInfoContainer, colorPalette as colors } from './EditarPerfilStyles';
import defaultProfileImage from '../../../Assets/Icons/profile.svg';

interface BasicInfoProps {
  imagemPerfil: string;
  handleAbrirDialogo: () => void;
}

const BasicInfo = ({ imagemPerfil, handleAbrirDialogo }: BasicInfoProps) => (
  <div style={{ marginBottom: '24px' }}>
    <Typography variant="h6" fontWeight="bold" style={{ color: colors.text }}>Informações Básicas</Typography>
    <Typography variant="body2" color="textSecondary" gutterBottom>
      Algumas informações podem estar visíveis para outras pessoas que estejam usando os serviços do quack()
    </Typography>
    <BasicInfoContainer>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '16px' }}>
        <div style={{ position: 'relative' }}>
          <Avatar
            src={imagemPerfil || defaultProfileImage}
            alt="Foto do Perfil"
            style={{ width: '120px', height: '120px', cursor: 'pointer' }}
          />
          <IconButton
            style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: colors.primary, color: 'white' }}
            size="small"
            onClick={handleAbrirDialogo}
          >
            <EditIcon />
          </IconButton>
        </div>
      </div>
      <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center', marginTop: '8px' }}>
        Uma foto de perfil ajuda a personalizar sua conta
      </Typography>
    </BasicInfoContainer>
  </div>
);

export default BasicInfo;
