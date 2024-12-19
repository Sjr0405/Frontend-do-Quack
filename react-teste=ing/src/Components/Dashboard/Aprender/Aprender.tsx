import { useState, useEffect } from 'react';
import { useAuth } from '../../../AuthContext';
import { useLocation } from 'react-router-dom';
import {
  Container,
  MainContent,
  Header,
  Titulo,
  TituloContainer,
  VerTodosLink,
  SearchBarContainer,
  NoRoadmapMessage,
  AddRoadmapButton
} from './AprenderStyles';
import PuzzleButton from './PuzzleButton';
import StatusBar from './StatusBar';
import NotificationIcon from './NotificationIcon';
import Quack from './Quack';
import ModuloCard from './ModuloCard';
import SearchBar from './SearchBar';
import tristeIcon from '../../../Assets/Svg_thigas/TRISTE.svg';

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
  const { user, roadmaps, fetchUserRoadmapsById } = useAuth();
  const location = useLocation();
  const [modulos, setModulos] = useState<Modulo[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [similarModuloMatches, setModuloSimilarMatches] = useState<Modulo[]>([]);

  // Função para lidar com o clique no ícone de notificação
  const handleNotificationClick = () => {
    changeSection('Notifications');
  };

  // Função para lidar com o clique no link "Ver todos"
  const handleVerTodosClick = () => {
    changeSection('Roadmap');
  };

  // Função para lidar com o clique no botão "Adicionar Nova Trilha"
  const handleAddRoadmapClick = () => {
    changeSection('Roadmap');
  };

  // Efeito para buscar os roadmaps do usuário ao carregar o componente
  useEffect(() => {
    if (user) {
      fetchUserRoadmapsById(user.id);
    }
  }, [user, fetchUserRoadmapsById]);

  // Efeito para atualizar os módulos quando os roadmaps mudam
  useEffect(() => {
    if (roadmaps) {
      const userRoadmaps = roadmaps.map((roadmap: any) => ({
        nome: roadmap.title,
        aulasCompletas: roadmap.totalSteps || 0, // Definir 0 se undefined
        totalAulas: roadmap.stepsId?.length || 0, // Puxar a quantidade de stepsId, definir 0 se undefined
        corBarra: roadmap.color || '#FFD700', // Usar a cor da roadmap, definir cor padrão se undefined
        bgColor: roadmap.color || '#FFEB99', // Usar a cor da roadmap, definir cor padrão se undefined
        rota: `/roadmap/${roadmap.id}`,
        icon: roadmap.imagePath || '', // Definir string vazia se undefined
      }));
      setModulos(userRoadmaps);
    }
  }, [roadmaps]);

  // Efeito para adicionar novos módulos ao estado quando a localização muda
  useEffect(() => {
    if (location.state?.newModules) {
      setModulos((prevModulos) => {
        const newModules = location.state.newModules.filter((newModule: Modulo) =>
          !prevModulos.some((modulo) => modulo.nome === newModule.nome)
        );
        return [...prevModulos, ...newModules];
      });
    }
  }, [location.state]);

  // Efeito para filtrar módulos similares com base no termo de pesquisa
  useEffect(() => {
    const similarfilteredModulos = modulos.filter(modulo =>
      modulo.nome.toLowerCase().includes(searchTerm.toLowerCase()) &&
      modulo.nome.toLowerCase() !== (searchTerm.toLowerCase())
    );

    setModuloSimilarMatches(similarfilteredModulos);
  }, [searchTerm, modulos]);

  return (
    <Container>
      <Header>
        <PuzzleButton onClick={() => changeSection('Desafio')} />
        <StatusBar />
        <NotificationIcon onClick={handleNotificationClick} />
      </Header>
      <Quack user={user ?? {}} />
      <MainContent>
        <TituloContainer>
          <Titulo>Minhas Trilhas</Titulo>
          <SearchBarContainer>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </SearchBarContainer>
          <VerTodosLink onClick={handleVerTodosClick}>Ver todos</VerTodosLink>
        </TituloContainer>
        {similarModuloMatches.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            {similarModuloMatches.map((modulo, index) => (
              <ModuloCard key={index} modulo={modulo} />
            ))}
          </div>
        ) : (
          <NoRoadmapMessage>
            <img src={tristeIcon} alt="Nenhuma trilha de aprendizado" />
            <p>Você ainda não possui nenhuma trilha de aprendizado.</p>
            <AddRoadmapButton onClick={handleAddRoadmapClick}>Adicionar Nova Trilha</AddRoadmapButton>
          </NoRoadmapMessage>
        )}
      </MainContent>
    </Container>
  );
};

export default Aprender;
