import { Controller } from "react-hook-form";
import { TextField, Grid, Typography, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff, ArrowBack } from "@mui/icons-material";
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
  LoginLink,
  DuckImage,
  BackButton,
  BackgroundWrapper,
  BackgroundLayerRight
} from './LoginStyles';
import BackgroundImage from '../../Assets/svgs/Login-svgs/teste1.svg';
import LogoReverse from '../../Assets/LogoReverse.svg';

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

  const handleKeyPress = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === 'Enter') {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <LoginContainer>
      <FormSection>
        <Form onSubmit={handleSubmit(onSubmit)} onKeyPress={handleKeyPress}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BackButton onClick={() => navigate('/')}> 
              <ArrowBack />
            </BackButton>
            <Typography variant="h5" style={{textAlign: 'left', fontFamily: 'Lilita One',fontSize: '60px', marginBottom: '20px', color: '#ff7f00' }}>
              Quack()
            </Typography>
          </div>
          <Typography variant="h6" style={{textAlign: 'left', fontFamily: 'Montserrat Alternates', fontSize: '24px',marginBottom: '10px', fontWeight: 'bold' }}>
            Bem Vindo Dev! <br />
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
              <StyledButton type="submit" onClick={() => console.log('Tentando fazer login')}>Iniciar sessão</StyledButton>
            </Grid>
          </Grid>

          <Typography style={{ marginTop: '20px' }}>
            Não tem uma conta? <LoginLink onClick={() => navigate('/Cadastro')}>Clique aqui e se inscreva!</LoginLink>
          </Typography>
        </Form>
      </FormSection>

      <ImageSection >
      <BackgroundWrapper position="right">
        <BackgroundLayerRight src={BackgroundImage} alt="Imagem de fundo" />
      </BackgroundWrapper>
        <StyledTypography variant="body1" style={{ zIndex: 1, marginLeft: "25%"  }}>
          <h3>Seja Bem Vindo a Quack()</h3>
          <p>
            <A>A plataforma que tem como missão,<br/> ajudar você a aprender e compreender <br/>a</A>
            <A style={{ color: '#7A5FF5', fontWeight: 'bold' }}> programação!</A>
          </p>
        </StyledTypography>
        <DuckImage style={{ zIndex: 1 }} src={LogoReverse} alt="Mascote Quack" />
      </ImageSection>
    </LoginContainer>
  );
}

export default Login;