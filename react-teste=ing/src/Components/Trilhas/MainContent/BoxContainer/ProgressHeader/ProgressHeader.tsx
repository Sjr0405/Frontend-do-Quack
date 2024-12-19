import React from 'react';
import { HeaderWrapper, Title, Description } from './ProgressHeaderStyles';

interface ProgressHeaderProps {
  title: string;
  description: string;
}

const ProgressHeader: React.FC<ProgressHeaderProps> = ({ title, description }) => {
  return (
    <HeaderWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </HeaderWrapper>
  );
};

export default ProgressHeader;