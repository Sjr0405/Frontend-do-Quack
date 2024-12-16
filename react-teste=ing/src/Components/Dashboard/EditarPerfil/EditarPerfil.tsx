import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../AuthContext';
import Swal from 'sweetalert2';
import {
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  StyledContainer,
  StyledButton,
  StyledLink,
  colorPalette as colors,
} from './EditarPerfilStyles';
import BasicInfo from './BasicInfo';
import ContactInfo from './ContactInfo';
import ProfileImageDialog from './ProfileImageDialog';
import { User } from './EditarPerfil.data';

const EditarPerfil = () => {
  const { user, updateUserProfile, updateImage } = useAuth() as { user: User; updateUserProfile: (user: User) => Promise<void>; updateImage: (userId: number, imageFile: File) => Promise<void> };
  const navigate = useNavigate();

  const [nome, setNome] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [sobrenome, setSobrenome] = useState(user?.surname || '');
  const [nomeUsuario, setNomeUsuario] = useState(user?.username || '');
  const [telefone, setTelefone] = useState(user?.phone || '');
  const [modificado, setModificado] = useState(false);
  const [dialogoAberto, setDialogoAberto] = useState(false);
  const [dataNascimento, setDataNascimento] = useState(user?.bornDate || '');
  const [imagemPerfil, setImagemPerfil] = useState(user?.imagePath || '');

  useEffect(() => {
    if (user) {
      setNome(user.name);
      setEmail(user.email);
      setSobrenome(user.surname);
      setNomeUsuario(user.username);
      setTelefone(user.phone);
      setDataNascimento(user.bornDate);
      setImagemPerfil(user.imagePath);
    }
  }, [user]);

  useEffect(() => {
    setModificado(
      nome !== user?.name ||
      email !== user?.email ||
      sobrenome !== user?.surname ||
      nomeUsuario !== user?.username ||
      telefone !== user?.phone ||
      dataNascimento !== user?.bornDate ||
      imagemPerfil !== user?.imagePath
    );
  }, [nome, email, sobrenome, nomeUsuario, telefone, dataNascimento, imagemPerfil, user]);

  const handleSalvarAlteracoes = async () => {
    const result = await Swal.fire({
      title: 'Você tem certeza?',
      text: 'Deseja realmente alterar o perfil do usuário?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, alterar!',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      try {
        const dadosAtualizados: User = {
          ...user,
          name: nome,
          email,
          surname: sobrenome,
          username: nomeUsuario,
          phone: telefone,
          bornDate: dataNascimento,
          imagePath: imagemPerfil,
        };

        await updateUserProfile(dadosAtualizados);

        localStorage.setItem('user', JSON.stringify({ ...user, ...dadosAtualizados }));

        Swal.fire('Sucesso', 'Perfil atualizado com sucesso!', 'success');
      } catch (error) {
        Swal.fire('Erro', 'Não foi possível atualizar o perfil.', 'error');
        console.error('Erro ao atualizar o perfil:', error);
      }
    }
  };

  const handleAbrirDialogo = () => {
    setDialogoAberto(true);
  };

  const handleFecharDialogo = () => {
    setDialogoAberto(false);
  };

  const handleEscolherImagem = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setImagemPerfil(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSalvarImagem = async () => {
    try {
      if (!user?.id) {
        throw new Error('ID do usuário não encontrado.');
      }

      const response = await fetch(imagemPerfil);
      if (!response.ok) {
        throw new Error('Falha ao carregar a imagem para conversão.');
      }

      const blob = await response.blob();
      const imageFile = new File([blob], 'profile-image.png', { type: blob.type });

      console.log('Upload de imagem iniciado:', imageFile);

      await updateImage(user.id, imageFile);

      const dadosAtualizados = {
        ...user,
        imagePath: imagemPerfil,
      };

      await updateUserProfile(dadosAtualizados);

      localStorage.setItem('user', JSON.stringify({ ...user, ...dadosAtualizados }));

      Swal.fire('Sucesso', 'Imagem do perfil atualizada com sucesso!', 'success');
    } catch (error) {
      Swal.fire('Erro', 'Não foi possível atualizar a imagem do perfil.', 'error');
      console.error('Erro ao atualizar a imagem do perfil:', error);
    } finally {
      setDialogoAberto(false);
    }
  };

  return (
    <StyledContainer>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '24px', position: 'relative' }}>
        <IconButton 
          onClick={() => navigate('/Home', { state: { section: 'Perfil' } })}
          style={{ position: 'absolute', left: 0, color: colors.primary }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" fontWeight="bold" style={{ color: colors.text }}>Perfil</Typography>
      </div>
      <Divider style={{ margin: '16px 0', backgroundColor: colors.primary }} />
      <BasicInfo
        imagemPerfil={imagemPerfil}
        handleAbrirDialogo={handleAbrirDialogo}
      />
      <Divider style={{ margin: '16px 0', backgroundColor: colors.primary }} />
      <ContactInfo
        nome={nome}
        setNome={setNome}
        sobrenome={sobrenome}
        setSobrenome={setSobrenome}
        email={email}
        setEmail={setEmail}
        nomeUsuario={nomeUsuario}
        telefone={telefone}
        setTelefone={setTelefone}
        dataNascimento={dataNascimento}
        setDataNascimento={setDataNascimento}
      />
      <Divider style={{ margin: '16px 0', backgroundColor: colors.primary }} />
      <StyledButton
        onClick={handleSalvarAlteracoes}
        disabled={!modificado}
      >
        Salvar Alterações
      </StyledButton>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '16px' }}>
        <StyledLink href="#">Exportar os meus dados</StyledLink>
        <StyledLink href="#">Excluir a minha conta</StyledLink>
      </div>
      <ProfileImageDialog
        dialogoAberto={dialogoAberto}
        handleFecharDialogo={handleFecharDialogo}
        imagemPerfil={imagemPerfil}
        handleEscolherImagem={handleEscolherImagem}
        handleSalvarImagem={handleSalvarImagem}
      />
    </StyledContainer>
  );
};

export default EditarPerfil;