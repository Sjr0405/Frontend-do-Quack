import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Minus } from "./Minus";
import { Plus } from "./Plus";

const Container = styled.div`
  cursor: pointer;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.carouselColor};
  margin: 3rem 0;

  @media (max-width: 48em) {
    margin: 2rem 0;
  }
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontsm};
  font-family: 'Montserrat Alternates', sans-serif; /* Fonte Montserrat Alternates */
  font-weight: bold; /* Negrito */
  color: #fff; /* Cor do texto preta */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface RevealProps {
  clicked: boolean;
}

const Reveal = styled.div<RevealProps>`
  display: ${(props) => (props.clicked ? "block" : "none")};
  margin-top: 1rem;
  color: #fff; /* Cor do texto preta */
  font-size: ${(props) => props.theme.fontsm};
  font-family: 'Montserrat Alternates', sans-serif; /* Fonte Montserrat Alternates */
  font-weight: 300;
  line-height: 1.1rem;
  max-height: ${(props) => (props.clicked ? "none" : "0")}; /* Adiciona espaço para a resposta */
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
`;

const Indicator = styled.span`
  font-size: ${(props) => props.theme.fontxxl};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 1rem;
    height: auto;
    fill: ${(props) => props.theme.carouselColor};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  ScrollTrigger: { refresh: () => void };
}

const Accordion: React.FC<AccordionProps> = ({ title, children, ScrollTrigger }) => {
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    ScrollTrigger.refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapse]);

  return (
    <Container>
      <Title onClick={() => setCollapse(!collapse)}>
        <Name>
          <span>{title}</span>
        </Name>
        <Indicator>
          {collapse ? <Minus /> : <Plus />}
        </Indicator>
      </Title>
      <Reveal clicked={collapse}>{children}</Reveal>
    </Container>
  );
};

export default Accordion;