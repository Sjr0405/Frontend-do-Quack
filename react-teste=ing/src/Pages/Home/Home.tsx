import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SideBar from '../../Components/Dashboard/SideBar';
import Aprender from '../../Components/Dashboard/Aprender/Aprender';
import FazerAtividade from '../../Components/Dashboard/FazerAtividade';
import Desafio from '../../Components/Dashboard/Desafio';
import Rankings from '../../Components/Dashboard/Rankings/Rankings';
import Perfil from '../../Components/Dashboard/TeladePefil/Perfil';
import Missoes from '../../Components/Dashboard/MissoesPage';
import Configuracoes from '../../Components/Dashboard/Configuracoes';
import Loja from '../../Components/Dashboard/Loja';
import Notifications from '../../Components/Dashboard/Notifications';
import EditarPerfil from '../../Components/Dashboard/EditarPerfil/EditarPerfil';
import PerfilQuacksensei from '../../Components/Dashboard/PerfilQuacksensei';
import Quacksensei from '../../Components/Dashboard/Quacksensei';
import CodeReview from '../../Components/Dashboard/CodeReview';
import Praticar from '../../Components/Dashboard/Praticar';
import Roadmap from '../../Components/Dashboard/Roadmap';
import ActivityPage from '../../Components/Dashboard/ActivityPage';

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

interface Message {
  id: string;
  text: string;
  isSender: boolean;
}

const Home = () => {
  const [section, setSection] = useState('Aprender');
  const location = useLocation();
  const [selectedProfessor, setSelectedProfessor] = useState<{ name: string; email: string; ensina: string; linguagem: string; photo: string } | null>(null);
  const [messages, setMessages] = useState<{ [key: string]: Message[] }>({});
  const [submittedCode, setSubmittedCode] = useState('');
  const [activityType, setActivityType] = useState<string>('');

  // Função para definir mensagens para cada professor com base no email
  const handleSetMessages = (professorEmail: string, newMessages: Message[]) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [professorEmail]: newMessages,
    }));
  };

  useEffect(() => {
    if (location.state?.section) {
      setSection(location.state.section);
    }
  }, [location]);

  // Mapeamento das seções para seu[s componentes
  const renderSection = () => {
    const sectionComponents: { [key: string]: JSX.Element | null } = {
      Aprender: <Aprender changeSection={setSection} />,
      FazerAtividade: <FazerAtividade changeSection={(newSection, code) => {
        if (code) setSubmittedCode(code);
        setSection(newSection);
      }} />,
      Desafio: <Desafio changeSection={setSection} />,
      Rankings: <Rankings />,
      EditarPerfil: <EditarPerfil />,
      Perfil: <Perfil changeSection={setSection} />,
      Configuracoes: <Configuracoes />,
      Loja: <Loja/>,
      Notifications: <Notifications changeSection={setSection} />,
      Missoes: <Missoes changeSection={setSection}/>,
      Quacksensei: <Quacksensei changeSection={setSection} setSelectedProfessor={setSelectedProfessor} />,
      PerfilQuacksensei: selectedProfessor ? (
        <PerfilQuacksensei
          changeSection={setSection}
          selectedProfessor={selectedProfessor}
          messages={{ [selectedProfessor.email]: messages[selectedProfessor.email] || [] }}
          setMessages={handleSetMessages}
        />
      ) : null,
      CodeReview: <CodeReview changeSection={setSection} submittedCode={submittedCode} />,
      Praticar: <Praticar changeSection={(newSection, activityType) => {
        setSection(newSection);
        if (activityType) {
          setActivityType(activityType);
        }
      }} />,
      Roadmap: <Roadmap  />,
      ActivityPage: <ActivityPage activityType={activityType} />,
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