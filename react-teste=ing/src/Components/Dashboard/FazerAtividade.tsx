// FazerAtividade.tsx
import React from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import Editor from '@monaco-editor/react';

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
  margin: 20px;
  overflow: hidden;
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

const EditorContainer = styled.div`
  display: flex;
  height: 75%;
  padding: 20px;
  background-color: #F4F4F9;
  justify-content: center;
`;

const LanguageSelector = styled.select`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  font-family: 'Montserrat alternates', sans-serif;
  font-weight: bold;
  background-color: #F4F4F9;
  margin-right: 20px;
  border-radius: 5px;
  border: 1px solid #BFB9B9;

  hover {
    background-color: #BFB9B9;
  }
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

const FazerAtividade = ({ changeSection }: { changeSection: (section: string, code?: string) => void }) => {
  const [userCode, setUserCode] = React.useState(`public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }`);
  const [language, setLanguage] = React.useState('python');
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const rodarTeste = () => {
    try {
        const evalCode = new Function(userCode + "; return new Lasagna();");
        const lasagna = evalCode();

        const expectedMinutesInOven = 40;
        const result1 = lasagna.expectedMinutesInOven();
        if (result1 !== expectedMinutesInOven) {
            throw new Error(`Erro no teste expectedMinutesInOven: Esperado ${expectedMinutesInOven}, mas obteve ${result1}`);
        }

        const remainingMinutesInOvenWith10 = 30;
        const result2 = lasagna.remainingMinutesInOven(10);
        if (result2 !== remainingMinutesInOvenWith10) {
            throw new Error(`Erro no teste remainingMinutesInOven: Esperado ${remainingMinutesInOvenWith10} com 10 minutos no forno, mas obteve ${result2}`);
        }

        const preparationTimeWith2Layers = 4;
        const result3 = lasagna.preparationTimeInMinutes(2);
        if (result3 !== preparationTimeWith2Layers) {
            throw new Error(`Erro no teste preparationTimeInMinutes: Esperado ${preparationTimeWith2Layers} minutos com 2 camadas, mas obteve ${result3}`);
        }

        const totalTimeWith2LayersAnd20OvenMinutes = 23;
        const result4 = lasagna.totalTimeInMinutes(2, 20);
        if (result4 !== totalTimeWith2LayersAnd20OvenMinutes) {
            throw new Error(`Erro no teste totalTimeInMinutes: Esperado ${totalTimeWith2LayersAnd20OvenMinutes} minutos no total com 2 camadas e 20 minutos no forno, mas obteve ${result4}`);
        }

        Swal.fire('Sucesso!', 'Todos os testes passaram com sucesso.', 'success').then(() => {
            changeSection('CodeReview');
        });
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Falha no Teste',
            text: (error as Error).message,
            footer: `<a href="/" style="color: #eb832e;">Clique aqui ver o log</a>`
        });
    }
};


  const handleSubmit = () => {
    Swal.fire('Sucesso!', 'Atividade enviada com sucesso.', 'success').then(() => {
      setIsSubmitted(true);
      changeSection('CodeReview', userCode);
    });
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
            <TopBarItem onClick={() => changeSection('Quacksensei')}>
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
            language={language} 
            theme="vs-dark"
            value={userCode}
            onChange={(value) => !isSubmitted && setUserCode(value || '')}
            options={{ readOnly: isSubmitted }} 
          />
        </EditorContainer>

        <ActionButtonsContainer>
          <ActionButton style={{ marginRight: '2%' }} onClick={rodarTeste}>Rodar teste</ActionButton>
          <ActionButton style={{ marginRight: '8%' }} onClick={handleSubmit}>Enviar</ActionButton>
        </ActionButtonsContainer>
      </MainContent>
    </Container>
  );
};

export default FazerAtividade;