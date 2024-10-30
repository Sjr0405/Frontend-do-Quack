import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from './CloseIconButtonStyles';

interface CloseIconButtonProps {
  onClick: () => void;
}

const CloseIconButton: React.FC<CloseIconButtonProps> = ({ onClick }) => (
  <Button onClick={onClick}>
    <CloseIcon />
  </Button>
);

export default CloseIconButton;