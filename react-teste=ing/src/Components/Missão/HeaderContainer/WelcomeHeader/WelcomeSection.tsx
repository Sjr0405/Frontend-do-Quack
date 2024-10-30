import React from 'react';
import { StyledHeader } from './WelcomeSectionStyles';

interface WelcomeHeaderProps {
  userName: string;
}

const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({ userName }) => {
  return (
    <StyledHeader>Bom ver você novamente, {userName}!</StyledHeader>
  );
};

export default WelcomeHeader;