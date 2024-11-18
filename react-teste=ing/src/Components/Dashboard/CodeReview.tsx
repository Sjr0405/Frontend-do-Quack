import { Editor } from '@monaco-editor/react';
import styled from 'styled-components';

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

const CodeReview = ({ changeSection, submittedCode }: { changeSection: (section: string) => void, submittedCode: string }) => {
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
            <SelectedTopBarItem onClick={() => changeSection('CodeReview')}>
              <a>Code Review</a>
            </SelectedTopBarItem>
            <TopBarItem onClick={() => changeSection('Respostas')} style={{ border: 'none' }}>
              <a>Respostas</a>
            </TopBarItem>
          </TopBar>
        </Header>
        <h2>Revisão de Código</h2>
        <Editor
        height="100%"
            width="100%"            
            theme="vs-dark"
            value={submittedCode}
            options={{ readOnly: true }}
            />
      </MainContent>
    </Container>
  );
};

export default CodeReview;
