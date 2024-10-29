import { Section, Container, Column, Column2, Titulo, Subtitulo, CadButton, Img } from './HeroStyles';
import imgSrc from '../../../Assets/HOMEMSENTADO.svg';

const Hero = () => {
  return (
    <Section id="Hero">
      <Container>
        <Column>
          <Titulo>
            Aprenda Programação de Forma
            <br />
            Estruturada com Quack()
          </Titulo>
          <Subtitulo>
            Aprender programação pode ser um desafio, com tantas
            <br />
            informações dispersas e falta de orientação clara.
            <br />
            <br />
            A missão do Quack() é simplificar esse processo. Oferecemos
            <br />
            trilhas de aprendizado detalhadas que guiam você passo a
            <br />
            passo, desde os conceitos básicos até as habilidades mais
            <br />
            avançadas, garantindo que você tenha um caminho claro e
            <br />
            estruturado para se tornar um programador eficiente.
          </Subtitulo>
          <CadButton onClick={() => (window.location.href = "/Cadastro")}>
            Criar uma conta gratuitamente
          </CadButton>
        </Column>
        <Column2>
          <Img
            loading="lazy"
            src={imgSrc}
            alt="Imagem do homem"
          />
        </Column2>
      </Container>
    </Section>
  );
};

export default Hero;