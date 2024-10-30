import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField, Button, Grid, Box, Typography, IconButton, InputLabel } from "@mui/material";
import InputMask from "react-input-mask";
import { useNavigate } from 'react-router-dom'; 
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from 'sweetalert2';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 
import styled from 'styled-components';
import 'react-image-crop/dist/ReactCrop.css';
import ProfileImageUploader from './ProfileImageUploader.tsx'; 

const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  background: #FFFFFFFF;
  padding: 2rem;
  box-shadow: 0px 10px 20px rgba(0.1, 0.1, 0.1, 0);
  transition: box-shadow 300ms ease, transform 300ms ease;
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

const ImageSection = styled(Box)`
  background-image: url("/src/svgs/Cadastro-svgs/1.svg");
  background-repeat: no-repeat;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  font-family: "Lilita One", sans-serif;
  position: relative;
`;

const StyledTypography = styled(Typography)`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 24px;

  h3 {
    text-decoration: none;
    font-size: 24px;
    font-family: "Lilita One", sans-serif;
    margin-top: 30%;
  }

  h4 {
    text-decoration: none;
    font-size: 35px;
    font-family: "Montserrat Alternates", sans-serif;
    text-align: left;
    font-weight: 500;
    margin-top: -20%;
  }

  p {
    color: #ffffff;
    text-decoration: none;
    font-family: "Montserrat Alternates", sans-serif;
  }
`;

const Inputinho = styled(InputLabel)`
  font-family: "Lilita One", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: lightgray;
`;

const schema = yup.object().shape({
  name: yup.string().required("Nome completo é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  username: yup.string().required("Nome de usuário é obrigatório"),
  phone: yup.string().required("Telefone é obrigatório").min(14, "Telefone inválido"),
  cpf: yup.string().required("CPF é obrigatório").min(14, "CPF inválido"),
  password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Senha é obrigatória"),
  bornAt: yup.string().required("Data de nascimento é obrigatória"),
  photo: yup.array().of(yup.mixed().nullable()).nullable() as yup.Schema<File[] | undefined>,
});

interface FormData {
  name: string;
  email: string;
  username: string;
  phone: string;
  cpf: string;
  password: string;
  bornAt: string;
  photo?: File[] | undefined;
}



export default function Cadastro() {
  const { handleSubmit, control, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("username", data.username);
    formData.append("phone", data.phone.replace(/\D/g, '')); // Remove caracteres não numéricos
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("cpf", data.cpf.replace(/\D/g, '')); // Remove caracteres não numéricos
    formData.append("bornAt", data.bornAt);

    if (croppedImageUrl) {
      const croppedImageBlob = await fetch(croppedImageUrl)
        .then((r) => r.blob())
        .catch((error) => {
          console.error("Erro ao obter blob da imagem cortada:", error);
        });
      if (croppedImageBlob) {
        formData.append("photo", croppedImageBlob, "cropped-image.jpg");
      }
    } else if (data.photo && data.photo[0]) {
      formData.append("photo", data.photo[0], "profile-image.jpg");
    }

    console.log("Dados enviados:", Object.fromEntries(formData.entries()));

    try {
      const response = await fetch('auth/register', {
        method: 'POST',
        body: JSON.stringify({
          name: data.name,
          username: data.username,
          phone: data.phone.replace(/\D/g, ''),
          email: data.email,
          password: data.password,
          cpf: data.cpf.replace(/\D/g, ''),
          bornAt: data.bornAt,
          imagePath: croppedImageUrl || (data.photo && data.photo[0] ? URL.createObjectURL(data.photo[0]) : "")
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });

      console.log("Resposta do servidor:", response);
      console.log("Cabeçalhos da requisição:", response.headers);

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Sucesso!",
          text: "Cadastro realizado com sucesso.",
        }).then(() => navigate("/Login"));
        reset();
      } else {
        const errorData = await response.json().catch(() => null);
        console.error("Erro ao cadastrar o usuário", errorData);
        Swal.fire({
          icon: "error",
          title: "Erro",
          text: errorData?.message || "Algo deu errado!",
          footer: "erro: " + (errorData?.message || "Erro desconhecido"),
        });
      }
    } catch (error: unknown) {
      console.error("Erro na requisição", error);
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Não foi possível realizar o cadastro.",
        footer: "erro: " + (error as Error).message,
      });
    }
  };

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
