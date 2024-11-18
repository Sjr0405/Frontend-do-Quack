import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAuth } from '../../AuthContext';
import Swal from 'sweetalert2';
import styled from 'styled-components';

const ProfileEditContainer = styled.div`
  font-family: 'Montserrat Alternates', sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    font-size: 24px;
    color: #444;
  }
`;

const BackButton = styled.button`
  font-family: 'Montserrat Alternates';
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FF3E41;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 12px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #e62e33;
  }
`;

const SaveButton = styled.button`
  font-family: 'Montserrat Alternates';
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #785ef0;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px 25px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #5841d8;
  }
`;

const FormContainer = styled.div`
  margin-left: 5%;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  position: relative;
  justify-content: center;
`;

const Label = styled.label`
  font-weight: bold;
  font-family: 'Montserrat Alternates';
  margin-bottom: 5px;
  font-size: 20px;
`;

const Input = styled.input`
  font-family: 'Montserrat Alternates';
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const PasswordInput = styled(Input)`
  font-family: 'Montserrat Alternates';
  padding-right: 40px;
`;

const EyeIcon = styled.img`
  justify-self: center;
  align-self: center;
  position: absolute;
  right: 2%;
  top: 55%;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

const PhotoSection = styled.div`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const PhotoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F6C761;
  border: none;
  border-radius: 5px;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Montserrat Alternates';

  &:hover {
    background-color: #e5b14c;
  }
`;

const RemovePhotoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #F6C761;
  border-radius: 5px;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Montserrat Alternates';

  &:hover {
    background-color: #f7f7f7;
    border-color: #e5b14c;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
`;

const LogoImage = styled.img`
  margin-right: 10px;
`;

const LogoText = styled.span`
  font-size: 24px;
  font-weight: bold; 
  color: #FC7A02;
`;

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
        ...user,
        name,
        email,
        username,
        phone,
        ...(newPassword && { password: newPassword }),
      };
  
      await updateUserProfile(updatedData);
  
      localStorage.setItem('user', JSON.stringify({ ...user, ...updatedData }));
  
      setCurrentPassword('');
      setNewPassword('');
      
      Swal.fire('Sucesso', 'Perfil atualizado com sucesso!', 'success').then(() => {
        navigate('/Home', { state: { section: 'Perfil' } });
      });
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