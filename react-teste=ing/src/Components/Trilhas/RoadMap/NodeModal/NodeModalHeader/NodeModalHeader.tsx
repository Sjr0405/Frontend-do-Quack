import React from 'react';
import CloseIconButton from '../CloseIconButton/CloseIconButton';
import { LinearProgress } from '@mui/material';
import { HeaderContainer, TitleContainer, Title, StatusLabel, HeaderRight } from './NodeModalHeaderStyles';

interface NodeModalHeaderProps {
  selectedNode: string | null;
  status: string;
  progress: number;
  onRequestClose: () => void;
}

const NodeModalHeader: React.FC<NodeModalHeaderProps> = ({ selectedNode, status, progress, onRequestClose }) => (
  <HeaderContainer>
    <TitleContainer>
      <Title>
        {selectedNode}
        <StatusLabel status={status}>{status}</StatusLabel>
      </Title>
      <HeaderRight>
        <CloseIconButton onClick={onRequestClose} />
      </HeaderRight>
    </TitleContainer>
    <LinearProgress variant="determinate" value={progress} style={{ width: '100%', marginTop: '10px' }} />
  </HeaderContainer>
);

export default NodeModalHeader;