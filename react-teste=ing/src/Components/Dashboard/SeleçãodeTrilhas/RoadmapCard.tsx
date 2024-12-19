import React from 'react';
import { RoadmapCardContainer, RoadmapImage, RoadmapName, RoadmapDescription } from './StyledComponents';

interface Roadmap {
  title: string;
  imagePath: string;
  subtitle: string;
  color: string;
}

interface RoadmapCardProps {
  roadmap: Roadmap;
  onClick: () => void;
}

const RoadmapCard: React.FC<RoadmapCardProps> = ({ roadmap, onClick }) => {
  if (!roadmap) {
    return <div>No roadmaps available</div>;
  }

  const borderColor = roadmap.color;
  const shadowColor = roadmap.color;

  return (
    <RoadmapCardContainer onClick={onClick} borderColor={borderColor} shadowColor={shadowColor}>
      <RoadmapImage src={roadmap.imagePath} alt={`${roadmap.title} logo`} />
      <RoadmapName>{roadmap.title}</RoadmapName>
      <RoadmapDescription>{roadmap.subtitle}</RoadmapDescription>
    </RoadmapCardContainer>
  );
};

export default RoadmapCard;
