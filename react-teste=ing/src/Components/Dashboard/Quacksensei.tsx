import { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f7f7f7;
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
`;

const TopBarItem = styled.div`
  margin-bottom: 20px;
  align-items: center;
  border-right: 1px solid #BFB9B9;
  padding: 10px 50px;

  a {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    color: inherit;

    &:hover {
      color: #7A5FF5;
      text-decoration: underline;
    }
  }
`;

const SelectedTopBarItem = styled(TopBarItem)`
  color: #7A5FF5;
  text-decoration: underline;
`;

const ContactContainer = styled.div`
  margin-top: 20px;

  h2 {
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 20px;
    font-weight: 700;
  }
`;

const Professor = styled.div`
  background: #fff;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;

  h2, h3, h4, p {
    font-family: 'Montserrat Alternates', sans-serif;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

const ProfessorName = styled.h3`
  margin: 0;
  padding: 0;
`;

const ProfessorEmail = styled.p`
  margin: 0;
  padding: 0;
`;


const Quacksensei = ({ changeSection, setSelectedProfessor }: { changeSection: (section: string) => void; setSelectedProfessor: React.Dispatch<React.SetStateAction<{ photo: string; name: string; email: string; ensina: string; linguagem: string } | null>> }) => {
  const [selectedProfessor, setSelectedProfessorState] = useState<{ photo: string; name: string; email: string } | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  const professors = [
    { photo: 'https://randomuser.me/api/portraits/men/4.jpg', name: 'Prof. João', email: 'joao@example.com', ensina: 'Desenvolvimento de Software', linguagem: 'java' },
    { photo: 'https://randomuser.me/api/portraits/men/8.jpg', name: 'Prof. Maria', email: 'maria@example.com', ensina: 'Programação para Internet', linguagem: 'javascript' },
    { photo: 'https://randomuser.me/api/portraits/men/9.jpg', name: 'Prof. Ana', email: 'anal@example.com', ensina: 'Fazer Dinheiro', linguagem: 'php' },
    { photo: 'https://randomuser.me/api/portraits/men/5.jpg', name: 'Prof. Pedro', email: 'pedro@example.com', ensina: 'Programação Orientada a Objetos', linguagem: 'csharp' },
    { photo: 'https://randomuser.me/api/portraits/men/2.jpg', name: 'Prof. João', email: 'joaoLol@example.com', ensina: 'Machine Learning', linguagem: 'python' },
  ];

  const handleProfessorClick = (professor: {photo: string, name: string; email: string; ensina: string; linguagem: string }) => {
    setSelectedProfessor(professor);
    changeSection('PerfilQuacksensei');
  };

  return (
    <Container>
      <MainContent>
        <Header>
          <TopBar>
            <TopBarItem onClick={() => changeSection('Desafio')}>
              <a>Visão Geral</a>
            </TopBarItem>
            <TopBarItem onClick={() => changeSection('FazerAtividade')}>
              <a>Fazer Atividade</a>
            </TopBarItem>
            <SelectedTopBarItem onClick={() => changeSection('Quacksensei')}>
              <a>Solicitar Quacksensei</a>
            </SelectedTopBarItem>
            <TopBarItem onClick={() => changeSection('CodeReview')}>
              <a>Code Review</a>
            </TopBarItem>
            <TopBarItem onClick={() => changeSection('Respostas')} style={{ border: 'none' }}>
              <a>Respostas</a>
            </TopBarItem>
          </TopBar>
        </Header>

        <ContactContainer>
          <h2>Professores Disponíveis</h2>
          {professors.map((professor) => (
            <Professor key={`${professor.name}-${professor.email}`} onClick={() => handleProfessorClick(professor)}>
              <div style={{ float: 'left' , overflow: 'hidden', margin: '10px'}}>
                <img src={professor.photo} alt="" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }} />
              </div>
              <ProfessorName>Nome: {professor.name}</ProfessorName>
              <h3>Ensina: {professor.ensina}</h3>
              <p>Linguagem: {professor.linguagem}</p>
              <ProfessorEmail>Email: {professor.email}</ProfessorEmail>
            </Professor>
          ))}
        </ContactContainer>
      </MainContent>
    </Container>
  );
};

export default Quacksensei;

