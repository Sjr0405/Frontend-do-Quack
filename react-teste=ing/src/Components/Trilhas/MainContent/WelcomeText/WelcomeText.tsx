import React from 'react';
import { WelcomeTextContainer } from './WelcomeTextStyles';

interface WelcomeTextProps {
  children: React.ReactNode;
}

const WelcomeText: React.FC<WelcomeTextProps> = ({ children }) => {
  return <WelcomeTextContainer>{children}</WelcomeTextContainer>;
};

export default WelcomeText;