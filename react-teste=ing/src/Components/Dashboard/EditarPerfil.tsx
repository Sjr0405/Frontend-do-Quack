import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import Swal from 'sweetalert2';
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
  Avatar,
  Link,
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
import InputMask from 'react-input-mask';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  font-family: 'Montserrat Alternates';
  border-radius: 8px;
  padding: 24px;
  margin-top: 24px;
  max-width: 100%; // Ajusta a largura máxima para evitar scroll horizontal
  @media (max-width: 600px) {
    padding: 16px;
    margin-top: 16px;
  }
  overflow-x: hidden; // Adicionado para evitar scroll horizontal
`;

const BasicInfoContainer = styled(Box)`
  margin-top: 24px;
  padding: 24px;
  border-radius: 8px;
  @media (max-width: 600px) {
    padding: 16px;
    margin-top: 16px;
  }
`;

const ContactInfoContainer = styled(Box)`
  margin-top: 24px;
  padding: 24px;
  border-radius: 8px;
  @media (max-width: 600px) {
    padding: 16px;
    margin-top: 16px;
  }
`;

const SecurityInfoContainer = styled(Box)`
  margin-top: 24px;
  padding: 24px;
  border-radius: 8px;
  @media (max-width: 600px) {
    padding: 16px;
    margin-top: 16px;
  }
`;

const StyledBox = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  overflow-x: hidden; // Adicionado para evitar scroll horizontal
`;

const EditarPerfil = () => {
  const { usuario, atualizarPerfilUsuario } = useAuth();
  const navegar = useNavigate();

  const [nome, setNome] = useState(usuario?.name || '');
  const [email, setEmail] = useState(usuario?.email || '');
  const [nomeUsuario, setNomeUsuario] = useState(usuario?.username || '');
  const [telefone, setTelefone] = useState(usuario?.phone || '');
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [modificado, setModificado] = useState(false);
  const [mostrarSenhaAtual, setMostrarSenhaAtual] = useState(false);
  const [mostrarNovaSenha, setMostrarNovaSenha] = useState(false);
  const [dialogoAberto, setDialogoAberto] = useState(false);
  const [imagemSelecionada, setImagemSelecionada] = useState<File | null>(null);
  const [cpf, setCpf] = useState(usuario?.cpf || '');
  const [dataNascimento, setDataNascimento] = useState(usuario?.bornAt || '');

  useEffect(() => {
    if (usuario) {
      setNome(usuario.name);
      setEmail(usuario.email);
      setNomeUsuario(usuario.username);
      setTelefone(usuario.phone);
      setCpf(usuario.cpf);
      setDataNascimento(usuario.bornAt);
    }
  }, [usuario]);

  useEffect(() => {
    setModificado(
      nome !== usuario?.name ||
      email !== usuario?.email ||
      nomeUsuario !== usuario?.username ||
      telefone !== usuario?.phone ||
      novaSenha.length > 0 ||
      cpf !== usuario?.cpf ||
      dataNascimento !== usuario?.bornAt
    );
  }, [nome, email, nomeUsuario, telefone, novaSenha, cpf, dataNascimento, usuario]);

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
          ...usuario,
          name: nome,
          email,
          username: nomeUsuario,
          phone: telefone,
          cpf,
          bornAt: dataNascimento,
          ...(novaSenha && { password: novaSenha }),
        };

        await atualizarPerfilUsuario(dadosAtualizados);

        localStorage.setItem('user', JSON.stringify({ ...usuario, ...dadosAtualizados }));

        setSenhaAtual('');
        setNovaSenha('');

        Swal.fire('Sucesso', 'Perfil atualizado com sucesso!', 'success').then(() => {
          navegar('/Home', { state: { section: 'Perfil' } });
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

  const handleAlterarImagem = () => {
    if (imagemSelecionada) {
      const reader = new FileReader();
      reader.onloadend = () => {
        atualizarPerfilUsuario({ ...usuario, imagePath: reader.result });
        setDialogoAberto(false);
      };
      reader.readAsDataURL(imagemSelecionada);
    }
  };

  const handleImagemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImagemSelecionada(event.target.files[0]);
    }
  };

  return (
    <StyledBox>
      <StyledContainer maxWidth="md">
        <Box display="flex" justifyContent="center" alignItems="center" mb={3} position="relative">
          <IconButton 
            onClick={() => navegar('/Home', { state: { section: 'Perfil' } })}
            sx={{ position: 'absolute', left: 0 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h4" fontWeight="bold">Perfil</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box mb={3}>
          <Typography variant="h6" fontWeight="bold">Informações Básicas</Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Algumas informações podem estar visíveis para outras pessoas que estejam usando os serviços do quack()
          </Typography>
          <BasicInfoContainer>
            <Box display="flex" alignItems="center" mb={2}>
              <Avatar
                src={usuario?.imagePath || 'https://via.placeholder.com/120'}
                alt="Foto do Perfil"
                sx={{ width: 60, height: 60, cursor: 'pointer' }}
              />
              <IconButton
                sx={{ marginLeft: 1 }}
                size="small"
                onClick={handleAbrirDialogo}
              >
                <EditIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              Uma foto de perfil ajuda a personalizar sua conta
            </Typography>
          </BasicInfoContainer>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box mb={3}>
          <Typography variant="h6" fontWeight="bold">Informações de Contato</Typography>
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
                  <IconButton onClick={() => setNome('')}>
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
                  <IconButton onClick={() => setEmail('')}>
                    <ClearIcon />
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
              InputProps={{
                endAdornment: (
                  <IconButton onClick={() => setNomeUsuario('')}>
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
            <InputMask
              mask="999.999.999-99"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            >
              {() => (
                <TextField
                  label="CPF"
                  placeholder="CPF"
                  fullWidth
                  margin="normal"
                />
              )}
            </InputMask>
            <InputMask
              mask="99/99/9999"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
            >
              {() => (
                <TextField
                  label="Data de Nascimento"
                  placeholder="Data de Nascimento"
                  fullWidth
                  margin="normal"
                />
              )}
            </InputMask>
          </ContactInfoContainer>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box mb={3}>
          <Typography variant="h6" fontWeight="bold">Segurança</Typography>
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
                    >
                      {mostrarNovaSenha ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </SecurityInfoContainer>
        </Box>
        <Button
          variant="contained"
          sx={{ width: '100%', padding: 2, fontSize: 18, fontWeight: 'bold', mt: 2 }}
          onClick={handleSalvarAlteracoes}
          disabled={!modificado}
        >
          Salvar Alterações
        </Button>
        <Box display="flex" justifyContent="space-between" width="100%" mt={2}>
          <Link href="#" underline="hover">Exportar os meus dados</Link>
          <Link href="#" underline="hover">Excluir a minha conta</Link>
        </Box>
        <Dialog open={dialogoAberto} onClose={handleFecharDialogo} maxWidth="xs" fullWidth>
          <DialogTitle sx={{ textAlign: 'center', paddingBottom: 0 }}>
            Editar Foto do Perfil
          </DialogTitle>
          <DialogContent sx={{ textAlign: 'center' }}>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
              Uma foto ajuda as pessoas a reconhecerem você e permite que você saiba quando a conta está conectada
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
              <Avatar
                src={imagemSelecionada ? URL.createObjectURL(imagemSelecionada) : usuario?.imagePath || 'https://via.placeholder.com/100'}
                alt="Perfil"
                sx={{ width: 100, height: 100 }}
              />
            </Box>
            <Typography variant="caption" color="textSecondary">
              Visível para todos.
            </Typography>
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-evenly' }}>
              <Button
                variant="contained"
                component="label"
                startIcon={<EditIcon />}
              >
                Escolher Imagem
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImagemChange}
                />
              </Button>
              <Button
                variant="contained"
                startIcon={<DeleteIcon />}
                onClick={handleRemoverImagem}
              >
                Remover
              </Button>
            </Box>
            <Button
              variant="contained"
              sx={{ mt: 2 }}
              onClick={handleAlterarImagem}
              disabled={!imagemSelecionada}
            >
              Salvar Imagem
            </Button>
          </DialogContent>
        </Dialog>
      </StyledContainer>
    </StyledBox>
  );
};

export default EditarPerfil;
