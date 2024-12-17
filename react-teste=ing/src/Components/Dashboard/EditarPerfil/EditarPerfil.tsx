import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';
import {
  Typography,
  TextField,
  IconButton,
  Avatar,
  InputAdornment,
  Divider,
  TextFieldProps
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DatePicker } from '@mui/lab';
import {
  StyledContainer,
  BasicInfoContainer,
  ContactInfoContainer,
  StyledButton,
  StyledLink,
  colorPalette as colors
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

interface Address {
  id: number;
  userId: number;
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  number: string;
  isActive: boolean;
}

const EditarPerfil = () => {
  const { user, updateUserProfile, updateImage } = useAuth() as { user: User; updateUserProfile: (user: User) => Promise<void>; updateImage: (userId: number, imageFile: File) => Promise<void> };
  const navigate = useNavigate();

  const [nome, setNome] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [sobrenome, setSobrenome] = useState(user?.surname || '');
  const [nomeUsuario, setNomeUsuario] = useState(user?.username || '');
  const [telefone, setTelefone] = useState(user?.phone || '');
  const [modificado, setModificado] = useState(false);
  const [dataNascimento, setDataNascimento] = useState(user?.bornDate || '');
  const [imagemPerfil, setImagemPerfil] = useState(user?.imagePath || '');
  const [editMode, setEditMode] = useState<EditMode>({
    nome: false,
    sobrenome: false,
    email: false,
    telefone: false,
  });

  const [endereco, setEndereco] = useState<Address>({
    id: 0,
    userId: user?.id || 0,
    street: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    number: '',
    isActive: true,
  });

  const [isCepFetched, setIsCepFetched] = useState(false);

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
      setImagemPerfil(user.imagePath || '../../../Assets/Icons/profile.svg');
      setEndereco({
        id: 0,
        userId: user.id || 0,
        street: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
        number: '',
        isActive: true,
      });
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
        if (imagemPerfil !== user?.imagePath) {
          const fileInput = document.getElementById('upload-input') as HTMLInputElement;
          const file = fileInput?.files?.[0];
          if (file && user?.id) {
            await updateImage(user.id, file);
          }
        }

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

  const handleEscolherImagem = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && user?.id) {
      try {
        await updateImage(user.id, file);
        const reader = new FileReader();
        reader.onloadend = () => {
          if (reader.result) {
            setImagemPerfil(reader.result as string);
          }
        };
        reader.readAsDataURL(file);
      } catch (error) {
        Swal.fire('Erro', 'Não foi possível atualizar a imagem.', 'error');
        console.error('Erro ao atualizar a imagem:', error);
      }
    }
  };

  const applyPhoneMask = (value: string) => {
    return value
      .replace(/\D/g, "")
      .slice(0, 11) // Limita a quantidade de números a 11
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{4,5})(\d{4})$/, "$1-$2");
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = applyPhoneMask(e.target.value);
    setTelefone(maskedValue);
  };

  const handleEnderecoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEndereco((prevState) => ({ ...prevState, [name]: value }));
  };

  const applyCepMask = (value: string) => {
    return value
      .replace(/\D/g, "")
      .slice(0, 8) // Limita a quantidade de números a 8
      .replace(/^(\d{5})(\d)/, "$1-$2");
  };

  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedCep = applyCepMask(e.target.value);
    setEndereco((prevState) => ({ ...prevState, zipCode: maskedCep }));

    const cep = maskedCep.replace(/\D/g, '');
    if (cep.length === 8) {
      try {
        const response = await axios.get(`https://brasilapi.com.br/api/cep/v1/${cep}`);
        const data = response.data;

        if (data) {
          setEndereco((prevState) => ({
            ...prevState,
            street: data.street,
            city: data.city,
            state: data.state,
            country: 'Brasil',
          }));
          setIsCepFetched(true);
        } else {
          Swal.fire('Erro', 'CEP não encontrado.', 'error');
          setIsCepFetched(false);
        }
      } catch {
        Swal.fire('Erro', 'Erro ao buscar o CEP.', 'error');
        setIsCepFetched(false);
      }
    } else {
      setIsCepFetched(false);
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
      <div style={{ marginBottom: '24px' }}>
        <Typography variant="h6" fontWeight="bold" style={{ color: colors.text }}>Informações Básicas</Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Algumas informações podem estar visíveis para outras pessoas que estejam usando os serviços do quack()
        </Typography>
        <BasicInfoContainer>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ position: 'relative' }}>
              <Avatar
                src={imagemPerfil}
                alt="Foto do Perfil"
                style={{ width: '120px', height: '120px', cursor: 'pointer' }}
                onClick={() => document.getElementById('upload-input')?.click()}
              />
              <IconButton
                style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: colors.primary, color: 'white' }}
                size="small"
                onClick={() => document.getElementById('upload-input')?.click()}
              >
                <EditIcon />
              </IconButton>
              <input
                type="file"
                id="upload-input"
                style={{ display: 'none' }}
                onChange={handleEscolherImagem}
              />
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
            onChange={(newValue: unknown) => setDataNascimento(newValue as string)}
            renderInput={(params: TextFieldProps) => <TextField {...params} fullWidth margin="normal" disabled />}
          />
        </ContactInfoContainer>
      </div>
      <Divider style={{ margin: '16px 0', backgroundColor: colors.primary }} />
      <div style={{ marginBottom: '24px' }}>
        <Typography variant="h6" fontWeight="bold" style={{ color: colors.text }}>Informações de Endereço</Typography>
        <ContactInfoContainer>
          <TextField
            label="CEP"
            name="zipCode"
            value={endereco.zipCode}
            onChange={handleCepChange}
            placeholder="CEP"
            fullWidth
            margin="normal"
          />
          <div style={{ display: 'flex', gap: '16px' }}>
            <TextField
              label="Rua"
              name="street"
              value={endereco.street}
              onChange={handleEnderecoChange}
              placeholder="Rua"
              fullWidth
              margin="normal"
              disabled={isCepFetched}
            />
            <TextField
              label="Número"
              name="number"
              value={endereco.number}
              onChange={handleEnderecoChange}
              placeholder="Número"
              fullWidth
              margin="normal"
            />
          </div>
          <TextField
            label="Cidade"
            name="city"
            value={endereco.city}
            onChange={handleEnderecoChange}
            placeholder="Cidade"
            fullWidth
            margin="normal"
            disabled={isCepFetched}
          />
          <TextField
            label="Estado"
            name="state"
            value={endereco.state}
            onChange={handleEnderecoChange}
            placeholder="Estado"
            fullWidth
            margin="normal"
            disabled={isCepFetched}
          />
          <TextField
            label="País"
            name="country"
            value={endereco.country}
            onChange={handleEnderecoChange}
            placeholder="País"
            fullWidth
            margin="normal"
            disabled={isCepFetched}
          />
        </ContactInfoContainer>
      </div>
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
    </StyledContainer>
  );
};

export default EditarPerfil;