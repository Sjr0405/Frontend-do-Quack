import { useForm, Controller, SubmitHandler } from "react-hook-form";
import styled from 'styled-components';
import { TextField, Grid, Box, Typography, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import axios from "axios";


const A = styled.a`
  color: white;
  font-size: 30px;
  text-decoration: none;
  font-family: "Montserrat Alternates", sans-serif;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #eb832e;
  font-family: "Montserrat Alternates", sans-serif;
  cursor: pointer;

  &:hover{
    cursor: pointer;
    text-decoration: underline;
    }
`;

const Input = styled.input`
  color: #eb832e;
  font-family: "Montserrat Alternates", sans-serif;
  border-radius: 8px;
  border: 1px solid #eb832e;
  padding: 0 16px;
  font-size: 16px;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    border-color: #7A5FF5;
  }
`;

// Estilos
const StyledTypography = styled(Typography)`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 24px;
  
  margin-bottom: 20px;

  h3 {
    text-decoration: none;
    font-weight:300;
    font-size: 35px;
    font-family: "Lilita One", sans-serif;
    font-weight: 300;
    margin-top: 50%;
  }

  h4 {
    text-decoration: none;
    font-size: 24px;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 500;
    margin-top: 30%;
  }

  p {
    color: #ffffff;
    text-decoration: none;
    font-family: "Montserrat Alternates", sans-serif;
  }
`;

const LoginContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f8f9fa;
`;

const FormSection = styled(Box)`
  width: 45%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageSection = styled(Box)`
  background-image: url("/src/svgs/Login-svgs/1.svg");
  background-repeat: no-repeat;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  font-family: "Lilita One", sans-serif;
`;

const Form = styled.form`
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const StyledButton = styled.button`
  color: white;
  background-color: #7A5FF5;
  border-radius: 8px;
  height: 50px;
  font-size: 16px;
  width: 100%;
  margin-top: 20px;
  border: none;
  cursor: pointer;
  font-family: "Montserrat Alternates", sans-serif;

  &:hover {
    background-color: #3700b3;
  }
`;

const GoogleButton = styled.button`
  background-color: white;
  color: #000;
  border: 1px solid #ddd;
  border-radius: 8px;
  height: 50px;
  font-size: 16px;
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #f8f8f8;
  }
`;

const LoginLink = styled.a`
  color: #eb832e;
  cursor: pointer;
  font-family: "Montserrat Alternates", sans-serif;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const DuckImage = styled.img`
  width: 500px;
  margin-top: 41%;
  margin-right: 25%;
`;

const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup.string().min(8, "A deve ter no mínimo 8 caracteres").required("Senha é obrigatória"),
});

const Login = () => {
  const { handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit: SubmitHandler<{
    email: string; password: string }> = async (data) => {
    try {
      const response = await axios.post('/auth/login', data);
      const { token } = response.data;
  
      if (token) {
        login(data.email, token);
        Swal.fire('Sucesso!', 'Login realizado com sucesso.', 'success').then(() => {
          navigate('/home');
        });

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Falha no Login',
          text: 'E-mail ou senha incorretos.',
          footer: `<a href="/Cadastro" style="color: #eb832e;">Clique aqui para se cadastrar</a>`
        });
      }
    } catch {
      Swal.fire('Erro', 'Houve um problema ao tentar fazer login.', 'error');
    }
    reset();
  };

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
          <A>A plataforma que tem como missão,<br/> ajudar você a aprender e compreender <br/>a</A>
          <A style={{ color: '#7A5FF5', fontWeight: 'bold' }}> programação!</A>
        </StyledTypography>
        <DuckImage src="/src/Assets/LogoReverse.svg" alt="Mascote Quack" />
      </ImageSection>
    </LoginContainer>
  );
}

export default Login;