import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SadIcon from '../Assets/Svg_thigas/TRISTE.svg';

const Errors = () => {
  const navigate = useNavigate();

  const handleGoHomeClick = () => {
    navigate('/home');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
        padding: 4,
      }}
    >
      <img src={SadIcon} alt="Sad face" style={{ width: 120, height: 120, marginBottom: 16 }} />
      <Typography
        variant="h3"
        sx={{
          fontFamily: 'Montserrat Alternates',
          fontWeight: 'bold',
          color: '#4834d4',
          marginBottom: 2,
        }}
      >
        Erro 404
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#757575',
          marginBottom: 4,
        }}
      >
        Desculpe, a página que você estava procurando não existe. <p> </p>

        Tente voltar para a página inic ial ou entre em contato pelo suporte.
       
      </Typography>
      
      <Button
        variant="contained"
        onClick={handleGoHomeClick}
        sx={{
          backgroundColor: '#FF914D',
          color: '#fff',
          borderRadius: '12px',
          padding: '8px 16px',
          textTransform: 'none',
        }}
      >
        Voltar para a página inicial
      </Button>
    </Box>
  );
};

export default Errors;
