import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import NodeModal from "./NodeModal";

// Estilos
const MainContainer = styled.div`
  grid-area: MC;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  max-width: 800px;
  margin: 0 auto;
`;

// Estilos do título
const TitleContainer = styled.h1`
  font-size: 2em;
  font-weight: bold;
  color: #000; /* Título na cor preta */
  margin-bottom: 0.5em;
  text-align: left;
`;

// Estilos do subtítulo
const SubtitleContainer = styled.h2`
  font-size: 1.5em;
  color: #FFA500; /* Subtítulo na cor laranja */
  margin-bottom: 0.5em;
  text-align: left;
`;

// Estilos do texto de boas-vindas
const WelcomeTextContainer = styled.p`
  margin-top: 1em; /* Espaçamento para a descrição */
  font-size: 1em;
  color: #333;
  text-align: left;
`;

// Estilos combinados de BoxContainerStyles.ts
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

// Estilos de ProgressHeader
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-family: 'Montserrat Alternates', -apple-system, Roboto, Helvetica, sans-serif;
  color: #ffffff;
  font-weight: 600;
  width: 75%;
  text-align: left; /* Alinha o texto à esquerda */
  margin: 5px 0; /* Reduz a margem */

  @media (max-width: 991px) {
    width: 100%;
    margin-top: 10px; /* Reduz a margem superior */
  }
`;

const BoxTitle = styled.h2`
  font-size: 24px; /* Diminui o tamanho da fonte */
  align-self: flex-start;
  margin-bottom: 5px; /* Adiciona margem inferior para espaçamento */
`;

const BoxDescription = styled.p`
  font-size: 14px; /* Diminui o tamanho da fonte */
  margin-top: 5px; /* Ajusta a margem superior */
  padding-right: 10px; /* Ajusta o padding direito */

  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 0;
  }
`;

// Estilos de ProgressDetails
const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Garante que os componentes sejam distribuídos entre o topo e a parte inferior */
  color: #ffffff;
  font-family: 'Montserrat Alternates', -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 600;
  width: 25%;
  text-align: left; /* Alinha o texto à esquerda */
  margin: 5px 0; /* Reduz a margem */
  padding: 5px 0; /* Reduz o padding */

  @media (max-width: 991px) {
    width: 100%;
    margin-top: 10px; /* Reduz a margem superior */
  }
`;

const CompletionPercentage = styled.div`
  font-size: 16px; /* Diminui o tamanho da fonte */
  align-self: flex-start;
  margin-bottom: 5px; /* Reduz a margem inferior */
`;

const StepsCompleted = styled.div`
  font-size: 14px; /* Diminui o tamanho da fonte */
  align-self: flex-start; /* Garante que o texto esteja alinhado à esquerda */
  margin-top: 5px; /* Reduz a margem superior */
`;

// Componentes
interface WelcomeTextProps {
  children: React.ReactNode;
}

const WelcomeText: React.FC<WelcomeTextProps> = ({ children }) => {
  return <WelcomeTextContainer>{children}</WelcomeTextContainer>;
};

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <TitleContainer>{children}</TitleContainer>;
};

interface SubtitleProps {
  children: React.ReactNode;
}

const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return <SubtitleContainer>{children}</SubtitleContainer>;
};

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
        <HeaderWrapper>
          <BoxTitle>{title}</BoxTitle>
          <BoxDescription>{description}</BoxDescription>
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

interface Node {
  status: string;
}

interface RoadmapData {
  title: string;
  subtitle: string;
  description: string;
  nodes: Node[];
}

interface UserProgress {
  nodes: { [key: string]: Node };
}

const MainContent: React.FC = () => {
  const [data, setData] = useState<RoadmapData | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgress>({ nodes: {} });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [modalData, setModalData] = useState<string | null>(null);

  useEffect(() => {
    // Ajuste o caminho para o JSON
    fetch('/data/roadmapData.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const totalSteps = data.nodes.length;
  const completedSteps = Object.values(userProgress.nodes).filter((node: Node) => node.status === 'concluído').length;
  const completionPercentage = (completedSteps / totalSteps) * 100;

  const handleNodeCompletion = (nodeLabel: string) => {
    const updatedProgress: UserProgress = {
      ...userProgress,
      nodes: {
        ...userProgress.nodes,
        [nodeLabel]: {
          ...userProgress.nodes[nodeLabel],
          status: 'concluído'
        }
      }
    };
    setUserProgress(updatedProgress);
  };

  const handleNodePending = (nodeLabel: string) => {
    const updatedProgress: UserProgress = {
      ...userProgress,
      nodes: {
        ...userProgress.nodes,
        [nodeLabel]: {
          ...userProgress.nodes[nodeLabel],
          status: 'pendente'
        }
      }
    };
    setUserProgress(updatedProgress);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNode(null);
    setModalData(null);
  };

  return (
    <MainContainer>
      <Title>{data.title}</Title>
      <Subtitle>{data.subtitle}</Subtitle>
      <WelcomeText>{data.description}</WelcomeText>
      
      <BoxContainer
        title="Trilha"
        description="Termine todas as etapas do roadmap para ganhar a chave da trilha."
        completionPercentage={completionPercentage}
        completedSteps={completedSteps}
        totalSteps={totalSteps}
      />

      <NodeModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        selectedNode={selectedNode}
        modalData={modalData}
        onNodeCompletion={handleNodeCompletion}
        onNodePending={handleNodePending}
        userProgress={userProgress}
        setUserProgress={setUserProgress}
      />
    </MainContainer>
  );
};

export default MainContent;