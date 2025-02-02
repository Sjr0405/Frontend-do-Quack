import React, { useState, useEffect } from "react";
import { TextField, Button, LinearProgress, Typography, Modal, Box, IconButton, InputAdornment } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import { useCadastro } from "../../hooks/auth/useCadastro";
import Swal from 'sweetalert2';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BadgeIcon from '@mui/icons-material/Badge';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {
  PageContainer,
  Header,
  BackButton,
  EnterButton,
  Title,
  FormContainer,
  Form,
  Actions,
  PasswordRequirements,
  StyledHint,
  modalStyle,
  Description,
  Coluna1,
  Coluna2,
  Coluna3,
} from "./CadastroStyles.ts";

const Cadastro = () => {
  const navigate = useNavigate();
  const { onSubmit } = useCadastro();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    cpf: "",
    bornDate: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordColor, setPasswordColor] = useState("#f44336");
  const [passwordHints, setPasswordHints] = useState([
    { text: "Pelo menos 8 caracteres", valid: false },
    { text: "Uma letra maiúscula", valid: false },
    { text: "Uma letra minúscula", valid: false },
    { text: "Um número", valid: false },
  ]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [errors, setErrors] = useState({
    phone: "",
    email: "",
    cpf: ""
  });

  const validateField = (name: string, value: string) => {
    let error = "";
    if (name === "phone" && !/^\(\d{2}\) \d{4,5}-\d{4}$/.test(value)) {
      error = "Telefone inválido";
    } else if (name === "email" && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      error = "Email com formato incorreto";
    } else if (name === "cpf" && !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value)) {
      error = "CPF inválido";
    }
    setErrors({ ...errors, [name]: error });
  };

  const evaluatePassword = (password: string) => {
    const hints = [
      { text: "Pelo menos 8 caracteres", valid: password.length >= 8 },
      { text: "Uma letra maiúscula", valid: /[A-Z]/.test(password) },
      { text: "Uma letra minúscula", valid: /[a-z]/.test(password) },
      { text: "Um número", valid: /\d/.test(password) },
    ];
    const strength = hints.filter((hint) => hint.valid).length * 25;
    const color =
      strength === 100 ? "#4caf50" : strength >= 50 ? "#ff9800" : "#f44336";

    setPasswordHints(hints);
    setPasswordStrength(strength);
    setPasswordColor(color);
  };

  const applyPhoneMask = (value: string) => {
    return value
      .replace(/\D/g, "")
      .slice(0, 11) // Limita a quantidade de números a 11
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{4,5})(\d{4})$/, "$1-$2");
  };

  const applyCpfMask = (value: string) => {
    return value
      .replace(/\D/g, "")
      .slice(0, 11) // Limita a quantidade de números a 11
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  };

  const applyDateMask = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .slice(0, 10); // Limita a quantidade de caracteres a 10 (dd/mm/yyyy)
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let maskedValue = value;

    if (name === "phone") {
      maskedValue = applyPhoneMask(value);
    } else if (name === "cpf") {
      maskedValue = applyCpfMask(value);
    } else if (name === "bornDate") {
      maskedValue = applyDateMask(value);
    }

    setFormData({ ...formData, [name]: maskedValue });
    validateField(name, maskedValue);

    if (name === "password") {
      evaluatePassword(value);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      surname: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      cpf: "",
      bornDate: "",
    });
    setPasswordStrength(0);
    setPasswordColor("#f44336");
    setPasswordHints([
      { text: "Pelo menos 8 caracteres", valid: false },
      { text: "Uma letra maiúscula", valid: false },
      { text: "Uma letra minúscula", valid: false },
      { text: "Um número", valid: false },
    ]);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "As senhas não coincidem!",
      });
      return;
    }
    Swal.fire({
      title: 'Confirmação',
      text: "Deseja realmente criar a conta?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, criar conta!'
    }).then((result) => {
      if (result.isConfirmed) {
        onSubmit({
          ...formData,
          bornAt: formData.bornDate,
        });
      }
    });
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <PageContainer>
      <Header>
        <Coluna1>
          <BackButton onClick={() => navigate("/login")}>
            <ArrowBackIcon />
          </BackButton>
        </Coluna1>
        <Coluna2>
          <Title>Cadastro</Title>
        </Coluna2>
        <Coluna3>
          <EnterButton 
            variant="outlined" 
            onClick={() => navigate("/login")}
          >
            Entrar
          </EnterButton>
        </Coluna3>
      </Header>
      <FormContainer>
        <Description>
          Aqui é a tela de cadastro onde você preenche os campos com suas informações pessoais para criar uma nova conta.
        </Description>
        <Form onSubmit={handleSubmitForm} onReset={handleReset}>
          <TextField
            label="Nome"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Sobrenome"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Telefone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
            error={!!errors.phone}
            helperText={errors.phone}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            variant="outlined"
            fullWidth
            required
            error={!!errors.email}
            helperText={errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="CPF"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
            error={!!errors.cpf}
            helperText={errors.cpf}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BadgeIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Data de Nascimento"
            name="bornDate"
            value={formData.bornDate}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarTodayIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Senha"
            name="password"
            value={formData.password}
            onChange={handleChange}
            type={showPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Confirmar Senha"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            type={showConfirmPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle confirm password visibility"
                    onClick={handleClickShowConfirmPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <PasswordRequirements>
            {passwordHints.map((hint, index) => (
              <StyledHint key={index} valid={hint.valid}>
                {hint.valid ? `✔ ${hint.text}` : `✘ ${hint.text}`}
              </StyledHint>
            ))}
            <div style={{ gridColumn: 'span 2' }}>
              <LinearProgress
                variant="determinate"
                value={passwordStrength}
                style={{ backgroundColor: "#e0e0e0", height: "10px", borderRadius: "5px" }}
                sx={{
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: passwordColor,
                  },
                }}
              />
            </div>
          </PasswordRequirements>
          <Actions>
            <Button
              type="submit"
              variant="contained"
              sx={{ 
                backgroundColor: "#800080", 
                "&:hover": { backgroundColor: "#660066" },
                borderRadius: "20px"
              }}
            >
              Criar Conta
            </Button>
          </Actions>
        </Form>
        <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '10px' }}>
          Campos marcados com * são obrigatórios.
        </Typography>
      </FormContainer>
      <Description>
        Ao se cadastrar no Quack ( ), você concorda com os nossos <span style={{ color: '#ff9800', cursor: 'pointer' }} onClick={handleOpen}>Termos e Política de Privacidade</span>.
      </Description>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Bem-vindo aos nossos Termos de Uso. Estes termos descrevem as regras e
            regulamentos para o uso do nosso site.
            <h2>1. Introdução</h2>
            Ao acessar este site, assumimos que você aceita estes termos e
            condições. Não continue a usar o site se você não concordar com todos
            os termos e condições estabelecidos nesta página.
            <h2>2. Cookies</h2>
            Utilizamos cookies. Ao acessar o site, você concorda em usar cookies de
            acordo com a nossa política de privacidade.
            <h2>3. Licença</h2>
            Salvo indicação em contrário, nós e/ou nossos licenciadores possuímos os
            direitos de propriedade intelectual de todo o material no site. Todos
            os direitos de propriedade intelectual são reservados.
            <h2>4. Uso Aceitável</h2>
            Você não deve usar este site de qualquer maneira que cause, ou possa
            causar, danos ao site ou prejudique a disponibilidade ou acessibilidade
            do site.
            <h2>5. Modificações</h2>
            Reservamo-nos o direito de revisar estes termos a qualquer momento. Ao
            usar este site, você concorda em ficar vinculado à versão atual destes
            termos e condições.
            Se você tiver alguma dúvida sobre nossos Termos de Uso, entre em contato
            conosco.
          </Typography>
        </Box>
      </Modal>
    </PageContainer>
  );
};

export default Cadastro;
