import { useForm ,Controller, SubmitHandler } from "react-hook-form";
import { TextField, Grid, Typography, Box, InputAdornment, IconButton, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Container,
  FormSection,
  ImageSection,
  FormWrapper,
  StyledButton,
  LoginLink,
  StyledTypography,
  BackButton,
  BackgroundWrapper,
  BackgroundLayerRight
} from "./EsqueciSenhaStyles";
import { ArrowBack } from "@mui/icons-material";
import Personagem from "../../Assets/Personagem.svg";
import BackgroundImage from "../../Assets/svgs/Cadastro-svgs/1.svg";

type FormData = {
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  phone: string;
  confirmPhone: string;
  code: string[];
};

const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  confirmEmail: yup
    .string()
    .oneOf([yup.ref("email"), undefined], "Os emails devem ser iguais")
    .required("Confirme seu email"),
  password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "As senhas devem ser iguais")
    .required("Confirme sua senha"),
  phone: yup.string().required("Telefone é obrigatório").min(14, "Telefone inválido"),
  confirmPhone: yup
    .string()
    .oneOf([yup.ref("phone"), undefined], "Os numeros devem ser iguais")
    .required("Confirme seu telefone"),
  code: yup
    .array().of(yup.string()
    .required("Cada campo do código é obrigatório"))
    .required("O código é obrigatório"),
});

const EsqueciSenha = () => {
  const [secaoAtiva, setSecaoAtiva] = useState("email");
  const [email, setEmail] = useState<string>(""); 
  const [phone, setPhone] = useState<string>("");
  const [confirmPhone, setConfirmPhone] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [generatedCode] = useState(() => Math.floor( 100000 + Math.random() * 999999 ).toString());
  const navigate = useNavigate();

  const { handleSubmit, control, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 7)
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };
  
  const onSubmit: SubmitHandler<FormData> = () => {
    console.log("Formulário enviado!");
    if (secaoAtiva === "email") {
      if (Object.keys(errors).length === 0) {
        setSecaoAtiva("codigo");
        Swal.fire({
          icon: "info",
          title: "Código enviado!",
          text: `Um código foi enviado para o e-mail: ${email}`,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Erro!",
          text: "Corrija os erros no formulário antes de continuar.",
        });
      }
      reset();
    } else if (secaoAtiva === "telefone") {
      if (Object.keys(errors).length === 0) {
        setSecaoAtiva("codigo");
        Swal.fire({
          icon: "info",
          title: "Código enviado!",
          text: `Um código foi enviado para o telefone: ${phone}`,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Erro!",
          text: "Corrija os erros no formulário antes de continuar.",
        });
      }
      reset();
    } else if (secaoAtiva === "senha") {
      if (Object.keys(errors).length === 0) {
        Swal.fire({
          icon: "success",
          title: "Senha redefinida!",
          text: "Sua senha foi redefinida com sucesso.",
        }).then(() => {
          navigate("/login", { replace: true });
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Erro!",
          text: "Corrija os erros no formulário antes de continuar.",
        });
      }
      reset();
    }
  };
  
  
  const handleVerificarCodigo = (code: string) => {
    const isCodeValid = code === generatedCode;  // Verifique a lógica de validação
    if (isCodeValid) {
      Swal.fire({
        icon: "success",
        title: "Código verificado!",
        text: "Você pode redefinir sua senha.",
      });
      setSecaoAtiva("senha");
    } else {
      Swal.fire({
        icon: "error",
        title: "Código inválido!",
        text: "Por favor, verifique o código e tente novamente.",
      });
    }
  };  

  const handleReenviarCodigo = () => {
    Swal.fire({
      icon: "success",
      title: "Código reenviado!",
      text: `O código foi reenviado para o e-mail: ${email}`,
    });
  };

  const index = 0;
  const nextElement = document.querySelector(
    `input[name="code[${index + 1}]"]`
  ) as HTMLElement;
  if (nextElement && 'focus' in nextElement) nextElement.focus();



  const renderConteudoPainelDireito = () => {
    if (secaoAtiva === "email") {
      return (
        <>
          <Typography variant="body1" align="center" sx={{ mb: 3 , fontFamily: 'Montserrat Alternates'}}>
            Por favor, preencha os campos para redefinir sua senha.
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} id="email">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Endereço de Email"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    onChange={(e) => {
                      field.onChange(e);
                      setEmail(e.target.value);
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="confirmEmail"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Confirme seu Email"
                    fullWidth
                    error={!!errors.confirmEmail}
                    helperText={errors.confirmEmail?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="input-method-label">Escolha o Método</InputLabel>
                <Select
                  labelId="input-method-label"
                  value={secaoAtiva}
                  onChange={(e) => setSecaoAtiva(e.target.value)}
                  label="Escolha o Método"
                >
                  <MenuItem value="email">Usar E-mail</MenuItem>
                  <MenuItem value="telefone">Usar Telefone</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <StyledButton type="submit" >Verificar Email</StyledButton>
            </Grid>
          </Grid>
          </form>
        </>
      );
    } else if (secaoAtiva === "telefone") {
      return (
        <>
          <Typography variant="body1" align="center" sx={{ mb: 3 , fontFamily: 'Montserrat Alternates'}}>
            Por favor, preencha os campos para redefinir sua senha.
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
          
          <Grid container spacing={2}>
            <Grid item xs={12} id="telefone">
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Numero Telefone"
                    fullWidth
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                    value={phone}
                    onChange={(e) => {
                      field.onChange(e);
                      setPhone(formatPhone(e.target.value))
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="confirmPhone"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Confirme seu Telefone"
                    fullWidth
                    error={!!errors.confirmPhone}
                    helperText={errors.confirmPhone?.message}
                    value={confirmPhone}
                    onChange={(e) =>  {
                      field.onChange(e);
                       setConfirmPhone(formatPhone(e.target.value))
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="input-method-label">Escolha o Método</InputLabel>
                <Select
                  labelId="input-method-label"
                  value={secaoAtiva}
                  onChange={(e) => setSecaoAtiva(e.target.value)}
                  label="Escolha o Método"
                >
                  <MenuItem value="email">Usar E-mail</MenuItem>
                  <MenuItem value="telefone">Usar Telefone</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <StyledButton type="submit" >Verificar Telefone</StyledButton>
            </Grid>
          </Grid>
          </form>
        </>
      );
    }else if (secaoAtiva === "codigo") {
      return (
        <>
          <Typography variant="body1" align="center" sx={{ mb: 3 , fontFamily: 'Montserrat Alternates'}}>
            Digite o código enviado para {email || phone}.
          </Typography>
          <Grid container spacing={1} justifyContent="center">
            {[...Array(6)].map((_, index) => (
              <Grid item key={index} id={`code-${index}`}>
                <Controller
                  name={`code.${index}`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      inputProps={{
                        maxLength: 1,
                        style: { textAlign: "center" },
                      }}
                      onChange={(e) => {
                        field.onChange(e);
                        if (e.target.value.length === 1) {
                          const nextElement = document.querySelector(`input[name="code.${index + 1}"]`) as HTMLInputElement;
                          if (nextElement) nextElement.focus();
                        }
                        const currentValues = [...Array(6)].map((_, i) => {
                          const inputElement = document.querySelector(
                            `input[name="code.${i}"]`
                          ) as HTMLInputElement;
                          return inputElement?.value || "";
                        });
                        const fullCode = currentValues.join("");
                        if (fullCode.length === 6) {
                          handleVerificarCodigo(fullCode);
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "ArrowLeft") {
                          const prevElement = document.querySelector(`input[name="code.${index - 1}"]`) as HTMLInputElement;
                          if (prevElement) prevElement.focus();
                        } else if (e.key === "ArrowRight") {
                          const nextElement = document.querySelector(`input[name="code.${index + 1}"]`) as HTMLInputElement;
                          if (nextElement) nextElement.focus();
                        } else if (e.key === "Backspace" && !field.value) {
                          const prevElement = document.querySelector(`input[name="code.${index - 1}"]`) as HTMLInputElement;
                          if (prevElement) prevElement.focus();
                        }
                      }}
                      variant="outlined"
                      sx={{
                        width: 50,
                        height: 50,
                        margin: 0,
                      }}
                    />
                  )}
                />
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <StyledButton type="submit" onClick={handleReenviarCodigo}>Reenviar Código</StyledButton>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" align="center">
                Lembrou a senha?{" "}
                <LoginLink onClick={() => navigate("/Login")}>
                  Clique aqui para Entrar
                </LoginLink>
              </Typography>
            </Grid>
          </Grid>
        </>
      );
    } else if (secaoAtiva === "senha") {
      return (
        <>
          <Typography variant="body1" align="center" sx={{ mb: 3, fontFamily: 'Montserrat Alternates' }}>
            Insira sua nova senha.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} id="password">
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Nova Senha"
                    fullWidth
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={togglePasswordVisibility} edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Confirme sua nova Senha"
                    fullWidth
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={togglePasswordVisibility} edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledButton onClick={handleSubmit(onSubmit)}>Redefinir Senha</StyledButton>
            </Grid>
          </Grid>
        </>
      );
    }
    return null;
  };

  return (
    <Container>
      <ImageSection sx={{ flex: 2 }}>
        <BackgroundWrapper position="left">
          <BackgroundLayerRight src={BackgroundImage} alt="Imagem de fundo" />
        </BackgroundWrapper>
        <Box sx={{ zIndex : 1 }}>
          <StyledTypography>
            <h4>Faltam poucos passos<br /> para<br /> se tornar um Dev!</h4>
          </StyledTypography>
          <img src={Personagem} alt="Ilustração" style={{ width: '80%'}} />
        </Box>
      </ImageSection>
      <FormSection>
        <FormWrapper>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <BackButton onClick={() => {
              if (secaoAtiva === "email") {
                navigate("/Login");
              } else {
                setSecaoAtiva("email");
              }
            }} style={{ marginRight: '16px', zIndex: 1 }}>
              <ArrowBack />
            </BackButton>
            <Typography variant="h5" sx={{ flexGrow: 1, textAlign: 'center', marginLeft: '-50px' }}>
              Olá Dev!
            </Typography>
          </div>
          {renderConteudoPainelDireito()}
        </FormWrapper>
      </FormSection>
    </Container>
  );
};

export default EsqueciSenha;
