import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IconButton, Input } from "@mui/material";
import { useNavigate } from 'react-router-dom';

// Styled Components
const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f7f7f7;
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InvestidaBox = styled.div`
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid #FB7901;
  font-family: 'Montserrat', sans-serif;
  color: #ff9800;
  font-weight: bold;

  img {
    margin-top: 10px;
    margin-right: 15px;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 20%;

  Input {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    font-size: 18px;
  }

  img {
    cursor: pointer;
  }
`;

const Titulo = styled.h1`
  color: #000;
  font-size: 30px;
  font-weight: 500;
  font-family: 'Lilita One', sans-serif;
  text-align: left;
  margin-top: 20px;
`;

const ModuloCard = styled.div<{ bgColor: string }>`
  width: 60%;
  background-color: ${({ bgColor }) => bgColor || '#fff'};
  padding: 20px;
  margin: 15px 0;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin-right: 15px;
    background-color: #fff;
    padding: 15px;
    border-radius: 50%;
  }

  div {
    width: 100%;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    font-size: 12px;
    font-weight: bold;
    margin: 0;
  }

  h3 {
    margin: 0;
    font-family: 'Lilita One', sans-serif;
    text-align: left;
    font-size: 24px;
    font-weight: 300;
  }

  a {
    text-decoration: none;
    font-family: 'Lilita One', sans-serif;
    text-align: right;
    color: #888;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      color: #000;
    }
  }

  span {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #888;
  }

  button {
    background-color: white;
    border: none;
    cursor: pointer;
    padding: 10px;
    margin-left: 20px;
  }
`;

interface ProgressBarProps {
  progress: string;
  color: string;
}

const ProgressBar = styled.div<ProgressBarProps>`
  width: 100%;
  height: 15px;
  background-color: #ddd;
  border-radius: 5px;
  margin-top: 10px;

  div {
    width: ${({ progress }) => progress || '0%'};
    height: 100%;
    background-color: ${({ color }) => color || '#000'};
    border-radius: 5px;
  }
`;

// const EmblemasBox = styled.div`
//   margin-top: 20px;
//   padding: 20px;
//   background-color: #ffffff;
//   border-radius: 12px;
//   width: 300px;
// `;

// const EmblemaItem = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 10px;

//   img {
//     width: 40px;
//     height: 40px;
//     margin-right: 10px;
//   }

//   span {
//     font-family: 'Montserrat', sans-serif;
//     font-size: 18px;
//   }
// `;

const PuzzleButton = styled.button`
  display: flex;
  border-radius: 8px;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 10px 20px;
  background-color: #6c5ce7;
  
  position: relative;
  transition: background-color 0.3s ease;
  z-index: 2; /* Mantém o botão acima dos SVGs */

  p {
    margin: 0;
    font-family: 'Lilita One', sans-serif;
    font-weight: 300;
    font-size: 20px;
    padding: 10px 10px;
  }

  &:hover {
    background-color: #4834d4;
    color: white;
  }
`;


interface Modulo {
  nome: string;
  aulasCompletas: number;
  totalAulas: number;
  corBarra: string;
  bgColor: string;
  rota: string;
  icon: string;
}

const Aprender = ({ changeSection }: { changeSection: (section: string) => void }) => {
  const navigate = useNavigate();
  const [modulos, setModulos] = useState<Modulo[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [exactMatches, setExactMatches] = useState<Modulo[]>([]);
  const [similarMatches, setSimilarMatches] = useState<Modulo[]>([]);

  // Simulação da busca de dados do banco de dados
  useEffect(() => {
    // Aqui você integraria a chamada para o banco de dados real
    const fetchModulos = async () => {
      // Exemplo: chamada à API ou banco de dados
      const dadosDoBanco = [
        { nome: 'Lógica de Programação', aulasCompletas: 18, totalAulas: 300, corBarra: '#FFD700', bgColor: '#FFEB99', rota: 'Logica_Programacao', icon: '/src/svgs/Home-svgs/Programacao.svg' },
        { nome: 'Frontend', aulasCompletas: 18, totalAulas: 18, corBarra: '#8000FF', bgColor: '#D9B3FF', rota: 'Frontend_Roadmap', icon: '/src/svgs/Home-svgs/Frontend.svg' },
        { nome: 'DevOps', aulasCompletas: 3, totalAulas: 18, corBarra: '#1E90FF', bgColor: '#CCE0FF', rota: 'DevOps_Roadmap', icon: '/src/svgs/Home-svgs/DevOps.svg' },
        { nome: 'Backend', aulasCompletas: 5, totalAulas: 18, corBarra: '#32CD32', bgColor: '#CCFFCC', rota: '/Backend_Roadmap', icon: '/src/svgs/Home-svgs/Backend.svg' },
      ];

      setModulos(dadosDoBanco);
    };

    fetchModulos();
  }, []);

  useEffect(() => {
    const exact = modulos.filter(modulo => modulo.nome.toLowerCase() === searchTerm.toLowerCase());
    const similar = modulos.filter(modulo => 
      modulo.nome.toLowerCase().includes(searchTerm.toLowerCase()) && 
      modulo.nome.toLowerCase() !== searchTerm.toLowerCase()
    );

    setExactMatches(exact);
    setSimilarMatches(similar);
  }, [searchTerm, modulos]);

  // Função para calcular a porcentagem da barra de progresso
  const calcularProgresso = (aulasCompletas: number, totalAulas: number) => {
    if (totalAulas === 0) return '0%';
    const progresso = (aulasCompletas / totalAulas) * 100;
    return `${progresso}%`;
  };

  return (
    <Container>
      {/* Main Content */}
      <MainContent>
        <Header>
          <PuzzleButton onClick={() => changeSection('Desafio')}>
            <img src="/src/svgs/Home-svgs/Puzzle.svg" alt="Estrela icon" />
            <p> Desafio diário! </p>
          </PuzzleButton>

          <InvestidaBox>
              Investida de 3 dias!
              <div>
              <img src="/src/Icons/fire.svg" alt="Estrela icon" />
              <img src="/src/Icons/fire.svg" alt="Estrela icon" />
              <img src="/src/Icons/fire.svg" alt="Estrela icon" />
              <img src="/src/Icons/no-fire.svg" alt="Void icon" />
              <img src="/src/Icons/no-fire.svg" alt="Void icon" />
              <img src="/src/Icons/no-fire.svg" alt="Void icon" />
              <img src="/src/Icons/no-fire.svg" alt="Void icon" />
              </div>
            </InvestidaBox>

          <SearchBar>
            <Input
              type="search"
              placeholder="Pesquisar por nome..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchBar>
        </Header>
        <Titulo>Módulos Semelhantes</Titulo>
        {similarMatches.map((modulo, index) => (
          <ModuloCard key={index} bgColor={modulo.bgColor}>
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
            
            <IconButton onClick={() => navigate(modulo.rota)} aria-label="navegar">
              <ArrowForwardIcon />
            </IconButton>
          </ModuloCard>
        ))}
             
        {/* <EmblemasBox>
          <h3>Emblemas em destaque</h3>
          <EmblemaItem>
            <img src="icon-fullstack.svg" alt="Fullstack icon" />
            <span>FullStack</span>
          </EmblemaItem>
          <EmblemaItem>
            <img src="icon-frontend.svg" alt="Frontend icon" />
            <span>Frontend</span>
          </EmblemaItem>
          <EmblemaItem>
            <img src="icon-backend.svg" alt="Backend icon" />
            <span>Backend</span>
          </EmblemaItem>
        </EmblemasBox> */}
      </MainContent>
    </Container>
  );
};

export default Aprender;
