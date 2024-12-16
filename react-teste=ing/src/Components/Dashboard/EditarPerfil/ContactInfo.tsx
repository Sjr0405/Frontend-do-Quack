import { useState } from 'react';
import { Typography, TextField, IconButton, InputAdornment, TextFieldProps } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { DatePicker } from '@mui/lab';
import { ContactInfoContainer, colorPalette as colors } from './EditarPerfilStyles';

interface ContactInfoProps {
  nome: string;
  setNome: (value: string) => void;
  sobrenome: string;
  setSobrenome: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  nomeUsuario: string;
  telefone: string;
  setTelefone: (value: string) => void;
  dataNascimento: string;
  setDataNascimento: (value: string) => void;
}

const ContactInfo = ({
  nome,
  setNome,
  sobrenome,
  setSobrenome,
  email,
  setEmail,
  nomeUsuario,
  telefone,
  setTelefone,
  dataNascimento,
  setDataNascimento,
}: ContactInfoProps) => {
  const [editMode, setEditMode] = useState({
    nome: false,
    sobrenome: false,
    email: false,
    telefone: false,
  });

  const handleEditClick = (field: keyof typeof editMode) => {
    setEditMode((prevState) => ({ ...prevState, [field]: !prevState[field] }));
  };

  const applyPhoneMask = (value: string) => {
    return value
      .replace(/\D/g, "")
      .slice(0, 11)
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{4,5})(\d{4})$/, "$1-$2");
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = applyPhoneMask(e.target.value);
    setTelefone(maskedValue);
  };

  return (
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
  );
};

export default ContactInfo;
