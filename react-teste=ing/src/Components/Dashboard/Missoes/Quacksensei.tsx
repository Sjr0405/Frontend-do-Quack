import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f4f4f9;
  font-family: 'Montserrat', sans-serif;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow-y: auto;
  margin: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  border-bottom: 2px solid #e0e0e0;
`;

const TopBar = styled.nav`
  display: flex;
  gap: 15px;
`;

const TopBarItem = styled.div`
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  color: #333333;
  transition: all 0.3s ease;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: #7a5ff5;
    }
  }

  &:hover {
    background-color: #f0f0f5;
  }
`;

const SelectedTopBarItem = styled(TopBarItem)`
  color: #ffffff;
  background-color: #7a5ff5;

  &:hover {
    background-color: #684bd4;
  }
`;

const ContactContainer = styled.div`
  margin-top: 20px;

  h2 {
    font-size: 22px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 15px;
  }
`;

const Professor = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
  background: #f9f9ff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f0f5;
    transform: translateY(-3px);
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
  }
`;

const ProfessorDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ProfessorName = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #333333;
  margin: 0;
`;

const ProfessorInfo = styled.p`
  font-size: 16px;
  color: #555555;
  margin: 0;
`;

const Quacksensei = ({
  changeSection,
  setSelectedProfessor, 
}: {
  changeSection: (section: string) => void;
  setSelectedProfessor: React.Dispatch<React.SetStateAction<{
    photo: string;
    name: string;
    email: string;
    ensina: string;
    linguagem: string;
  } | null>>;
}) => {
  const professors = [
    { photo: 'https://randomuser.me/api/portraits/men/4.jpg', name: 'João Gabriel', email: 'joao@example.com', ensina: 'Desenvolvimento de Software', linguagem: 'java' },
    { photo: 'https://randomuser.me/api/portraits/men/8.jpg', name: 'Maria Josefina', email: 'maria@example.com', ensina: 'Programação para Internet', linguagem: 'javascript' },
    { photo: 'https://randomuser.me/api/portraits/men/9.jpg', name: 'Ana Rosa', email: 'anal@example.com', ensina: 'Fazer Dinheiro', linguagem: 'php' },
    { photo: 'https://randomuser.me/api/portraits/men/5.jpg', name: 'Pedro Pascal', email: 'pedro@example.com', ensina: 'Programação Orientada a Objetos', linguagem: 'csharp' },
    { photo: 'https://randomuser.me/api/portraits/men/2.jpg', name: 'Jão Silva', email: 'joaoLol@example.com', ensina: 'Machine Learning', linguagem: 'python' },
  ];

  const handleProfessorClick = (professor: {
    photo: string;
    name: string;
    email: string;
    ensina: string;
    linguagem: string;
  }) => {
    if (professor && professor.name) {
      setSelectedProfessor(professor);
      changeSection('PerfilQuacksensei');
    }
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
          <h2>Mentores Disponíveis</h2>
          {professors.map((professor) => (
            <Professor key={`${professor.name}-${professor.email}`} onClick={() => handleProfessorClick(professor)}>
              <img src={professor.photo} alt={`Foto de ${professor.name}`} />
              <ProfessorDetails>
                <ProfessorName>{professor.name}</ProfessorName>
                <ProfessorInfo>Ensina: {professor.ensina}</ProfessorInfo>
                <ProfessorInfo>Linguagem: {professor.linguagem}</ProfessorInfo>
                <ProfessorInfo>Email: {professor.email}</ProfessorInfo>
              </ProfessorDetails>
            </Professor>
          ))}
        </ContactContainer>
      </MainContent>
    </Container>
  );
};

export default Quacksensei;
