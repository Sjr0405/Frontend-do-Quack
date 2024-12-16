import { DialogContent, DialogTitle, Typography, Avatar, Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { DialogContainer, CloseButton } from './EditarPerfilStyles';
import defaultProfileImage from '../../../Assets/Icons/profile.svg';

interface ProfileImageDialogProps {
  dialogoAberto: boolean;
  handleFecharDialogo: () => void;
  imagemPerfil: string;
  handleEscolherImagem: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSalvarImagem: () => void;
}

const ProfileImageDialog = ({
  dialogoAberto,
  handleFecharDialogo,
  imagemPerfil,
  handleEscolherImagem,
  handleSalvarImagem,
}: ProfileImageDialogProps) => (
  <DialogContainer open={dialogoAberto} onClose={handleFecharDialogo} maxWidth="xs" fullWidth>
    <DialogTitle style={{ textAlign: 'center', paddingBottom: 0 }}>
      Editar Foto do Perfil
      <CloseButton onClick={handleFecharDialogo}>
        <ClearIcon />
      </CloseButton>
    </DialogTitle>
    <DialogContent style={{ textAlign: 'center' }}>
      <Typography variant="body2" color="textSecondary" style={{ marginBottom: '16px' }}>
        Uma foto ajuda as pessoas a reconhecerem você e permite que você saiba quando a conta está conectada
      </Typography>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
        <input
          type="file"
          id="upload-input"
          style={{ display: 'none' }}
          onChange={handleEscolherImagem}
        />
        <label htmlFor="upload-input">
          <Avatar
            src={imagemPerfil || defaultProfileImage}
            alt="Perfil"
            style={{ width: '100px', height: '100px', borderRadius: '50%', cursor: 'pointer' }}
          />
        </label>
      </div>
      <Typography variant="caption" color="textSecondary">
        Visível para todos.
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
        <Button
          variant="contained"
          style={{ backgroundColor: 'purple', color: 'white', borderRadius: '16px' }}
          onClick={handleSalvarImagem}
        >
          Salvar Imagem
        </Button>
      </div>
    </DialogContent>
  </DialogContainer>
);

export default ProfileImageDialog;
