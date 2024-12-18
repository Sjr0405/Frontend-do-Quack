import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-family: 'Montserrat Alternates', -apple-system, Roboto, Helvetica, sans-serif;
  color: #ffffff;
  font-weight: 600;
  width: 75%;
  text-align: left;
  margin: 5px 0;

  @media (max-width: 991px) {
    width: 100%;
    margin-top: 10px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  align-self: flex-start;
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 5px;
  padding-right: 10px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 0;
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #ffffff;
  font-family: 'Montserrat Alternates', -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 600;
  width: 25%;
  text-align: left;
  margin: 5px 0;
  padding: 5px 0;

  @media (max-width: 991px) {
    width: 100%;
    margin-top: 10px;
  }
`;

const CompletionPercentage = styled.div`
  font-size: 16px;
  align-self: flex-start;
  margin-bottom: 5px;
`;

const StepsCompleted = styled.div`
  font-size: 14px;
  align-self: flex-start;
  margin-top: 5px;
`;

const ProgressContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const ProgressWrapper = styled.div`
  border-radius: 8px;
  background-color: #7a5ff5;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 18px 10px 28px 25px;
  display: flex;
  gap: 10px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 20px;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

interface ContainerDeProgressoProps {
  title: string;
  description: string;
  completionPercentage: number;
  completedSteps: number;
  totalSteps: number;
}

const ContainerDeProgresso: React.FC<ContainerDeProgressoProps> = ({
  title,
  description,
  completionPercentage,
  completedSteps,
  totalSteps
}) => {
  return (
    <ProgressContainer>
      <ProgressWrapper>
        <HeaderWrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </HeaderWrapper>
        <DetailsWrapper>
          <CompletionPercentage>{completionPercentage.toFixed(2)}% Concluído</CompletionPercentage>
          <StepsCompleted>
            {completedSteps} de {totalSteps} Concluído
          </StepsCompleted>
        </DetailsWrapper>
      </ProgressWrapper>
    </ProgressContainer>
  );
};

export default ContainerDeProgresso;
