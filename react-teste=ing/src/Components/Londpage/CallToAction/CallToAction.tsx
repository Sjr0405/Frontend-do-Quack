import { Section, Container, Title, Description, Button, ImageRight, Content } from './CallToActionStyles';
import fulbodyLogo from '../../../Assets/Fulbody-logo.svg';

const CallToAction = () => {
  return (
    <Section id="call-to-action">
      <Container>
        <Content>
          <Title>
            Junte-se à Revolução do<br/> Aprendizado em Programação!
          </Title>
          <Description>
            O Quack() oferece mais de 150 trilhas de aprendizado bem<br/> estruturadas, projetadas para guiá-lo da melhor forma possível<br/> em sua jornada de programação.
          </Description>
          <Button onClick={() => (window.location.href = "/Cadastro")}>Cadastre-se</Button>
        </Content>
        <ImageRight>
          <img src={fulbodyLogo} alt="Patinho" />
        </ImageRight>
      </Container>
    </Section>
  );
}

export default CallToAction;