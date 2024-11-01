import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SideBar from '../../Components/Dashboard/SideBar';
import Aprender from '../../Components/Dashboard/Inicio';
import FazerAtividade from '../../Components/Dashboard/FazerAtividade';
import Desafio from '../../Components/Dashboard/Desafio';
import Rankings from '../../Components/Dashboard/Rankings';
import Perfil from '../../Components/Dashboard/Perfil';
import Missoes from '../../Components/Missão/MissoesPage';
import Header from '../../Components/Dashboard/Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  height: calc(100vh - 60px); // Ajuste a altura para considerar o cabeçalho
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
    if (location.state?.section) {
      setSection(location.state.section);
    }
  }, [location]);

  const renderSectionAprender = () => {
    if (section === 'Aprender') {
      return <Aprender changeSection={setSection} />;
    }
  };

  const renderSectionFazerAtividade = () => {
    if (section === 'FazerAtividade') {
      return <FazerAtividade changeSection={setSection} />;
    }
  };

  const renderSectionAtividade = () => {
    if (section === 'Desafio') {
      return <Desafio changeSection={setSection} />;
    }
  };

  const renderSectionRankings = () => {
    if (section === 'Rankings') {
      return <Rankings />;
    }
  };

  const renderSectionPerfil = () => {
    if (section === 'Perfil') {
      return <Perfil changeSection={setSection} />;
    }
  };

  const renderSectionMissoes = () => {
    if (section === 'Missoes') {
      return <Missoes />;
    }
  };

  return (
    <Container>
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<SideBar changeSection={setSection} />} />
        </Routes>

        <ContentArea>
          {renderSectionAprender()}
          {renderSectionFazerAtividade()}
          {renderSectionAtividade()}
          {renderSectionRankings()}
          {renderSectionPerfil()}
          {renderSectionMissoes()}
        </ContentArea>
      </MainContent>
    </Container>
  );
};

export default Home;