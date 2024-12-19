import React from 'react';
import { DetailsWrapper, CompletionPercentage, StepsCompleted } from './ProgressDetailsStyles';

interface ProgressDetailsProps {
  completionPercentage: number;
  completedSteps: number;
  totalSteps: number;
}

const ProgressDetails: React.FC<ProgressDetailsProps> = ({
  completionPercentage,
  completedSteps,
  totalSteps
}) => {
  return (
    <DetailsWrapper>
      <CompletionPercentage>{completionPercentage.toFixed(2)}% Concluído</CompletionPercentage>
      <StepsCompleted>
        {completedSteps} de {totalSteps} Concluído
      </StepsCompleted>
    </DetailsWrapper>
  );
};

export default ProgressDetails;