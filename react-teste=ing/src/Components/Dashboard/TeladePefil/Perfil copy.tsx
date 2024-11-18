import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Container principal
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProfileImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`;

const ProfileImageBuble = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ff6f00;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
`;

const ProfileInfo = styled.div`
  text-align: left;

  h2 {
    font-size: 24px;
    margin: 0;
  }

  p {
    margin: 5px 0;
    font-size: 16px;
    color: #666;
  }

  span {
    color: #4f4cfc;
    font-size: 18px;
    font-weight: bold;
  }
`;

const StatsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const StatsTitle = styled.h2`
  font-size: 20px;
  color: #ff6f00;
  margin-bottom: 10px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 10px;
`;

const StatLabel = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin: 5px 0;
`;

const StatValue = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

const AchievementsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const AchievementsTitle = styled.h2`
  font-size: 20px;
  color: #ff6f00;
  margin-bottom: 10px;
`;

const AchievementItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const AchievementName = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

const AchievementProgress = styled.div`
  width: 50%;
  background-color: #ddd;
  border-radius: 5px;
  position: relative;
`;

const Progress = styled.div`
  width: 60%;
  height: 10px;
  background-color: #ff6f00;
  border-radius: 5px;
`;

const Perfil = () => {
  const navigate = useNavigate();
  const [achievements] = useState([
    { name: 'Lenha na Fogueira', progress: 10, total: 14 },
    { name: 'Sabe-Tudo', progress: 473, total: 500 },
    { name: 'Intelectual', progress: 77, total: 100 },
  ]);

  return (
    <ProfileContainer>
      <Header>
        <h2>Seu Perfil</h2>
      </Header>

      <ProfileSection>
        <ProfileImageContainer>
          <ProfileImageBuble>
            <ProfileImage src="https://randomuser.me/api/portraits/men/1.jpg" alt="Foto do perfil" />
          </ProfileImageBuble>
        </ProfileImageContainer>
        <ProfileInfo>
          <h2>Elisson Nadson</h2>
          <p>Por aqui desde dezembro de 2022</p>
        </ProfileInfo>
      </ProfileSection>

      <StatsSection>
        <StatsTitle>Estatísticas</StatsTitle>
        <StatsGrid>
          <StatItem>
            <StatLabel>Total de XP</StatLabel>
            <StatValue>473</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>Divisão</StatLabel>
            <StatValue>Prata</StatValue>
          </StatItem>
        </StatsGrid>
      </StatsSection>

      <AchievementsSection>
        <AchievementsTitle>Conquistas</AchievementsTitle>
        {achievements.map((achievement, index) => (
          <AchievementItem key={index}>
            <AchievementName>{achievement.name}</AchievementName>
            <AchievementProgress>
              <Progress style={{ width: `${(achievement.progress / achievement.total) * 100}%` }} />
            </AchievementProgress>
          </AchievementItem>
        ))}
      </AchievementsSection>
    </ProfileContainer>
  );
};

export default Perfil;
