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
import EditarPerfil from '../../Components/EditarPerfil/EditarPerfil'; // Importa o componente EditarPerfil
import PerfilQuacksensei from '../../Components/Dashboard/PerfilQuacksensei';
import Quacksensei from '../../Components/Dashboard/Quacksensei';
import CodeReview from '../../Components/Dashboard/CodeReview';

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
      Rankings: <Rankings  />,
      Perfil: <Perfil changeSection={setSection} />,
      EditarPerfil: <EditarPerfil />,
      Missoes: <Missoes changeSection={setSection} />,
      Configuracoes: <Configuracoes />,
      Loja: <Loja/>,
      Notifications: <Notifications  changeSection={setSection} />,
      Quacksensei: <Quacksensei changeSection={setSection} />,
      PerfilQuacksensei: <PerfilQuacksensei changeSection={setSection} />,
      CodeReview:<CodeReview changeSection={setSection} />
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