import React from 'react';
import { Section, Container, ImgContainer, Title, BtnContainer, JoinNow } from './JoinStyles';
import join1 from '../../../Assets/join1.png';
import join2 from '../../../Assets/join2.png';
import join3 from '../../../Assets/join3.png';
import join4 from '../../../Assets/join4.png';
import join5 from '../../../Assets/join5.png';
import join6 from '../../../Assets/join6.png';

const Join: React.FC = () => {
  return (
    <Section>
      <Container>
        <ImgContainer>
          <img src={join1} alt="Join 1" />
          <img src={join2} alt="Join 2" />
          <img src={join3} alt="Join 3" />
          <img src={join4} alt="Join 4" />
          <img src={join5} alt="Join 5" />
          <img src={join6} alt="Join 6" />
        </ImgContainer>
        <Title>Junte-se ao <br /> Quack()</Title>
        <BtnContainer>
          <JoinNow href={"/#"} target='_blank'>
            Junte-se Agora
          </JoinNow>
        </BtnContainer>
      </Container>
    </Section>
  );
};

export default Join;