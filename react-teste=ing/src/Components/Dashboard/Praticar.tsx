import React from 'react';
import styled from 'styled-components';
import CodeIcon from '@mui/icons-material/Code';
import QuizIcon from '@mui/icons-material/Quiz';
import MultipleChoiceIcon from '@mui/icons-material/CheckBox';

const Container = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
  border-radius: 16px;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #555;
  max-width: 800px;
  border-radius: 16px;
`;

const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 800px;
  border-radius: 16px;
`;

const ActivityCard = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const ActivityIcon = styled.div`
  font-size: 50px;
  margin-bottom: 10px;
  color: #6a1b9a;
`;

const ActivityDetails = styled.div`
  margin-left: 20px;
  text-align: left;
`;

const ActivityName = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
  border-radius: 16px;
`;

const ActivityDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin-top: 10px;
`;

const Praticar: React.FC<{ changeSection: (section: string, activityType?: string) => void }> = ({ changeSection }) => {
  const handleActivityClick = (activityType: string) => {
    changeSection('ActivityPage', activityType);
  };

  return (
    <Container>
      <Title>Praticar as Roadmaps que Você Estudou</Title>
      <Description>
        Para praticar o que você estudou, vamos fazer algumas atividades:
      </Description>
      <ActivityList>
        <ActivityCard onClick={() => handleActivityClick('preenchimento-codigo')}>
          <ActivityIcon>
            <CodeIcon fontSize="inherit" />
          </ActivityIcon>
          <ActivityDetails>
            <ActivityName>Atividades de Preenchimento de Código</ActivityName>
            <ActivityDescription>Complete o código faltante para resolver problemas específicos.</ActivityDescription>
          </ActivityDetails>
        </ActivityCard>
        <ActivityCard onClick={() => handleActivityClick('quizzes')}>
          <ActivityIcon>
            <QuizIcon fontSize="inherit" />
          </ActivityIcon>
          <ActivityDetails>
            <ActivityName>Quizzes de Perguntas</ActivityName>
            <ActivityDescription>Responda a perguntas para testar seu conhecimento.</ActivityDescription>
          </ActivityDetails>
        </ActivityCard>
        <ActivityCard onClick={() => handleActivityClick('multipla-escolha')}>
          <ActivityIcon>
            <MultipleChoiceIcon fontSize="inherit" />
          </ActivityIcon>
          <ActivityDetails>
            <ActivityName>Questões de Múltipla Escolha</ActivityName>
            <ActivityDescription>Escolha a resposta correta entre várias opções.</ActivityDescription>
          </ActivityDetails>
        </ActivityCard>
      </ActivityList>
    </Container>
  );
};

export default Praticar;
