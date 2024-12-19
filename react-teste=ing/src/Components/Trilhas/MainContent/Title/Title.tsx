import React from 'react';
import { TitleContainer } from './TitleStyles';

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <TitleContainer>{children}</TitleContainer>;
};

export default Title;