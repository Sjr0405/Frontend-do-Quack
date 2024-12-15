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

const RespostasContainer = styled.div`
  background-color: #F4F4F9;
  padding: 20px;
  border-radius: 8px;
`;

const Resposta = styled.div`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
`;

const Respostas = ({ changeSection }: { changeSection: (section: string) => void }) => {
  const respostas = [
    { id: 1, text: 'Resposta 1: Aqui está a solução para o desafio.' },
    { id: 2, text: 'Resposta 2: Sugestões para melhorar seu código.' },
  ];

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
            <TopBarItem onClick={() => changeSection('Quacksensei')}>
              <a>Solicitar Quacksensei</a>
            </TopBarItem>
            <TopBarItem onClick={() => changeSection('CodeReview')}>
              <a>Code Review</a>
            </TopBarItem>
            <SelectedTopBarItem onClick={() => changeSection('Respostas')} style={{ border: 'none' }}>
              <a>Respostas</a>
            </SelectedTopBarItem>
          </TopBar>
        </Header>

        <RespostasContainer>
          {respostas.map((resposta) => (
            <Resposta key={resposta.id}>{resposta.text}</Resposta>
          ))}
        </RespostasContainer>
      </MainContent>
    </Container>
  );
};

export default Respostas;
