import React from 'react';
import { FooterContainer, Button } from './NodeModalFooterStyles';

interface NodeModalFooterProps {
  isChecked: boolean[];
  handleStatusChange: (newStatus: string) => void;
}

const NodeModalFooter: React.FC<NodeModalFooterProps> = ({ isChecked, handleStatusChange }) => (
  <FooterContainer>
    <Button
      onClick={() => handleStatusChange('concluído')}
      disabled={!isChecked.every((checked) => checked)}
    >
      Concluir
    </Button>
  </FooterContainer>
);

export default NodeModalFooter;