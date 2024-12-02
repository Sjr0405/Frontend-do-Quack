import { useState, useEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IconButton, Input } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../AuthContext'; // Importa o contexto de autenticação
import { useLocation } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
  QuackContainer,
  ProfileSection,
  ProfileImage,
  ProfileInfo,
  ProfileName,
  ProfileSubtitle,
  Divider,
  WelcomeSection,
  WelcomeImage,
  WelcomeTextContainer,
  WelcomeTitle,
  WelcomeText,
  Container,
  MainContent,
  Header,
  NotificationIconWrapper,
  NotificationDot,
  Titulo,
  ModuloCard,
  TituloContainer,
  VerTodosLink,
  ProgressBar,
  PuzzleButton,
  StatusBar,
  StatusItem,
  Tooltip,
  DaysList
} from './AprenderStyles';
import Puzzle from '../../../Assets/svgs/Home-svgs/Puzzle.svg';
import Falando from '../../../Assets/Svg_thigas/FALANDO.svg';
import foguinho from '../../../Assets/barra de status/foquinho.svg';
import fogo from '../../../Assets/Icons/fire.svg';
import sem_fogo from '../../../Assets/Icons/no-fire.svg';
import pontos from '../../../Assets/barra de status/pontos.svg';

//import temporarios
import programacao from '../../../Assets/svgs/Home-svgs/Programacao.svg';
import frontend from '../../../Assets/svgs/Home-svgs/Frontend.svg';
import backend from '../../../Assets/svgs/Home-svgs/Backend.svg';
import devops from '../../../Assets/svgs/Home-svgs/DevOps.svg';
//import temporarios

const Quack = ({ user }: { user: any }) => {
  return (
    <QuackContainer>
      <ProfileSection>
        <ProfileImage src={user?.imagePath || "https://via.placeholder.com/64"} alt="Foto de Perfil" />
        <ProfileInfo>
          <ProfileName>{user?.username || "Usuário"}</ProfileName>
          <ProfileSubtitle>{user?.name || "Nome do Usuário"}</ProfileSubtitle>
        </ProfileInfo>
      </ProfileSection>
      <Divider />
      <WelcomeSection>
        <WelcomeImage src={Falando} alt="Imagem de boas-vindas" />
        <WelcomeTextContainer>
          <WelcomeTitle>Bem-vindo de volta, {user?.username || "Usuário"}!</WelcomeTitle>
          <WelcomeText>
            Explore caminhos de aprendizado estruturados para impulsionar sua jornada como desenvolvedor.
          </WelcomeText>
        </WelcomeTextContainer>
      </WelcomeSection>
    </QuackContainer>
  );
};

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
  const { user } = useAuth(); // Obtém o usuário do contexto de autenticação
  const location = useLocation();
  const [modulos, setModulos] = useState<Modulo[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [similarModuloMatches, setModuloSimilarMatches] = useState<Modulo[]>([]);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleMouseEnter = (item: string) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };


  const handleNotificationClick = () => {
    changeSection('Notifications');
  };

  const handleVerTodosClick = () => {
    changeSection('Roadmap');
  };

  useEffect(() => {
    const fetchData = async () => {
      const dadosDoBanco = [
        { nome: 'Lógica de Programação', aulasCompletas: 18, totalAulas: 300, corBarra: '#FFD700', bgColor: '#FFEB99', rota: 'Backend_Roadmap', icon: programacao },
        { nome: 'Frontend', aulasCompletas: 18, totalAulas: 18, corBarra: '#8000FF', bgColor: '#D9B3FF', rota: 'Backend_Roadmap', icon: frontend },
        { nome: 'DevOps', aulasCompletas: 3, totalAulas: 18, corBarra: '#1E90FF', bgColor: '#CCE0FF', rota: 'Backend_Roadmap', icon: devops },
        { nome: 'Backend', aulasCompletas: 5, totalAulas: 18, corBarra: '#32CD32', bgColor: '#CCFFCC', rota: '/Backend_Roadmap', icon: backend },
      ];
      setModulos(dadosDoBanco);

      // Adicionar novos módulos se existirem
      if (location.state?.newModules) {
        setModulos((prevModulos) => [...prevModulos, ...location.state.newModules]);
      }
    };
    fetchData();
  }, [location.state]);

  useEffect(() => {
    const similarfilteredModulos = modulos.filter(modulo =>
      modulo.nome.toLowerCase().includes(searchTerm.toLowerCase()) &&
      modulo.nome.toLowerCase() !== (searchTerm.toLowerCase())
    );

    setModuloSimilarMatches(similarfilteredModulos);
  }, [searchTerm, modulos]);

  const calcularProgresso = (aulasCompletas: number, totalAulas: number) => {
    if (totalAulas === 0) return '0%';
    const progresso = (aulasCompletas / totalAulas) * 100;
    return `${progresso}%`;
  };

  return (
    <Container>
      <Header>
        <PuzzleButton onClick={() => changeSection('Desafio')}>
          <img src={Puzzle} alt="Estrela icon" />
          <p> Desafio diário! </p>
        </PuzzleButton>
        <Input
          type="search"
          placeholder="Pesquisar por nome..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      
        <StatusBar>
          <StatusItem
            onMouseEnter={() => handleMouseEnter('investidas')}
            onMouseLeave={handleMouseLeave}
          >
            <img src={foguinho} alt="Investidas" />
            <span>3</span>
            <Tooltip visible={hoveredItem === 'investidas'}>
              <h3>Dias de investida</h3>
              <div>
                <DaysList>
                  <li>Seg <img src={fogo} alt="Foguinho" /></li>
                  <li>Ter <img src={fogo} alt="Foguinho" /></li>
                  <li>Qua <img src={fogo} alt="Foguinho" /></li>
                  <li>Qui <img src={sem_fogo} alt="Sem Foguinho" /></li>
                  <li>Sex <img src={sem_fogo} alt="Sem Foguinho" /></li>
                  <li>Sáb <img src={sem_fogo} alt="Sem Foguinho" /></li>
                  <li>Dom <img src={sem_fogo} alt="Sem Foguinho" /></li>
                </DaysList>
              </div>
            </Tooltip>
          </StatusItem>
          <StatusItem
            onMouseEnter={() => handleMouseEnter('pontos')}
            onMouseLeave={handleMouseLeave}
          >
            <img src={pontos} alt="Pontos" />
            <span>30</span>
            <Tooltip visible={hoveredItem === 'pontos'}>
              <img src={pontos} alt="Pontos" />
              Você tem 30 pontos acumulados.
            </Tooltip>
          </StatusItem>
        </StatusBar>
        <NotificationIconWrapper onClick={handleNotificationClick}>
          <NotificationsIcon style={{ color: '#FFD700', fontSize: '30px' }} />
          <NotificationDot />
        </NotificationIconWrapper>
      </Header>
      <Quack user={user} /> {/* Passa o usuário para o Quack */}
      <MainContent>
        <TituloContainer>
          <Titulo>Minhas Roadmaps</Titulo>
          <VerTodosLink onClick={handleVerTodosClick}>Ver todos</VerTodosLink>
        </TituloContainer>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          {similarModuloMatches.map((modulo, index) => (
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
        </div>
      </MainContent>
    </Container>
  );
};

export default Aprender;
