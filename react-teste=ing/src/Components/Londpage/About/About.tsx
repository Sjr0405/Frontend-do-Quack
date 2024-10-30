import { Section, Container, Titulo, Card, CardRow } from './AboutStyles';
import placeholder1 from '../../../Assets/Placeholders/placeholder1.svg';
import placeholder2 from '../../../Assets/Placeholders/placeholder2.svg';
import placeholder3 from '../../../Assets/Placeholders/placeholder3.svg';
import placeholder4 from '../../../Assets/Placeholders/placeholder4.svg';
import placeholder5 from '../../../Assets/Placeholders/placeholder5.svg';
import placeholder6 from '../../../Assets/Placeholders/placeholder6.svg';

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Titulo>
          O Quack() oferece recursos desenvolvidos para todos os estágios do aprendizado<br/> de programação
        </Titulo>
        <CardRow>
          <Card>
            <img src={placeholder1} alt="Trilhas de aprendizado" />
            <h3>Trilhas de aprendizado detalhadas</h3>
            <p>Precisa de um caminho claro e estruturado para aprender a programar? No Quack(), oferecemos trilhas de aprendizado que vão desde os conceitos básicos até habilidades avançadas.</p>
          </Card>
          <Card>
            <img src={placeholder2} alt="Gestão do aprendizado"/>
            <h3>Gestão do aprendizado</h3>
            <p>Acompanhe suas tarefas e progresso de forma flexível e dinâmica com quadros de tarefas integrados. Organize seus estudos e gere tempo de forma eficiente.</p>
          </Card>
          <Card>
            <img src={placeholder3} alt="Conquistas e Badges" />
            <h3>Conquistas e Badges</h3>
            <p>Conquiste badges ao completar trilhas de aprendizado, resolver problemas e participar ativamente da comunidade.</p>
          </Card>
          <Card>
            <img src={placeholder4} alt="Sistema de Pontuação" />
            <h3>Sistema de Pontuação e Recompensas</h3>
            <p>Ganhe pontos à medida que avança nos módulos de aprendizado e participe de desafios para desbloquear certificados e prêmios.</p>
          </Card>
          <Card>
            <img src={placeholder5} alt="Níveis e Progressão" />
            <h3>Níveis e Progressão</h3>
            <p>Avance por diferentes níveis de dificuldade e melhore suas habilidades, passando de iniciante a especialista.</p>
          </Card>
          <Card>
            <img src={placeholder6} alt="Desafios e Competições" />
            <h3>Desafios e Competições</h3>
            <p>Participe de desafios semanais e mensais para testar suas habilidades contra outros alunos. Suba no ranking e conquiste prêmios.</p>
          </Card>
        </CardRow>
      </Container>
    </Section>
  );
};

export default About;