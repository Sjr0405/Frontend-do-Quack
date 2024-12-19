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

  const handleNotificationClick = () => {
    changeSection('Notifications');
  };

  const handleVerTodosClick = () => {
    changeSection('Roadmap');
  };

  const handleAddRoadmapClick = () => {
    changeSection('Roadmap');
  };

  useEffect(() => {
    if (user) {
      fetchUserRoadmapsById(user.id);
    }
  }, [user, fetchUserRoadmapsById]);

  useEffect(() => {
    if (roadmaps) {
      const userRoadmaps = roadmaps.map((roadmap: any) => ({
        nome: roadmap.title,
        aulasCompletas: 0,
        totalAulas: 0,
        corBarra: '#FFD700',
        bgColor: '#FFEB99',
        rota: `/roadmap/${roadmap.id}`,
        icon: roadmap.imagePath,
      }));
      setModulos(userRoadmaps);
    }
  }, [roadmaps]);

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
