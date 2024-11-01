import React from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import Editor from '@monaco-editor/react';

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

const EditorContainer = styled.div`
  display: flex;
  height: 75%;
  padding: 20px;
  background-color: #F4F4F9;
  justify-content: center;
`;

const LanguageSelector = styled.select`
  padding: 10px;
  font-size: 16px;
  margin-right: 20px;
  border-radius: 5px;
  border: 1px solid #BFB9B9;
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ActionButton = styled.button`
  background-color: #7A5FF5;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 15px 30px;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  margin: 0 15px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export class Lasagna {
  expectedMinutesInOven() {
    return 40;
  }

  remainingMinutesInOven(actualMinutesInOven: number) {
    return 40 - actualMinutesInOven;
  }

  preparationTimeInMinutes(layers: number) {
    return layers * 2;
  }

  totalTimeInMinutes(layers: number, actualMinutesInOven: number) {
    return this.preparationTimeInMinutes(layers) + actualMinutesInOven;
  }
}

const FazerAtividade = ({ changeSection }: { changeSection: (section: string) => void }) => {
  const [userCode, setUserCode] = React.useState(`public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }`);
  const [language, setLanguage] = React.useState('python');

  const rodarTeste = () => {
    try {
      // Avaliando o código do usuário
      const evalCode = new Function(userCode + "; return new Lasagna();");
      const lasagna = evalCode();

      const Cond1 = 40;
      const result1 = lasagna.expectedMinutesInOven();
      if (result1 !== Cond1) {
        throw new Error(`Erro no teste expectedMinutesInOven: Esperado ${Cond1}, mas obteve ${result1}`);
      }

      const Cond2 = 30;
      const result2 = lasagna.remainingMinutesInOven(10);
      if (result2 !== Cond2) {
        throw new Error(`Erro no teste remainingMinutesInOven: Esperado ${Cond2} com 10 minutos no forno, mas obteve ${result2}`);
      }

      const Cond3 = 4;
      const result3 = lasagna.preparationTimeInMinutes(2);
      if (result3 !== Cond3) {
        throw new Error(`Erro no teste preparationTimeInMinutes: Esperado ${Cond3} minutos com 2 camadas, mas obteve ${result3}`);
      }

      const Cond4 = 23;
      const result4 = lasagna.totalTimeInMinutes(2, 20);
      if (result4 !== Cond4) {
        throw new Error(`Erro no teste totalTimeInMinutes: Esperado ${Cond4} minutos no total com 2 camadas e 20 minutos no forno, mas obteve ${result4}`);
      }

      Swal.fire('Sucesso!', 'Todos os testes passaram com sucesso.', 'success').then(() => {
        changeSection('CodeReview');
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Falha no Teste',
        text: (error as Error).message,
        footer: `<a href="/FazerAtividade" style="color: #eb832e;">Clique aqui ver o log</a>`
      });
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
            <SelectedTopBarItem onClick={() => changeSection('FazerAtividade')}>
              <a>Fazer Atividade</a>
            </SelectedTopBarItem>
            <TopBarItem onClick={() => changeSection('SolicitarAjuda')}>
              <a>Solicitar Quacksensei</a>
            </TopBarItem>
            <TopBarItem onClick={() => changeSection('CodeReview')}>
              <a>Code Review</a>
            </TopBarItem>
            <TopBarItem onClick={() => changeSection('Respostas')} style={{ border: 'none' }}>
              <a>Respostas</a>
            </TopBarItem>
          </TopBar>

          
        </Header>
        <LanguageSelector value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="java">Java</option>
            <option value="typescript">TypeScript</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="csharp">C#</option>
            <option value="php">PHP</option>
          </LanguageSelector>

        <EditorContainer>
          
          <Editor
            height="100%"
            width="100%"
            language={language} // Set language based on dropdown
            theme="vs-dark"
            value={userCode}
            onChange={(value) => setUserCode(value || '')}
          />
        </EditorContainer>

        <ActionButtonsContainer>
          <ActionButton onClick={rodarTeste}>Rodar teste</ActionButton>
          <ActionButton onClick={() => {
            Swal.fire('Sucesso!', 'Atividade enviada com sucesso.', 'success').then(() => {
              changeSection('Respostas');
            });
          }}>Enviar</ActionButton>
        </ActionButtonsContainer>
      </MainContent>
    </Container>
  );
};

export default FazerAtividade;
