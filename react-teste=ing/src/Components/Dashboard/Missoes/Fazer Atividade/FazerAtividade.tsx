import React, { useEffect } from 'react';
import {
  Container,
  MainContent,
  Header,
  TopBar,
  TopBarItem,
  SelectedTopBarItem,
  LanguageSelector,
  EditorContainer,
  ActionButtonsContainer,
  ActionButton,
} from './FazerAtiviadeStyles.ts';
import Swal from 'sweetalert2';
import Editor from '@monaco-editor/react';

const FazerAtividade = ({ changeSection }: { changeSection: (section: string, code?: string) => void }) => {
  const [userCode, setUserCode] = React.useState(`public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }`);
  const [language, setLanguage] = React.useState('java');
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  useEffect(() => {
    const savedCode = localStorage.getItem('userCode');
    if (savedCode) {
      setUserCode(savedCode);
    }
  }, []);

  useEffect(() => {
    if (userCode) {
      localStorage.setItem('userCode', userCode);
    }
  }, [userCode]);

  const rodarTeste = () => {
    Swal.fire('Rodando Testes...', 'Simulação de testes em execução.', 'info');
  };

  const handleSubmit = () => {
    Swal.fire('Sucesso!', 'Atividade enviada com sucesso.', 'success').then(() => {
      setIsSubmitted(true);
      changeSection('CodeReview', userCode); // Envia o código
    });
  };

  const verificarResposta = () => {
    changeSection('Respostas');
  };

  return (
    <Container>
      <MainContent>
        {/* Cabeçalho */}
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

        {/* Selecionador de linguagem */}
        <LanguageSelector value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="java">Java</option>
          <option value="typescript">TypeScript</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="csharp">C#</option>
          <option value="php">PHP</option>
        </LanguageSelector>

        {/* Editor de código */}
        <EditorContainer>
          <Editor
            height="100%"
            width="100%"
            language={language}
            theme="vs-dark"
            value={userCode}
            onChange={(value) => setUserCode(value || '')}
            options={{ readOnly: isSubmitted }}
          />
        </EditorContainer>

        {/* Botões de ação */}
        <ActionButtonsContainer style={{ justifyContent: isSubmitted ? 'center' : 'center' }}>
          {!isSubmitted ? (
            <div style={{ display: 'flex', alignItems: 'center',  }}>
              <ActionButton onClick={rodarTeste}>
                Rodar teste
              </ActionButton>
              <ActionButton onClick={handleSubmit}>
                Enviar
              </ActionButton>
            </div>
          ) : (
            <ActionButton onClick={verificarResposta}>
              Ver Resposta
            </ActionButton>
          )}
        </ActionButtonsContainer>
      </MainContent>
    </Container>
  );
};

export default FazerAtividade;
