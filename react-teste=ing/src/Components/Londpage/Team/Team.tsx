import React from 'react';
import { Section, Title, Container, MembersContainer, Item, ImageContainer, Name, Position } from './TeamStyles';
import team1 from '../../../Assets/team1.png';
import team2 from '../../../Assets/team2.png';
import team3 from '../../../Assets/team3.png';
import team4 from '../../../Assets/team4.png';
import team5 from '../../../Assets/team5.png';

interface MemberProps {
  img: string;
  name: string;
  position: string;
}

const MemberComponent: React.FC<MemberProps> = ({ img, name, position }) => {
  return (
    <Item>
      <ImageContainer>
        <img width={500} height={400} src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

const Team = () => {
  return (
    <Section id="team">
      <Container>
        <Title>Equipe</Title>
        <MembersContainer>
          <MemberComponent img={team1} name="Adriel Nunes" position="Backend" />
          <MemberComponent img={team2} name="Elisson Nadson" position="Frontend" />
          <MemberComponent img={team3} name="José Henrique" position="Backend" />
          <MemberComponent img={team4} name="Samuel Jr." position="Frontend" />
          <MemberComponent img={team5} name="Thiago de Andrade" position="Backend" />
        </MembersContainer>
      </Container>
    </Section>
  );
};

export default Team;