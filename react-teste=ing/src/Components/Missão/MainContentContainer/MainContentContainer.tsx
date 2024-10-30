import React from 'react';
import { Container, MissionsWrapper, MissionsColumn, MissionsContent, MissionsTitle, NextMissionInfo, ChallengeColumn } from './MainContentContainerStyles';
import MissionItem from './Mission/MissionItem';
import ChallengeCard from './ChallengeCard/ChallengeCard';

interface MissionData {
  icon: string;
  description: string;
  isCompleted: boolean;
  disabled?: boolean;
}

const missions: MissionData[] = [
  { icon: "/src/Assets/icongoal.svg", description: "Conclua duas etapas de uma trilha", isCompleted: false },
  { icon: "/src/Assets/iconexperience.svg", description: "Ganhe 30 pontos de experiência", isCompleted: false },
  { icon: "/src/Assets/iconlock.svg", description: "Volte amanhã para uma nova missão", isCompleted: true, disabled: true },
];

const MainContentContainer: React.FC = () => {
  return (
    <Container>
      <MissionsWrapper>
        <MissionsColumn>
          <MissionsContent>
            <MissionsTitle>Missões do dia:</MissionsTitle>
            <NextMissionInfo>Uma nova missão diária será adicionada em 3 horas</NextMissionInfo>
            {missions.map((mission, index) => (
              <MissionItem key={index} {...mission} />
            ))}
          </MissionsContent>
        </MissionsColumn>
        <ChallengeColumn>
          <ChallengeCard />
        </ChallengeColumn>
      </MissionsWrapper>
    </Container>
  );
}

export default MainContentContainer;