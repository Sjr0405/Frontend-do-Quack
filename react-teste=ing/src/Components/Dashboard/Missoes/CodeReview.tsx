import { Editor } from '@monaco-editor/react';
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
  overflow-y: hidden;
  overflow-x: hidden;
  margin: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  border-bottom: 2px solid #e0e0e0;
`;

const TopBar = styled.div`
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

const Title = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: #333333;
  margin-bottom: 20px;
`;

const CodeEditorContainer = styled.div`
  height: calc(100vh - 150px); /* Ajusta o tamanho conforme o conteúdo do header e espaçamentos */
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
`;

const CodeReview = ({
  changeSection,
  submittedCode,
}: {
  changeSection: (section: string) => void;
  submittedCode?: string;
}) => {
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
        <Title>Revisão de Código</Title>
        <CodeEditorContainer>
          <Editor
            height="100%"
            width="100%"
            theme="vs-dark"
            value={submittedCode}
            options={{ readOnly: true }}
          />
        </CodeEditorContainer>
      </MainContent>
    </Container>
  );
};

export default CodeReview;
