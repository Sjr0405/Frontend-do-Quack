import { Section, Container, Titulo, Subtitulo, Card, CardRow } from './AboutStyles';
import conquista from '../../../Assets/abaut/conquista.png';
import gestao from '../../../Assets/abaut/gestão.png';
import missoes from '../../../Assets/abaut/missões.png';
import niveis from '../../../Assets/abaut/niveis.png';
import pontuacao from '../../../Assets/abaut/pontuação.png';
import trilha from '../../../Assets/abaut/trilha.png';

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Titulo>
          O Quack() oferece recursos desenvolvidos para todos os estágios do aprendizado de programação
        </Titulo>
        <Subtitulo>
          Explore nossos recursos e melhore suas habilidades de programação de forma eficiente e divertida.
        </Subtitulo>
        <CardRow>
          <Card>
            <img src={trilha} alt="Trilhas de aprendizado" />
            <h3>Trilhas de aprendizado detalhadas</h3>
            <p>Precisa de um caminho claro e estruturado para aprender a programar? No Quack(), oferecemos trilhas de aprendizado que vão desde os conceitos básicos até habilidades avançadas.</p>
          </Card>
          <Card>
            <img src={gestao} alt="Gestão do aprendizado"/>
            <h3>Gestão do aprendizado</h3>
            <p>Acompanhe suas tarefas e progresso de forma flexível e dinâmica com quadros de tarefas integrados. Organize seus estudos e gere tempo de forma eficiente.</p>
          </Card>
          <Card>
            <img src={conquista} alt="Conquistas e Badges" />
            <h3>Conquistas e Badges</h3>
            <p>Conquiste badges ao completar trilhas de aprendizado, resolver problemas e participar ativamente da comunidade.</p>
          </Card>
          <Card>
            <img src={pontuacao} alt="Sistema de Pontuação" />
            <h3>Sistema de Pontuação e Recompensas</h3>
            <p>Ganhe pontos à medida que avança nos módulos de aprendizado e participe de desafios para desbloquear certificados e prêmios.</p>
          </Card>
          <Card>
            <img src={niveis} alt="Níveis e Progressão" />
            <h3>Níveis e Progressão</h3>
            <p>Avance por diferentes níveis de dificuldade e melhore suas habilidades, passando de iniciante a especialista.</p>
          </Card>
          <Card>
            <img src={missoes} alt="Desafios e Competições" />
            <h3>Desafios e Competições</h3>
            <p>Participe de desafios semanais e mensais para testar suas habilidades contra outros alunos. Suba no ranking e conquiste prêmios.</p>
          </Card>
        </CardRow>
      </Container>
    </Section>
  );
};

export default About;