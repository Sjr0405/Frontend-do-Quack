import React from 'react';
import { RoadmapCardContainer, RoadmapImage, RoadmapName, RoadmapDescription } from './StyledComponents';

interface Roadmap {
  name: string;
  img: string;
  description: string;
}

interface RoadmapCardProps {
  roadmap: Roadmap;
  onClick: () => void;
}

const RoadmapCard: React.FC<RoadmapCardProps> = ({ roadmap, onClick }) => {
  return (
    <RoadmapCardContainer onClick={onClick}>
      <RoadmapImage src={roadmap.img} alt={`${roadmap.name} logo`} />
      <RoadmapName>{roadmap.name}</RoadmapName>
      <RoadmapDescription>{roadmap.description}</RoadmapDescription>
    </RoadmapCardContainer>
  );
};

export default RoadmapCard;
