import { Section, Container, Column, Column2, Titulo, Subtitulo, CadButton, Img, BackgroundWrapper, BackgroundLayerRight, BackgroundLayerLeft } from './HeroStyles';
import imgSrc from '../../../Assets/HOMEMSENTADO.svg';
import Navigation from '../Navigation/Navigation'; // Importando o componente Navigation

// Importando as novas imagens SVG
import Vector123 from '../../../svgs/Landpage-svgs/123.svg';
import Vector2 from '../../../svgs/Landpage-svgs/5.svg';

const Hero = () => {
  return (
    <Section id="Hero">
      <Navigation /> {/* Incluindo o componente Navigation */}
      <BackgroundWrapper position="right">
        <BackgroundLayerRight src={Vector123} alt="Vector 123" />
      </BackgroundWrapper>
      <BackgroundWrapper position="left">
        <BackgroundLayerLeft src={Vector2} alt="Vector 2" />
      </BackgroundWrapper>
      <Container>
        <Column>
          <Titulo>
            Aprenda Programação de Forma
            <br />
            Estruturada com Quack()
          </Titulo>
          <Subtitulo>
            Aprender programação pode ser um desafio, com tantas
            informações dispersas e falta de orientação clara.
            A missão do Quack() é simplificar esse processo. Oferecemos
            trilhas de aprendizado detalhadas que guiam você passo a
            passo, desde os conceitos básicos até as habilidades mais
            avançadas, garantindo que você tenha um caminho claro e
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