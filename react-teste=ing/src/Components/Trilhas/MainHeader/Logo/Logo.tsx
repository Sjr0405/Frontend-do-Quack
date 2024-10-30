import React from 'react';
import LogoSvg from '../../../../Assets/Logo.svg';
import { LogoContainer, LogoImage, LogoText } from './LogoStyles';

const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <LogoImage src={LogoSvg} alt="Logo" />
      <LogoText>Quack()</LogoText>
    </LogoContainer>
  );
};

export default Logo;