import React from 'react';
import { SubtitleContainer } from './SubtitleContainerStyle';

interface SubtitleProps {
  children: React.ReactNode;
}

const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return <SubtitleContainer>{children}</SubtitleContainer>;
};

export default Subtitle;