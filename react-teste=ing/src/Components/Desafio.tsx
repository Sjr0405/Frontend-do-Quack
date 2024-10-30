import styled from 'styled-components';

// Styled Components
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
`

const ContentContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const ContentHeader = styled.header`
  display: flex;
  align-items: center;
`;

const ContentImage = styled.img`
  width: 50px;
  margin-right: 10px;
`;

const ContentTitle = styled.h1`
  color: #6B47DC;
  font-size: 30px;
  font-weight: 500;
  font-family: 'Montserrat Alternates', sans-serif;
  text-align: left;
  margin-top: 20px;
`;

const Paragraph = styled.p`
  margin-top: 20px;
`;

const Divider = styled.hr`
  margin: 20px 0;
  border: none;
  border-radius: 10px;
  border-top: 10px solid #6B47DC;
`;

const ListItem = styled.li`
  
  margin: 20px 0;
`;

const ListTitle = styled.h3``;

const ListDescription = styled.p``;

const CodeBlock = styled.pre`
  color: #000;
  width: fit-content;
  font-family: 'Courier New', monospace;
  font-size: 18px;
  text-align: left;
  background-color: #F8F8FF;
  padding: 15px;
  border-radius: 20px;
  border: 1px solid #6B47DC;

   em {
    color: gray;
    font-style: italic;
  }
`;

const Constant = styled.a`
  color: #FC7A02;
`;

const Rule = styled.a`
  color: #6B47DC;
`;

const Variable = styled.a`
  color: #4D79FF;
`;

const Function = styled.a`
  color: #000;
`;

const Desafio = ({ changeSection }: { changeSection: (section: string) => void }) => {


  return (
    <Container>
      {/* Main Content */}
      <MainContent>
        <Header>
          <TopBar>
            <SelectedTopBarItem onClick={() => changeSection('Atividade')}>
              <a>Visão Geral</a>
            </SelectedTopBarItem>
            <TopBarItem onClick={() => changeSection('FazerAtividade')}>
              <a>Fazer Atividade</a>
            </TopBarItem>
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
        <ContentContainer>
          <ContentHeader>
            <ContentImage src="/src/svgs/Atividade-svgs/1.svg" alt="Lasagna" />
            <ContentTitle>Faça sua Lasagna</ContentTitle>
          </ContentHeader>
          <Paragraph>
            Neste exercício, você escreverá alguns códigos para ajudá-lo a preparar uma lasanha brilhante com base no seu livro de culinária favorito.
            Você tem quatro tarefas, todas relacionadas ao tempo gasto no preparo da lasanha.
          </Paragraph>
          <Divider />
          <ol>
            <ListItem>
              <ListTitle>Defina o tempo esperado de forno em minutos</ListTitle>
              <ListDescription>
                Defina o método <code>expectedMinutesInOven()</code> que não aceita nenhum parâmetro e retorna quantos minutos a lasanha deve ficar no forno. De acordo com o livro de culinária, o tempo esperado do forno em minutos é 40:
              </ListDescription>
              <CodeBlock>
                <Constant>Lasagna lasagna</Constant> = <Rule>new</Rule> <Variable>Lasagna()</Variable>;<br />
                <Function>lasagna.expectedMinutesInOven();</Function><br />
                <em>// = 40</em>
              </CodeBlock>
            </ListItem>

            <ListItem>
              <ListTitle>Calcule o tempo restante do forno em minutos</ListTitle>
              <ListDescription>
                Defina o método <code>remainingMinutesInOven()</code> que toma como parâmetro os minutos reais que a lasanha esteve no forno e retorna quantos minutos a lasanha ainda tem para permanecer no forno:
              </ListDescription>
              <CodeBlock>
                <Constant>Lasagna lasagna</Constant>= <Rule>new</Rule> <Variable>Lasagna()</Variable>();<br />
                <Function>lasagna.remainingMinutesInOven(30)</Function><br />
                <em>// = 10</em>
              </CodeBlock>
            </ListItem>

            <ListItem>
              <ListTitle>Calcule o tempo de preparo em minutos</ListTitle>
              <ListDescription>
                Defina o método <code>preparationTimeInMinutes()</code> que usa como parâmetro o número de camadas que você adicionou à lasanha e retorna quantos minutos você gastou preparando a lasanha:
              </ListDescription>
              <CodeBlock>
                <Constant>Lasagna lasagna</Constant>= <Rule>new</Rule> <Variable>Lasagna()</Variable>();<br />
                <Function>lasagna.preparationTimeInMinutes(2)</Function><br />
                <em>// = 2 * 2 = 4</em>
              </CodeBlock>
            </ListItem>

            <ListItem>
              <ListTitle>Calcule o tempo total de preparo da lasanha</ListTitle>
              <ListDescription>
                Defina o método <code>totalTimeInMinutes()</code> que usa como parâmetro o número de camadas que você adicionou à lasanha e retorna quanto tempo a lasanha levou para ser feita, considerando o tempo de forno e o tempo de preparação:
              </ListDescription>
              <CodeBlock>
                <Constant>Lasagna lasagna</Constant>= <Rule>new</Rule> <Variable>Lasagna()</Variable>();<br />
                <Function>lasagna.totalTimeInMinutes(3, 20)</Function><br />
                <em>// = 2 * 2 + 30 = 34</em>
              </CodeBlock>
            </ListItem>
          </ol>
        </ContentContainer>
      </MainContent>
    </Container>
  );
};

export default Desafio;
