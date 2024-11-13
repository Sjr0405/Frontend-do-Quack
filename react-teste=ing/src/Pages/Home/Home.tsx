import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SideBar from '../../Components/Dashboard/SideBar';
import Aprender from '../../Components/Dashboard/Inicio';
import FazerAtividade from '../../Components/Dashboard/FazerAtividade';
import Desafio from '../../Components/Dashboard/Desafio';
import Rankings from '../../Components/Dashboard/Rankings';
import Perfil from '../../Components/Dashboard/TeladePefil/Perfil';
import Missoes from '../../Components/Missão/MissoesPage';
import Header from '../../Components/Dashboard/Header';
import ChallengeCard from '../../Components/Missão/MainContentContainer/ChallengeCard/ChallengeCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  height: calc(100vh - 60px); 
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f7f7f7;
  overflow-y: auto;
`;

const Home = () => {
  const [section, setSection] = useState('Aprender');
  const location = useLocation();

  useEffect(() => {
    // Verifica se uma seção foi passada pela navegação
    if (location.state?.section) {
      setSection(location.state.section);
    }
  }, [location]);

  // Mapeamento das seções para seus componentes
  const renderSection = () => {
    const sectionComponents: { [key: string]: JSX.Element } = {
      Aprender: <Aprender changeSection={setSection} />,
      FazerAtividade: <FazerAtividade changeSection={setSection} />,
      Desafio: <Desafio changeSection={setSection} />,
      Rankings: <Rankings />,
      Perfil: <Perfil changeSection={setSection} />,
      Missoes: <Missoes />,
      ChallengeCard: <ChallengeCard changeSection={setSection} />
    };

    return sectionComponents[section] || <Aprender changeSection={setSection} />;
  };

  return (
    <Container>
      <Header /> {/* Header que exibe o nome do usuário */}
      <MainContent>
        <SideBar changeSection={setSection} /> {/* Sidebar para alterar as seções */}
        <ContentArea>
          {renderSection()} {/* Renderiza a seção com base no estado */}
        </ContentArea>
      </MainContent>
    </Container>
  );
};

export default Home;
