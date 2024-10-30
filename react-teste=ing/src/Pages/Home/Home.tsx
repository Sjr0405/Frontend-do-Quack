import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SideBar from '../../Components/SideBar';
import Aprender from '../../Components/Aprender';
import FazerAtividade from '../../Components/FazerAtividade';
import Desafio from '../../Components/Desafio';
import Rankings from '../../Components/Rankings';
import Perfil from '../../Components/Perfil';
import Missoes from '../../Components/Missão/MissoesPage';

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
      <Routes>
        <Route path="/" element={<SideBar changeSection={setSection} />} />
      </Routes>

      <MainContent>
        {renderSectionAprender()}
        {renderSectionFazerAtividade()}
        {renderSectionAtividade()}
        {renderSectionRankings()}
        {renderSectionPerfil()}
        {renderSectionMissoes()}
      </MainContent>
    </Container>
  );
};

export default Home;