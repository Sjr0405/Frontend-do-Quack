import { Controller } from "react-hook-form";
import { TextField, Grid, Typography, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';

import { useLogin } from '../../hooks/auth/useLogin';
import {
  A,
  Label,
  Input,
  StyledTypography,
  LoginContainer,
  FormSection,
  ImageSection,
  Form,
  StyledButton,
  GoogleButton,
  LoginLink,
  DuckImage
} from './LoginStyles';


const Login = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    errors,
    showPassword,
    togglePasswordVisibility,
    onSubmit,
    clearErrors,
  } = useLogin();

  return (
    <LoginContainer>
      <FormSection>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h5" style={{textAlign: 'left', fontFamily: 'Lilita One',fontSize: '80px', marginBottom: '20px', color: '#ff7f00' }}>
            Quack()
          </Typography>
          <Typography variant="h6" style={{textAlign: 'left', fontFamily: 'Montserrat Alternates', fontSize: '30px',marginBottom: '10px', fontWeight: 'bold' }}>
            Bem Vindo Dev! <br />
            Jefte o mestre supremo
          </Typography>
          <Typography variant="body2" style={{textAlign: 'left', fontFamily: 'Montserrat Alternates',  marginBottom: '30px', color: '#777' }}>
            Bem vindo de volta dev! Por favor, informe seu Usuário e Senha para entrar na plataforma
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Nome de usuário"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ""}
                    onFocus={() => clearErrors("email")}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Digite sua senha"
                    type={showPassword ? "text" : "password"} // Alterar o tipo do campo de senha
                    fullWidth
                    error={!!errors.password}
                    helperText={errors.password ? errors.password.message : ""}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={togglePasswordVisibility} edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    onFocus={() => clearErrors("password")}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <Label>
                  <Input type="checkbox" style={{fontFamily: 'Montserrat Alternates',color: '#eb832e',  marginRight: '5px' }} />
                  Lembrar senha
                </Label>
              </div>
              <LoginLink onClick={() => navigate('/EsqueciSenha')}>
                Esqueci minha senha
              </LoginLink>
            </Grid>
            <Grid item xs={12}>
              <StyledButton type="submit">Iniciar sessão</StyledButton>
            </Grid>
            <Grid item xs={12}>
              <GoogleButton>
                <img src="/src/Icons/Google.svg" alt="Google" style={{height: '20px',fontFamily: 'Montserrat Alternates', marginRight: '10px' }} />
                Iniciar sessão com o Google
              </GoogleButton>
            </Grid>
          </Grid>

          <Typography style={{ marginTop: '20px' }}>
            Não tem uma conta? <LoginLink onClick={() => navigate('/Cadastro')}>Clique aqui e se inscreva!</LoginLink>
          </Typography>
        </Form>
      </FormSection>

      <ImageSection>
      <StyledTypography variant="body1" style={{ marginTop: '20px' }}>
  <h3>Seja Bem Vindo a Quack()</h3>
  <p>
    <A>A plataforma que tem como missão,<br/> ajudar você a aprender e compreender <br/>a</A>
    <A style={{ color: '#7A5FF5', fontWeight: 'bold' }}> programação!</A>
  </p>
</StyledTypography>
        <DuckImage src="/src/Assets/LogoReverse.svg" alt="Mascote Quack" />
      </ImageSection>
    </LoginContainer>
  );
}

export default Login;