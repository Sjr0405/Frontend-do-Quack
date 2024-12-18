import { IconButton } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ModuloCard as ModuloCardContainer, ProgressBar } from './AprenderStyles';
// import { useNavigate } from 'react-router-dom'; // Remover esta linha

interface Modulo {
  id: number;
  nome: string;
  aulasCompletas: number;
  totalAulas: number;
  corBarra: string;
  bgColor: string;
  rota: string;
  icon: string;
}

const ModuloCard = ({ modulo, setSelectedRoadmapId, changeSection }: { modulo: Modulo, setSelectedRoadmapId: (id: number) => void, changeSection: (section: string) => void }) => {
  // const navigate = useNavigate(); // Remover esta linha

  const calcularProgresso = (aulasCompletas: number, totalAulas: number) => {
    if (totalAulas === 0) return '0%';
    const progresso = (aulasCompletas / totalAulas) * 100;
    return `${progresso}%`;
  };

  const handleNavigate = () => {
    setSelectedRoadmapId(modulo.id);
    changeSection('Trilhas');
  };

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
      <IconButton onClick={handleNavigate} aria-label="navegar">
        <ArrowForwardIcon />
      </IconButton>
    </ModuloCardContainer>
  );
};

export default ModuloCard;
