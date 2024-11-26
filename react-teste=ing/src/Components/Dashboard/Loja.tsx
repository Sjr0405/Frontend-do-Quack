import {
  Grid,
  Box,
  Typography,
  Button,
  Card,
  Avatar,
  Container,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import ShieldIcon from "@mui/icons-material/Shield";
import EventIcon from "@mui/icons-material/Event";
import { useNavigate } from "react-router-dom";
import PatoSvg from "../../Assets/Svg_thigas/VETOR PATO.svg";
import { SvgIconComponent } from "@mui/icons-material";

// Componente para itens da loja
const StoreItem = ({
  Icon,
  title,
  description,
  actionLabel,
  actionColor,
  iconColor,
}: {
  Icon: SvgIconComponent;
  title: string;
  description: string;
  actionLabel?: string;
  actionColor?: string;
  iconColor?: string;
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/home"); // Temporariamente redirecionando para a mesma página
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb={3}
      sx={{
        padding: 2,
        borderRadius: "12px",
        backgroundColor: "#fff",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box display="flex" alignItems="center">
        <Avatar
          sx={{
            width: 56,
            height: 56,
            marginRight: 2,
            backgroundColor: iconColor || "#f5f5f5",
          }}
        >
          <Icon fontSize="large" style={{ color: "#fff" }} />
        </Avatar>
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </Box>
      </Box>
      {actionLabel && (
        <Button
          onClick={handleButtonClick}
          variant="contained"
          sx={{
            backgroundColor: actionColor,
            color: "#fff",
            minWidth: 150, // Tamanho mínimo para os botões
            borderRadius: "12px",
            fontWeight: "bold",
          }}
        >
          {actionLabel}
        </Button>
      )}
    </Box>
  );
};

const Loja = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: 1,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginBottom: 3,
            fontWeight: "bold",
            color: "#7a5ff5",
            fontFamily: 'Montserrat Alternates', // Aplicando a fonte Lilita One

          }}
        >
          Bem-vindo à Loja Quack!
        </Typography>
        <Grid container spacing={4}>
          {/* Coluna principal */}
          <Grid item xs={12} md={8}>
            {/* Banner Superior */}
            <Card
              sx={{
                position: "relative", // Importante para posicionar a imagem dentro do card
                borderRadius: "16px",
                boxShadow: 3,
                backgroundColor: "#7a5ff5",
                color: "#fff",
                padding: 3,
                overflow: "hidden", // Garantir que a imagem não ultrapasse os limites do Card
              }}
            >
              {/* Imagem do Pato */}
              <Box
                component="img"
                src={PatoSvg}
                alt="Vetor Pato"
                sx={{
                  position: "absolute",
                  right: 50,
                  bottom: 0,
                  width: "70px", // Ajuste o tamanho conforme necessário
                }}
              />
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{
                    marginBottom: 2,
                    textAlign: "left",
                    position: "relative", // Para garantir que o texto fique acima do SVG
                    zIndex: 1, // Garantir que o texto fique acima do SVG
                  }}
                >
                  Experimente o Quack Turbo por 2 semanas grátis e aproveite benefícios exclusivos!
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#7a5ff5",
                    borderRadius: "16px",
                    fontWeight: "bold",
                    minWidth: 150,
                    position: "relative", // Para garantir que o botão fique acima do SVG
                    zIndex: 1, // Garantir que o botão fique acima do SVG
                  }}
                >
                  COMEÇAR 14 DIAS GRÁTIS
                </Button>
              </Box>
            </Card>

            {/* Seção Vidas */}
            <Box mt={4}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Vidas
              </Typography>
              <StoreItem
                Icon={FavoriteIcon}
                title="Recuperar vidas"
                description="Recupere todas as suas vidas para se preocupar menos com os erros nas lições."
                actionLabel="CHEIO"
                actionColor="#C4C4C4"
                iconColor="#FF5F5F"
              />
              <StoreItem
                Icon={AllInclusiveIcon}
                title="Vidas ilimitadas"
                description="Com o Quack Turbo, você nunca fica sem vidas!"
                actionLabel="TESTAR GRÁTIS"
                actionColor="#FF914D"
                iconColor="#00CFFF"
              />
            </Box>

            {/* Seção Superpoderes */}
            <Box mt={4}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Superpoderes
              </Typography>
              <StoreItem
                Icon={ShieldIcon}
                title="Bloqueio de ofensiva"
                description="Mantenha a sua ofensiva intacta mesmo se você deixar de praticar por 24 horas."
                actionLabel="POR: 200"
                actionColor="#FFC107"
                iconColor="#6A1B9A"
              />
              <StoreItem
                Icon={EventIcon}
                title="Aposta: o dobro ou nada"
                description="Mantenha 7 dias de ofensiva para dobrar a sua aposta de 50 cristais."
                actionLabel="POR: 50"
                actionColor="#FF5722"
                iconColor="#FF9800"
              />
            </Box>
          </Grid>

          {/* Barra lateral */}
          <Grid item xs={12} md={4}>
            {/* Divisão */}
            <Card
              sx={{
                borderRadius: "16px",
                boxShadow: 3,
                padding: 3,
                backgroundColor: "#fff",
                border: "1px solid #e0e0e0",
              }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Divisão Prata
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                Faça uma lição para entrar no ranking desta semana e competir com outras pessoas.
              </Typography>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  borderColor: "#7a5ff5",
                  color: "#7a5ff5",
                  fontWeight: "bold",
                }}
              >
                VER DIVISÃO
              </Button>
            </Card>

            {/* Missões do Dia */}
            <Card
              sx={{
                borderRadius: "16px",
                boxShadow: 3,
                padding: 3,
                mt: 3,
                backgroundColor: "#fff",
                border: "1px solid #e0e0e0",
              }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Missões do dia
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                Ganhe 10 XP
              </Typography>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  borderColor: "#7a5ff5",
                  color: "#7a5ff5",
                  fontWeight: "bold",
                }}
              >
                VER TODAS
              </Button>
            </Card>

            {/* Anúncio */}
            <Card
              sx={{
                borderRadius: "16px",
                boxShadow: 3,
                background: "linear-gradient(90deg, #FB7901, #FF914D)",
                color: "#fff",
                padding: 3,
                mt: 3,
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Usando um bloqueador de anúncios?
              </Typography>
              <Typography variant="body2" gutterBottom>
                Apoie a educação com o Quack Turbo e vamos remover os anúncios para você.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: "#fff",
                  color: "#FB7901",
                  borderRadius: "16px",
                  fontWeight: "bold",
                }}
              >
                EXPERIMENTE O TURBO DE GRAÇA
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Loja;
