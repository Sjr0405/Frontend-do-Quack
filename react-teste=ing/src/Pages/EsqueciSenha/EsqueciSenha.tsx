import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField, Grid, Box, Typography } from "@mui/material";
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
  StyledTypography,
  Label,
  Input,
  StyledButton,
  LoginLink,
  BackButton
} from './EsqueciSenhaStyles';
import { ArrowBack } from '@mui/icons-material';

// Esquema de validação com Yup
const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  confirmEmail: yup.string()
    .oneOf([yup.ref("email"), undefined], "Os emails devem ser iguais")
    .required("Email é obrigatório"),
  password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "As senhas devem ser iguais")
    .required("Confirme sua senha"),
});

type FormData = {
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
};

const EsqueciSenha = () => {
  const [secaoAtiva, setSecaoAtiva] = useState("email");
  const [email, setEmail] = useState("");
  const { handleSubmit, control, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (secaoAtiva === "email" && Object.keys(errors).length === 0) {
      setEmail(data.email);
      setSecaoAtiva("senha");
    } else if (secaoAtiva === "senha") {
      navigate("/login");
    }
    await reset();
    Swal.fire({
      icon: "success",
      title: "Sucesso!",
      text: "Senha redefinida com sucesso.",
    });
  };

  const renderConteudoPainelDireito = () => {
    if (secaoAtiva === "email") {
      return (
        <>
          <Typography variant="body1" align="center" sx={{ mb: 3 }}>
            Por favor, preencha os campos a seguir, para poder redefinir sua senha.
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Endereço de Email"
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email ? errors.email.message : ""}
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
                      label="Confirme Endereço de Email"
                      fullWidth
                      error={!!errors.confirmEmail}
                      helperText={errors.confirmEmail ? errors.confirmEmail.message : ""}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledButton type="submit">Verificar seu Email</StyledButton>
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
          </form>
        </>
      );
    }

    return (
      <>
        <Typography variant="h5" align="center" gutterBottom>
          Olá Dev!
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 3 }}>
          Seu E-mail é {email} certo? caso o contrário refaça o passo de verificação do E-mail.
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Digite sua Senha"
                    fullWidth
                    error={!!errors.password}
                    helperText={errors.password ? errors.password.message : ""}
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
                    label="Confirme sua Senha"
                    fullWidth
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword ? errors.confirmPassword.message : ""}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <Label>
                  <Input type="checkbox" style={{ marginRight: '5px' }} />
                  Lembrar senha
                </Label>
              </div>
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '-30px' }}>
              <StyledButton type="submit">Registrar</StyledButton>
            </Grid>
          </Grid>
        </form>
      </>
    );
  };

  return (
    <Container>
      <ImageSection sx={{ flex: 2 }}>
        <Box>
          <StyledTypography>
            <h4>
              Faltam poucos passos<br /> para<br /> se tornar um Dev!
            </h4>
          </StyledTypography>
          <img src="src/assets/Personagem.svg" alt="Ilustração" style={{ width: '80%' }} />
        </Box>
      </ImageSection>

      <FormSection>
        <FormWrapper>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <BackButton onClick={() => navigate('/LandingPage')} style={{ marginRight: '16px' }}>
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
}

export default EsqueciSenha;
