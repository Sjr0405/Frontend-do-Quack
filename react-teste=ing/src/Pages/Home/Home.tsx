import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SideBar from '../../Components/Dashboard/SideBar';
import Aprender from '../../Components/Dashboard/Aprender/Aprender';
import FazerAtividade from '../../Components/Dashboard/Missoes/Fazer Atividade/FazerAtividade';
import Desafio from '../../Components/Dashboard/Missoes/Desafio';
import Rankings from '../../Components/Dashboard/Rankings/Rankings';
import Perfil from '../../Components/Dashboard/Perfil/Perfil';
import Missoes from '../../Components/Dashboard/Missoes/MissoesPage';
import Configuracoes from '../../Components/Dashboard/Configuracoes';
import Loja from '../../Components/Dashboard/Loja';
import Notifications from '../../Components/Dashboard/Notifications';
import EditarPerfil from '../../Components/Dashboard/EditarPerfil/EditarPerfil';
import PerfilQuacksensei from '../../Components/Dashboard/Missoes/PerfilQuacksensei';
import Quacksensei from '../../Components/Dashboard/Missoes/Quacksensei';
import CodeReview from '../../Components/Dashboard/Missoes/CodeReview';
import Respostas from '../../Components/Dashboard/Missoes/Respostas/Respostas';
import Praticar from '../../Components/Dashboard/Praticar';
import Roadmap from '../../Components/Dashboard/SeleçãodeTrilhas/SeleçãodeTrilhas';
import ActivityPage from '../../Components/Dashboard/ActivityPage/ActivityPage';
import Layout from '../../Components/Trilhas/Layout';

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

  useEffect(() => {
    if (location.state?.section) {
      setSection(location.state.section);
    }
  }, [location]);

  // Mapeamento das seções para seus componentes
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
      Loja: <Loja />,
      Notifications: <Notifications changeSection={setSection} />,
      Missoes: <Missoes changeSection={setSection} />,
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
      Respostas: <Respostas changeSection={setSection} submittedCode={submittedCode} />,
      Praticar: <Praticar changeSection={(newSection : string , activityType?: string ) => {
        setSection(newSection);
        if (activityType) {
          setActivityType(activityType);
        }
      }} />,
      Roadmap: <Roadmap />,
      ActivityPage: <ActivityPage changeSection={setSection} activityType={activityType} />,
      Layout: <Layout />,
    };

    return sectionComponents[section] || <Aprender changeSection={setSection} />;
  };

  return (
    <Container>
      <MainContent>
        {section !== 'Layout' && <SideBar changeSection={setSection} />}
        <ContentArea>
          {renderSection()} {/* Renderiza a seção com base no estado */}
        </ContentArea>
      </MainContent>
    </Container>
  );
};

export default Home;