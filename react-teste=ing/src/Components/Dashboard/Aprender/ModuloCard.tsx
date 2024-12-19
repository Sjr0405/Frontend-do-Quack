import { IconButton } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ModuloCard as ModuloCardContainer, ProgressBar } from './AprenderStyles';
import { useNavigate } from 'react-router-dom';

interface Modulo {
  nome: string;
  aulasCompletas: number;
  totalAulas: number;
  corBarra: string;
  bgColor: string;
  rota: string;
  icon: string;
}

const ModuloCard = ({ modulo }: { modulo: Modulo }) => {
  const navigate = useNavigate();

  // Função para calcular o progresso das aulas
  const calcularProgresso = (aulasCompletas: number, totalAulas: number) => {
    if (totalAulas === 0) return '0%';
    const progresso = (aulasCompletas / totalAulas) * 100;
    return `${progresso}%`;
  };

  // Função para renderizar o card do módulo
  return (
    <ModuloCardContainer bgColor={modulo.bgColor}>
      <img src={modulo.icon} alt={modulo.nome} />
      <div>
        <h3>{modulo.nome}</h3>
        {modulo.aulasCompletas / modulo.totalAulas === 1 ? (
          <a>Módulo Completo</a>
        ) : (
          <a>{`${modulo.aulasCompletas}/${modulo.totalAulas} Aulas Completas`}</a>
        )}
        <ProgressBar progress={calcularProgresso(modulo.aulasCompletas, modulo.totalAulas)} color={modulo.corBarra}>
          <div></div>
        </ProgressBar>
      </div>
      <IconButton onClick={() => navigate('/Trilhas')} aria-label="navegar">
        <ArrowForwardIcon />
      </IconButton>
    </ModuloCardContainer>
  );
};

export default ModuloCard;
