
import { Section, Container, Title, CardRow, Card } from './ShowcaseStyles';
import placeholder7 from '../../../Assets/Placeholders/placeholder7.svg';
import placeholder8 from '../../../Assets/Placeholders/placeholder8.svg';
import placeholder9 from '../../../Assets/Placeholders/placeholder9.svg';

const Showcase = () => {
  return (
    <Section id="showcase">
      <Container>
        <Title>Trilhas mais populares</Title>
        <CardRow>
          <Card>
            <img src={placeholder7} alt="Lógica de Programação" />
            <h3>Lógica de Programação</h3>
            <p>Aprenda os fundamentos essenciais da programação, algoritmos e resolução de problemas. Ideal para iniciantes.</p>
          </Card>
          <Card>
            <img src={placeholder8} alt="Frontend" />
            <h3>Frontend</h3>
            <p>Domine HTML, CSS, JavaScript e frameworks como React. Crie interfaces de usuário atraentes e responsivas.</p>
          </Card>
          <Card>
            <img src={placeholder9} alt="DevOps" />
            <h3>DevOps</h3>
            <p>Aprenda CI/CD, automação, Docker, Kubernetes e práticas de DevOps. Obtenha certificações reconhecidas no setor.</p>
          </Card>
        </CardRow>
      </Container>
    </Section>
  );
}

export default Showcase;