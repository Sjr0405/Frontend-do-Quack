import React from 'react';
import { MissionWrapper, MissionIcon, MissionDescription } from './MissionItemStyles';

interface MissionItemProps {
  icon: string;
  description: string;
  isCompleted: boolean;
  disabled?: boolean;
}

const MissionItem: React.FC<MissionItemProps> = ({ icon, description, isCompleted, disabled = false }) => {
  return (
    <MissionWrapper isCompleted={isCompleted} disabled={disabled}>
      <MissionIcon src={icon} alt="Mission Icon" />
      <MissionDescription>{description}</MissionDescription>
    </MissionWrapper>
  );
}

export default MissionItem;