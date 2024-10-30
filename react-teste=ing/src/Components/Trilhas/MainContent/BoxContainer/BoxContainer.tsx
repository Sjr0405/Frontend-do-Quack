import React from 'react';
import { ProgressContainer, ProgressWrapper } from './BoxContainerStyles';
import ProgressHeader from './ProgressHeader/ProgressHeader';
import ProgressDetails from './ProgressDetails/ProgressDetails';

interface RoadmapProgressProps {
  title: string;
  description: string;
  completionPercentage: number;
  completedSteps: number;
  totalSteps: number;
}

const BoxContainer: React.FC<RoadmapProgressProps> = ({
  title,
  description,
  completionPercentage,
  completedSteps,
  totalSteps
}) => {
  return (
    <ProgressContainer>
      <ProgressWrapper>
        <ProgressHeader title={title} description={description} />
        <ProgressDetails
          completionPercentage={completionPercentage}
          completedSteps={completedSteps}
          totalSteps={totalSteps}
        />
      </ProgressWrapper>
    </ProgressContainer>
  );
};

export default BoxContainer;