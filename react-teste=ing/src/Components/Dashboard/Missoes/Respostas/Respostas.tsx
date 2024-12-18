import { useEffect } from 'react';
import Swal from 'sweetalert2';
import esprima from 'esprima';
import {
  Container,
  MainContent,
  Header,
  TopBar,
  TopBarItem,
  SelectedTopBarItem,
  Title,
  CodeEditorContainer,
  rightCode,
} from './RespostasStyles.ts';
import { Editor } from '@monaco-editor/react';

// Props do componente
interface RespostaProps {
  changeSection: (section: string) => void;
  submittedCode?: string;
}

// Componente principal
const Resposta = ({ changeSection, submittedCode }: RespostaProps) => {
  useEffect(() => {
    const alreadyChecked = localStorage.getItem('verRespostaAcionado'); // Checa se já foi acionado
    const trimmedSubmittedCode = submittedCode?.trim() || '';
    const trimmedRightCode = rightCode.trim();

    // Só exibe o Swal na primeira vez ou quando o código estiver vazio
    if (!alreadyChecked || !submittedCode) {
      if (trimmedSubmittedCode === trimmedRightCode) {
        Swal.fire({
          title: 'Parabéns!',
          text: 'O seu código está correto!',
          icon: 'success',
          confirmButtonColor: '#7a5ff5',
          confirmButtonText: 'Continuar',
        });
        localStorage.setItem('verRespostaAcionado', 'true'); // Define que o Swal foi exibido
      } else if (!submittedCode) {
        Swal.fire({
          title: 'Ops!',
          text: 'Nenhum código foi enviado!',
          icon: 'error',
          confirmButtonColor: '#7a5ff5',
          confirmButtonText: 'Continuar',
        });
        localStorage.setItem('verRespostaAcionado', 'true'); // Define que o Swal foi exibido
      } else {
        Swal.fire({
          title: 'Ops! Seu código está incorreto!',
          text: 'Tente revisar e corrigir o código.',
          icon: 'error',
          confirmButtonColor: '#7a5ff5',
          confirmButtonText: 'Entendido',
        });
        localStorage.setItem('verRespostaAcionado', 'true'); // Define que o Swal foi exibido
      }
    }

    const isCodeEqual = (submittedCode: string, rightCode: string) => {
      try {
        const astSubmitted = esprima.parseScript(submittedCode);
        const astRight = esprima.parseScript(rightCode);
        return JSON.stringify(astSubmitted) === JSON.stringify(astRight);
      } catch (e) {
        console.error("Erro ao analisar o código:", e);
        return false;
      }
    };
    
    // Uso da função isCodeEqual diretamente com as strings
    const result = isCodeEqual(trimmedSubmittedCode, trimmedRightCode);
    if (result) {
      console.log("Os códigos são logicamente iguais!");
    } else {
      console.log("Os códigos têm diferenças lógicas!");
    }
  }, [submittedCode]);

  return (
    <Container>
      <MainContent>
        {/* Cabeçalho com a barra de navegação */}
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

        {/* Conteúdo principal */}
        <Title>Resposta</Title>
        <CodeEditorContainer>
          <Editor
            height="100%"
            width="100%"
            theme="vs-dark"
            value={rightCode}
            options={{ readOnly: true }}
          />
        </CodeEditorContainer>
      </MainContent>
    </Container>
  );
};

export default Resposta;
