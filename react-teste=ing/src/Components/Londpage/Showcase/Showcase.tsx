import React from 'react';
import { Section, Container, Title, Card, Carousel, CarouselWrapper, Arrow } from './ShowcaseStyles';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import placeholder7 from '../../../Assets/svgs/Home-svgs/Programacao.svg';
import placeholder8 from '../../../Assets/icones/html-templates-svgrepo-com.svg';
import placeholder9 from '../../../Assets/icones/DevOps.svg';
import aiEngineer from '../../../Assets/icones/ai engineer.png';
import cIcon from '../../../Assets/icones/c.svg';
import cppIcon from '../../../Assets/icones/cpp.svg';
import cyberSecurity from '../../../Assets/icones/Cyber Security.png';
import dartIcon from '../../../Assets/icones/dart.svg';
import dataAnalyst from '../../../Assets/icones/data analyst.png';
import devOpsIcon from '../../../Assets/icones/DevOps.svg';
import fullStack from '../../../Assets/icones/FullStack.svg';
import goIcon from '../../../Assets/icones/go.svg';
import htmlTemplates from '../../../Assets/icones/html-templates-svgrepo-com.svg';
import javaIcon from '../../../Assets/icones/java.svg';
import javascriptIcon from '../../../Assets/icones/javascript.svg';
import kotlinIcon from '../../../Assets/icones/kotlin.svg';
import luaIcon from '../../../Assets/icones/lua.svg';
import phpIcon from '../../../Assets/icones/php.svg';
import pythonIcon from '../../../Assets/icones/python.svg';
import rubyIcon from '../../../Assets/icones/ruby.svg';
import softwareArchitecture from '../../../Assets/icones/Software Architecture.png';
import typescriptIcon from '../../../Assets/icones/typescript.svg';

const scrollCarousel = (direction: 'left' | 'right') => {
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    const scrollAmount = direction === 'left' ? -500 : 500;
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
};

const addDragScroll = () => {
  const carousel = document.querySelector('.carousel');
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  if (carousel) {
    carousel.addEventListener('mousedown', (e: any) => {
      isDown = true;
      carousel.classList.add('active');
      startX = e.pageX - (carousel as HTMLElement).offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
      isDown = false;
      carousel.classList.remove('active');
    });

    carousel.addEventListener('mouseup', () => {
      isDown = false;
      carousel.classList.remove('active');
    });

    carousel.addEventListener('mousemove', (e: any) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - (carousel as HTMLElement).offsetLeft;
      const walk = (x - startX) * 3; // Velocidade de rolagem
      carousel.scrollLeft = scrollLeft - walk;
    });
  }
};

const Showcase = () => {
  React.useEffect(() => {
    addDragScroll();
  }, []);

  return (
    <Section id="showcase">
      <Container>
        <Title>Trilhas mais populares</Title>
        <CarouselWrapper>
          <Arrow className="left" onClick={() => scrollCarousel('left')}>
            <FaArrowLeft />
          </Arrow>
          <Carousel className="carousel">
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
            <Card>
              <img src={aiEngineer} alt="AI Engineer" />
              <h3>AI Engineer</h3>
              <p>Explore inteligência artificial, aprendizado de máquina e redes neurais. Torne-se um especialista em IA.</p>
            </Card>
            <Card>
              <img src={cIcon} alt="C Programming" />
              <h3>C Programming</h3>
              <p>Aprenda a linguagem de programação C, uma das mais poderosas e eficientes para desenvolvimento de sistemas.</p>
            </Card>
            <Card>
              <img src={cppIcon} alt="C++ Programming" />
              <h3>C++ Programming</h3>
              <p>Domine C++ para desenvolvimento de software de alto desempenho e jogos.</p>
            </Card>
            <Card>
              <img src={cyberSecurity} alt="Cyber Security" />
              <h3>Cyber Security</h3>
              <p>Aprenda a proteger sistemas e redes contra ataques cibernéticos. Torne-se um especialista em segurança.</p>
            </Card>
            <Card>
              <img src={dartIcon} alt="Dart Programming" />
              <h3>Dart Programming</h3>
              <p>Domine Dart, a linguagem por trás do Flutter, para desenvolvimento de aplicativos móveis e web.</p>
            </Card>
            <Card>
              <img src={dataAnalyst} alt="Data Analyst" />
              <h3>Data Analyst</h3>
              <p>Aprenda a analisar dados e extrair insights valiosos para tomada de decisões empresariais.</p>
            </Card>
            <Card>
              <img src={devOpsIcon} alt="DevOps" />
              <h3>DevOps</h3>
              <p>Aprenda CI/CD, automação, Docker, Kubernetes e práticas de DevOps. Obtenha certificações reconhecidas no setor.</p>
            </Card>
            <Card>
              <img src={fullStack} alt="Full Stack" />
              <h3>Full Stack</h3>
              <p>Domine tanto o frontend quanto o backend para se tornar um desenvolvedor full stack completo.</p>
            </Card>
            <Card>
              <img src={goIcon} alt="Go Programming" />
              <h3>Go Programming</h3>
              <p>Aprenda Go, uma linguagem eficiente e escalável para desenvolvimento de software moderno.</p>
            </Card>
            <Card>
              <img src={htmlTemplates} alt="HTML Templates" />
              <h3>HTML Templates</h3>
              <p>Domine a criação de templates HTML para desenvolvimento web rápido e eficiente.</p>
            </Card>
            <Card>
              <img src={javaIcon} alt="Java Programming" />
              <h3>Java Programming</h3>
              <p>Aprenda Java, uma das linguagens de programação mais populares e versáteis do mundo.</p>
            </Card>
            <Card>
              <img src={javascriptIcon} alt="JavaScript" />
              <h3>JavaScript</h3>
              <p>Domine JavaScript para desenvolvimento web dinâmico e interativo.</p>
            </Card>
            <Card>
              <img src={kotlinIcon} alt="Kotlin Programming" />
              <h3>Kotlin Programming</h3>
              <p>Aprenda Kotlin, a linguagem oficial para desenvolvimento Android.</p>
            </Card>
            <Card>
              <img src={luaIcon} alt="Lua Programming" />
              <h3>Lua Programming</h3>
              <p>Domine Lua, uma linguagem leve e poderosa para scripts e desenvolvimento de jogos.</p>
            </Card>
            <Card>
              <img src={phpIcon} alt="PHP Programming" />
              <h3>PHP Programming</h3>
              <p>Aprenda PHP para desenvolvimento de sites dinâmicos e sistemas web.</p>
            </Card>
            <Card>
              <img src={pythonIcon} alt="Python Programming" />
              <h3>Python Programming</h3>
              <p>Domine Python, uma linguagem versátil e poderosa para desenvolvimento web, ciência de dados e automação.</p>
            </Card>
            <Card>
              <img src={rubyIcon} alt="Ruby Programming" />
              <h3>Ruby Programming</h3>
              <p>Aprenda Ruby, uma linguagem elegante e produtiva para desenvolvimento web.</p>
            </Card>
            <Card>
              <img src={softwareArchitecture} alt="Software Architecture" />
              <h3>Software Architecture</h3>
              <p>Aprenda os princípios de arquitetura de software para criar sistemas robustos e escaláveis.</p>
            </Card>
            <Card>
              <img src={typescriptIcon} alt="TypeScript" />
              <h3>TypeScript</h3>
              <p>Domine TypeScript, uma linguagem que adiciona tipagem estática ao JavaScript para desenvolvimento mais seguro e eficiente.</p>
            </Card>
          </Carousel>
          <Arrow className="right" onClick={() => scrollCarousel('right')}>
            <FaArrowRight />
          </Arrow>
        </CarouselWrapper>
      </Container>
    </Section>
  );
}

export default Showcase;