import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../AuthContext';
import Swal from 'sweetalert2';
import {
  Typography,
  Button,
  TextField,
  IconButton,
  Avatar,
  InputAdornment,
  DialogContent,
  DialogTitle,
  Divider
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DatePicker } from '@mui/lab';
import {
  StyledContainer,
  BasicInfoContainer,
  ContactInfoContainer,
  SecurityInfoContainer,
  StyledButton,
  StyledLink,
  colorPalette as colors,
  DialogContainer,
  CloseButton
} from './EditarPerfilStyles';

interface EditMode {
  nome: boolean;
  sobrenome: boolean;
  email: boolean;
  telefone: boolean;
}

interface User {
  name: string;
  email: string;
  surname: string;
  username: string;
  phone: string;
  bornDate: string;
  imagePath: string;
  password?: string;
  id?: number;
  fullName?: string;
  registerOn?: string;
  isActive?: boolean;
}

const EditarPerfil = () => {
  const { user, updateUserProfile, updateUserPassword } = useAuth() as { user: User; updateUserProfile: (user: User) => Promise<void>; updateUserPassword: (userId: number, newPassword: string) => Promise<void> };
  const navigate = useNavigate();

  const [nome, setNome] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [sobrenome, setSobrenome] = useState(user?.surname || '');
  const [nomeUsuario, setNomeUsuario] = useState(user?.username || '');
  const [telefone, setTelefone] = useState(user?.phone || '');
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [modificado, setModificado] = useState(false);
  const [mostrarSenhaAtual, setMostrarSenhaAtual] = useState(false);
  const [mostrarNovaSenha, setMostrarNovaSenha] = useState(false);
  const [dialogoAberto, setDialogoAberto] = useState(false);
  const [dataNascimento, setDataNascimento] = useState(user?.bornDate || '');
  const [imagemPerfil, setImagemPerfil] = useState(user?.imagePath || '');
  const [editMode, setEditMode] = useState<EditMode>({
    nome: false,
    sobrenome: false,
    email: false,
    telefone: false,
  });

  const handleEditClick = (field: keyof EditMode) => {
    setEditMode((prevState) => ({ ...prevState, [field]: !prevState[field] }));
  };

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
      novaSenha.length > 0 ||
      dataNascimento !== user?.bornDate ||
      imagemPerfil !== user?.imagePath
    );
  }, [nome, email, sobrenome, nomeUsuario, telefone, novaSenha, dataNascimento, imagemPerfil, user]);

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

        if (novaSenha) {
          await updateUserPassword(user.id!, novaSenha);
        }

        await updateUserProfile(dadosAtualizados);

        localStorage.setItem('user', JSON.stringify({ ...user, ...dadosAtualizados }));

        setSenhaAtual('');
        setNovaSenha('');

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

  const handleRemoverImagem = () => {
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
    }
    setDialogoAberto(false);
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else {
      value = value.replace(/^(\d*)/, '($1');
    }
    setTelefone(value);
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
      <div style={{ marginBottom: '24px' }}>
        <Typography variant="h6" fontWeight="bold" style={{ color: colors.text }}>Informações Básicas</Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Algumas informações podem estar visíveis para outras pessoas que estejam usando os serviços do quack()
        </Typography>
        <BasicInfoContainer>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ position: 'relative' }}>
              <Avatar
                src={imagemPerfil || 'https://via.placeholder.com/120'}
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
      <Divider style={{ margin: '16px 0', backgroundColor: colors.primary }} />
      <div style={{ marginBottom: '24px' }}>
        <Typography variant="h6" fontWeight="bold" style={{ color: colors.text }}>Informações de Contato</Typography>
        <ContactInfoContainer>
          <TextField
            label="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
            fullWidth
            margin="normal"
            disabled={!editMode.nome}
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => handleEditClick('nome')} style={{ color: colors.primary }}>
                  <EditIcon />
                </IconButton>
              )
            }}
          />
          <TextField
            label="Sobrenome"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            placeholder="Sobrenome"
            fullWidth
            margin="normal"
            disabled={!editMode.sobrenome}
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => handleEditClick('sobrenome')} style={{ color: colors.primary }}>
                  <EditIcon />
                </IconButton>
              )
            }}
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            fullWidth
            margin="normal"
            disabled={!editMode.email}
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => handleEditClick('email')} style={{ color: colors.primary }}>
                  <EditIcon />
                </IconButton>
              )
            }}
          />
          <TextField
            label="Nome de Usuário"
            value={nomeUsuario}
            onChange={(e) => setNomeUsuario(e.target.value)}
            placeholder="Nome de Usuário"
            fullWidth
            margin="normal"
            disabled
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  @
                </InputAdornment>
              )
            }}
          />
          <TextField
            label="Número de Telefone"
            type="tel"
            value={telefone}
            onChange={handleTelefoneChange}
            placeholder="Telefone"
            fullWidth
            margin="normal"
            disabled={!editMode.telefone}
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => handleEditClick('telefone')} style={{ color: colors.primary }}>
                  <EditIcon />
                </IconButton>
              )
            }}
          />
          <DatePicker
            label="Data de Nascimento"
            value={dataNascimento}
            onChange={(newValue: any) => setDataNascimento(newValue)}
            renderInput={(params: any) => <TextField {...params} fullWidth margin="normal" disabled />}
          />
        </ContactInfoContainer>
      </div>
      <Divider style={{ margin: '16px 0', backgroundColor: colors.primary }} />
      <div style={{ marginBottom: '24px' }}>
        <Typography variant="h6" fontWeight="bold" style={{ color: colors.text }}>Segurança</Typography>
        <SecurityInfoContainer>
          <TextField
            label="Senha Atual"
            type={mostrarSenhaAtual ? 'text' : 'password'}
            value={senhaAtual}
            onChange={(e) => setSenhaAtual(e.target.value)}
            placeholder="Senha Atual"
            fullWidth
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setMostrarSenhaAtual(!mostrarSenhaAtual)}
                    style={{ color: colors.primary }}
                  >
                    {mostrarSenhaAtual ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <TextField
            label="Nova Senha"
            type={mostrarNovaSenha ? 'text' : 'password'}
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
            placeholder="Nova Senha"
            fullWidth
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setMostrarNovaSenha(!mostrarNovaSenha)}
                    style={{ color: colors.primary }}
                  >
                    {mostrarNovaSenha ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </SecurityInfoContainer>
      </div>
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
            <Avatar
              src={imagemPerfil || 'https://via.placeholder.com/100'}
              alt="Perfil"
              style={{ width: '100px', height: '100px', borderRadius: '50%' }}
            />
          </div>
          <Typography variant="caption" color="textSecondary">
            Visível para todos.
          </Typography>
          <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-evenly' }}>
            <Button
              variant="contained"
              component="label"
              startIcon={<EditIcon />}
              style={{ backgroundColor: colors.primary, color: 'white', borderRadius: '16px' }}
            >
              Escolher Imagem
              <input
              type="file"
              hidden
              onChange={handleEscolherImagem}
              />
            </Button>
            <Button
              variant="contained"
              startIcon={<DeleteIcon />}
              onClick={handleRemoverImagem}
              style={{ backgroundColor: 'red', color: 'white', borderRadius: '16px' }}
            >
              Remover
            </Button>
          </div>
          <Button
            variant="contained"
            style={{ marginTop: '16px', backgroundColor: 'purple', color: 'white', borderRadius: '16px' }}
            onClick={handleSalvarImagem}
          >
            Salvar Imagem
          </Button>
         
        </DialogContent>
      </DialogContainer>
    </StyledContainer>
  );
};

export default EditarPerfil;