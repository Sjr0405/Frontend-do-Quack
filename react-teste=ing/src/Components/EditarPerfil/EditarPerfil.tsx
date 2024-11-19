import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import Swal from 'sweetalert2';
import {
  Typography,
  Button,
  TextField,
  IconButton,
  Avatar,
  InputAdornment,
  Dialog,
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
import {
  StyledContainer,
  BasicInfoContainer,
  ContactInfoContainer,
  SecurityInfoContainer,
  StyledButton,
  StyledLink,
  colorPalette as colors
} from './EditarPerfilStyles';

const EditarPerfil = () => {
  const { user, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const [nome, setNome] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [nomeUsuario, setNomeUsuario] = useState(user?.username || '');
  const [telefone, setTelefone] = useState(user?.phone || '');
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [modificado, setModificado] = useState(false);
  const [mostrarSenhaAtual, setMostrarSenhaAtual] = useState(false);
  const [mostrarNovaSenha, setMostrarNovaSenha] = useState(false);
  const [dialogoAberto, setDialogoAberto] = useState(false);
  const [cpf, setCpf] = useState(user?.cpf || '');
  const [dataNascimento, setDataNascimento] = useState(user?.bornAt || '');
  const [status, setStatus] = useState(user?.status || 1);
  const [imagemPerfil, setImagemPerfil] = useState(user?.imagePath || '');

  useEffect(() => {
    if (user) {
      setNome(user.name);
      setEmail(user.email);
      setNomeUsuario(user.username);
      setTelefone(user.phone);
      setCpf(user.cpf);
      setDataNascimento(user.bornAt);
      setStatus(user.status);
      setImagemPerfil(user.imagePath);
    }
  }, [user]);

  useEffect(() => {
    setModificado(
      nome !== user?.name ||
      email !== user?.email ||
      nomeUsuario !== user?.username ||
      telefone !== user?.phone ||
      novaSenha.length > 0 ||
      cpf !== user?.cpf ||
      dataNascimento !== user?.bornAt ||
      status !== user?.status ||
      imagemPerfil !== user?.imagePath
    );
  }, [nome, email, nomeUsuario, telefone, novaSenha, cpf, dataNascimento, status, imagemPerfil, user]);

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
        const dadosAtualizados = {
          ...user,
          name: nome,
          email,
          username: nomeUsuario,
          phone: telefone,
          cpf,
          bornAt: dataNascimento,
          status: status.toString(),
          imagePath: imagemPerfil,
          ...(novaSenha && { password: novaSenha }),
        };

        await updateUserProfile(dadosAtualizados);

        localStorage.setItem('user', JSON.stringify({ ...user, ...dadosAtualizados }));

        setSenhaAtual('');
        setNovaSenha('');

        Swal.fire('Sucesso', 'Perfil atualizado com sucesso!', 'success').then(() => {
          navigate('/Home', { state: { section: 'Perfil' } });
        });
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
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => setNome('')} style={{ color: colors.primary }}>
                  <ClearIcon />
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
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => setEmail('')} style={{ color: colors.primary }}>
                  <ClearIcon />
                </IconButton>
              )
            }}
          />
       <TextField
  label="Nome"
  value={nome}
  onChange={(e) => setNome(e.target.value)}
  placeholder="Nome"
  fullWidth
  margin="normal"
  InputProps={{
    endAdornment: (
      <IconButton onClick={() => setNome('')} style={{ color: colors.primary }}>
        <ClearIcon />
      </IconButton>
    )
  }}
/>
          <TextField
            label="Número de Telefone"
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Telefone"
            fullWidth
            margin="normal"
          />
          <TextField
            label="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="CPF"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Data de Nascimento"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            placeholder="Data de Nascimento"
            fullWidth
            margin="normal"
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
      <Dialog open={dialogoAberto} onClose={handleFecharDialogo} maxWidth="xs" fullWidth>
        <DialogTitle style={{ textAlign: 'center', paddingBottom: 0 }}>
          Editar Foto do Perfil
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
      </Dialog>
    </StyledContainer>
  );
};

export default EditarPerfil;