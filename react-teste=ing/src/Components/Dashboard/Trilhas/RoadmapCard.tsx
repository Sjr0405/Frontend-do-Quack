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

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const RoadmapCard: React.FC<RoadmapCardProps> = ({ roadmap, onClick }) => {
  if (!roadmap) {
    return <div>No roadmaps available</div>;
  }

  const borderColor = getRandomColor();
  const shadowColor = getRandomColor();

  return (
    <RoadmapCardContainer onClick={onClick} borderColor={borderColor} shadowColor={shadowColor}>
      <RoadmapImage src={roadmap.imagePath} alt={`${roadmap.title} logo`} />
      <RoadmapName>{roadmap.title}</RoadmapName>
      <RoadmapDescription>{roadmap.description}</RoadmapDescription>
    </RoadmapCardContainer>
  );
};

export default RoadmapCard;
