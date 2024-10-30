import React from "react";
import { Container } from './MainHeaderStyles';
import Logo from './Logo/Logo';
import BackButton from './BackButton/BackButton';

const MainHeader: React.FC = () => {
  return (
    <Container>
      <Logo />
      <BackButton />
    </Container> 
  );
}

export default MainHeader;