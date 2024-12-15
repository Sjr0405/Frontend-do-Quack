import React from 'react';
import { RoadmapCardContainer, RoadmapImage, RoadmapName, RoadmapDescription } from './StyledComponents';

interface Roadmap {
  title: string;
  imagePath: string;
  description: string;
}

interface RoadmapCardProps {
  roadmap: Roadmap;
  onClick: () => void;
}

const RoadmapCard: React.FC<RoadmapCardProps> = ({ roadmap, onClick }) => {
  if (!roadmap) {
    return <div>No roadmaps available</div>;
  }

  return (
    <RoadmapCardContainer onClick={onClick}>
      <RoadmapImage src={roadmap.imagePath} alt={`${roadmap.title} logo`} />
      <RoadmapName>{roadmap.title}</RoadmapName>
      <RoadmapDescription>{roadmap.description}</RoadmapDescription>
    </RoadmapCardContainer>
  );
};

export default RoadmapCard;
