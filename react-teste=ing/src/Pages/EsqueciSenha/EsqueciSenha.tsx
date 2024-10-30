import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";

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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
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

const RightPanel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled(Box)`
  width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export default function EsqueciSenhaData() {
  const [activeSection, setActiveSection] = useState("email");
  const [email, setEmail] = useState("");
  const { handleSubmit, control, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    console.log(errors); 
  
    if (activeSection === "email" && Object.keys(errors).length === 0) {
      setEmail(data.email);
      setActiveSection("senha");
    } else if (activeSection === "senha") {
      navigate("/login");
    }
    await reset();
    Swal.fire({
      icon: "success",
      title: "Sucesso!",
      text: "Login realizado com sucesso.",
    });
  };
  

  const renderRightPanelContent = () => {
    if (activeSection === "email") {
      return (
        <>
          <Typography variant="h5" align="center" gutterBottom>
            Olá Dev!
          </Typography>
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
                <Button
                  sx={{
                    mt: 2,
                    backgroundColor: "#eb832e",
                    "&:hover": { backgroundColor: "#d06b2a" },
                  }}
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  Verificar seu Email
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" align="center">
                  Lembrou a senha?{" "}
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/Login");
                    }}
                    style={{ color: "#eb832e", textDecoration: "none", marginLeft: "8px", cursor: "pointer" }}
                  >
                    Clique aqui para Entrar
                  </a>
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
                    <Input type="checkbox" style={{fontFamily: 'Montserrat Alternates',color: '#eb832e',  marginRight: '5px' }} />
                    Lembrar senha
                  </Label>
                </div>
              </Grid>
              <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '-30px' }}>
                <Button
                  sx={{
                    mt: 2,
                    backgroundColor: "#eb832e",
                    "&:hover": { backgroundColor: "#d06b2a" },
                  }}
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  Registrar
                </Button>
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

      <RightPanel>
        <FormWrapper>
          {renderRightPanelContent()}
        </FormWrapper>
      </RightPanel>
    </Container>
  );
}
