import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SideBar from '../../Components/Dashboard/SideBar';
import Aprender from '../../Components/Dashboard/Aprender';
import FazerAtividade from '../../Components/Dashboard/FazerAtividade';
import Desafio from '../../Components/Dashboard/Desafio';
import Rankings from '../../Components/Dashboard/Rankings';
import Perfil from '../../Components/Dashboard/TeladePefil/Perfil';
import Missoes from '../../Components/Missão/MissoesPage';
import Configuracoes from '../../Components/Dashboard/Configuracoes';
import Loja from '../../Components/Dashboard/Loja'; // Importa o componente Loja
import Notifications from '../../Components/Dashboard/Notifications'; // Importa o componente Notifications
import EditarPerfil from '../../Components/Dashboard/EditarPerfil'; // Importa o componente EditarPerfil

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
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
    // Verifica se seção foi passada pela navegação
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
      Rankings: <Rankings  changeSection={setSection}/>,
      Perfil: <Perfil changeSection={setSection} />,
      EditarPerfil: <EditarPerfil changeSection={setSection} />, // Adiciona a nova seção EditarPerfil
      Missoes: <Missoes changeSection={setSection} />,
      Configuracoes: <Configuracoes  changeSection={setSection}/>,
      Loja: <Loja changeSection={setSection} />, // Adiciona a nova seção Loja
      Notifications: <Notifications  changeSection={setSection} /> // Adiciona a nova seção Notifications
    };

    return sectionComponents[section] || <Aprender changeSection={setSection} />;
  };

  return (
    <Container>
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