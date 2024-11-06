import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAuth } from '../../AuthContext';
import Swal from 'sweetalert2';
import {
  ProfileEditContainer,
  Header,
  BackButton,
  SaveButton,
  FormContainer,
  FormGroup,
  Label,
  Input,
  PasswordInput,
  EyeIcon,
  PhotoSection,
  PhotoButton,
  RemovePhotoButton,
  LogoContainer,
  LogoImage,
  LogoText
} from './EditarPerfilStyles';

const ProfileEdit = () => {
  const { user, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [username, setUsername] = useState(user?.username || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setUsername(user.username);
      setPhone(user.phone);
    }
  }, [user]);

  const handleSaveChanges = async () => {
    try {
      const updatedData = {
        ...user, // Inclui todos os dados atuais do usuário
        name,
        email,
        username,
        phone,
        ...(newPassword && { password: newPassword }), // Inclui nova senha apenas se fornecida
      };
  
      await updateUserProfile(updatedData); // Chama a função updateUserProfile do AuthContext
  
      // Atualiza o estado do usuário no localStorage
      localStorage.setItem('user', JSON.stringify({ ...user, ...updatedData }));
  
      // Limpa os campos de senha após uma atualização bem-sucedida
      setCurrentPassword('');
      setNewPassword('');
      
      // Exibe mensagem de sucesso e permanece na mesma página
      Swal.fire('Sucesso', 'Perfil atualizado com sucesso!', 'success');
    } catch (error) {
      Swal.fire('Erro', 'Não foi possível atualizar o perfil.', 'error');
      console.error('Erro ao atualizar o perfil:', error);
    }
  };
  

  return (
    <ProfileEditContainer>
      <Header style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <LogoContainer>
          <LogoImage src="src/Assets/Logo.svg" alt="Logo" />
          <LogoText>Quack()</LogoText>
        </LogoContainer>
      </Header>
      <Header>
        <BackButton onClick={() => navigate('/Home', { state: { section: 'Perfil' } })}>
          <ArrowBackIcon style={{ marginRight: '10px' }} /> Voltar
        </BackButton>
        <SaveButton onClick={handleSaveChanges}>Salvar Alterações</SaveButton>
      </Header>
      <FormContainer>
        <PhotoSection>
          <Label>Foto de Perfil</Label>
          <img
            style={{ width: '150px', height: '150px', borderRadius: '50%' }}
            src={user?.imagePath || "https://via.placeholder.com/150"}
            alt="Foto do Perfil"
          />
          <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
            <PhotoButton>
              <img src="/src/svgs/Home-svgs/Perfil/Image.svg" alt="Adicionar Foto" /> Adicionar Foto
            </PhotoButton>
            <RemovePhotoButton>
              <img src="/src/svgs/Home-svgs/Perfil/Trash.svg" alt="Remover Foto" /> Remover Foto
            </RemovePhotoButton>
          </div>
        </PhotoSection>

        <FormGroup>
          <Label>Nome</Label>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
        </FormGroup>

        <FormGroup>
          <Label>Email</Label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        </FormGroup>

        <FormGroup>
          <Label>Nome de Usuário</Label>
          <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        </FormGroup>

        <FormGroup>
          <Label>Número de Telefone</Label>
          <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefone" />
        </FormGroup>

        <FormGroup>
          <Label>Senha Atual</Label>
          <PasswordInput
            type={showCurrentPassword ? 'text' : 'password'}
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Senha Atual"
          />
          <EyeIcon
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            src="/src/svgs/Home-svgs/Perfil/Eye.svg"
            alt={showCurrentPassword ? 'Ocultar Senha' : 'Mostrar Senha'}
          />
        </FormGroup>

        <FormGroup>
          <Label>Nova Senha</Label>
          <PasswordInput
            type={showNewPassword ? 'text' : 'password'}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Nova Senha"
          />
          <EyeIcon
            onClick={() => setShowNewPassword(!showNewPassword)}
            src="/src/svgs/Home-svgs/Perfil/Eye.svg"
            alt={showNewPassword ? 'Ocultar Senha' : 'Mostrar Senha'}
          />
        </FormGroup>
      </FormContainer>
    </ProfileEditContainer>
  );
};

export default ProfileEdit;