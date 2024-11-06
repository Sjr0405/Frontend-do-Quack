import { Controller } from "react-hook-form";
import { TextField, Button, Grid, Box, Typography, IconButton } from "@mui/material";
import InputMask from "react-input-mask";
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 
import 'react-image-crop/dist/ReactCrop.css';
import ProfileImageUploader from './ProfileImageUploader.tsx'; 
import { Form, GoogleButton, ImageSection, StyledTypography, Inputinho } from './CadastroStyles';
import { useCadastro } from '../../hooks/auth/useCadastro.ts';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {
  const { handleSubmit, control, errors, onSubmit, setCroppedImageUrl } = useCadastro();
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
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

      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 5%' }}>
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
              <IconButton onClick={() => navigate(-1)} aria-label="voltar">
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="h5" sx={{ marginLeft: 1 }}>
                Olá Dev!
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="photo"
                  control={control}
                  render={() => (
                    <>
                      <ProfileImageUploader setCroppedImageUrl={setCroppedImageUrl} />
                      <Inputinho>Tamanho (máximo de 5MB)</Inputinho>
                      {errors.photo && (
                        <Typography color="error">{errors.photo.message}</Typography>
                      )}
                    </>
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Nome completo"
                      variant="outlined"
                      fullWidth
                      error={!!errors.name}
                      helperText={errors.name ? errors.name.message : ""}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="username"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Nome de usuário"
                      variant="outlined"
                      fullWidth
                      error={!!errors.username}
                      helperText={errors.username ? errors.username.message : ""}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="E-mail"
                      variant="outlined"
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email ? errors.email.message : ""}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <InputMask mask="(99) 99999-9999" {...field}>
                      {() => (
                        <TextField
                          label="Telefone"
                          variant="outlined"
                          fullWidth
                          error={!!errors.phone}
                          helperText={errors.phone ? errors.phone.message : ""}
                        />
                      )}
                    </InputMask>
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="cpf"
                  control={control}
                  render={({ field }) => (
                    <InputMask mask="999.999.999-99" {...field}>
                      {() => (
                        <TextField
                          label="CPF"
                          variant="outlined"
                          fullWidth
                          error={!!errors.cpf}
                          helperText={errors.cpf ? errors.cpf.message : ""}
                        />
                      )}
                    </InputMask>
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
                      type="password"
                      label="Senha"
                      variant="outlined"
                      fullWidth
                      error={!!errors.password}
                      helperText={errors.password ? errors.password.message : ""}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="bornAt"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="date"
                      label="Data de Nascimento"
                      variant="outlined"
                      fullWidth
                      error={!!errors.bornAt}
                      helperText={errors.bornAt ? errors.bornAt.message : ""}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ color: 'white' , backgroundColor: '#7A5FF5'}}>
                  Cadastrar
                </Button>
              
                <Typography align="center" sx={{ marginY: 2 }}>
                  ou
                </Typography>

                <GoogleButton>
                  <img src="/src/Icons/Google.svg" alt="Google" style={{ height: '20px', fontFamily: 'Montserrat Alternates', marginRight: '10px' }} />
                  Iniciar sessão com o Google
                </GoogleButton>
              </Grid>
            </Grid>
          </Form>
        </Box>
      </Box>
    </Box>
  );
}