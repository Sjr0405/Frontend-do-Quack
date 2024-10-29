import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import { Section, Title, Container, BoxContainer, Box } from './FaqStyles';
import Accordion from './Accordion';

const Faq: React.FC = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let element = ref.current;

    // Removendo a configuração do ScrollTrigger que fixa o contêiner
    ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Section ref={ref} id="faq">
      <Container>
        <Title>FAQ</Title>
        <BoxContainer>
          <Box>
            <Accordion ScrollTrigger={ScrollTrigger} title="O que é o Quack()?">
              O Quack() é uma plataforma de aprendizado de programação que oferece trilhas de aprendizado bem estruturadas para guiá-lo em sua jornada de programação.
            </Accordion>
            <Accordion ScrollTrigger={ScrollTrigger} title="Como posso me inscrever no Quack()?">
              Você pode se inscrever no Quack() acessando a página de cadastro e preenchendo o formulário com suas informações.
            </Accordion>
            <Accordion ScrollTrigger={ScrollTrigger} title="Quais linguagens de programação posso aprender no Quack()?">
              No Quack(), você pode aprender diversas linguagens de programação, incluindo Python, JavaScript, Java, C#, e muito mais.
            </Accordion>
          </Box>
          <Box>
            <Accordion ScrollTrigger={ScrollTrigger} title="O Quack() oferece certificações?">
              Sim, o Quack() oferece certificações para os cursos concluídos, que você pode adicionar ao seu currículo e perfil do LinkedIn.
            </Accordion>
            <Accordion ScrollTrigger={ScrollTrigger} title="O Quack() é gratuito?">
              O Quack() oferece tanto cursos gratuitos quanto pagos. Você pode começar com os cursos gratuitos e, se desejar, avançar para os cursos pagos para um aprendizado mais aprofundado.
            </Accordion>
            <Accordion ScrollTrigger={ScrollTrigger} title="Como posso acessar os cursos do Quack()?">
              Você pode acessar os cursos do Quack() através do nosso site, onde encontrará todas as trilhas de aprendizado disponíveis.
            </Accordion>
          </Box>
        </BoxContainer>
      </Container>
    </Section>
  );
};

export default Faq;