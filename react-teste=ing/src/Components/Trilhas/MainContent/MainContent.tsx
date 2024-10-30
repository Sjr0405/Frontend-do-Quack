import React, { useEffect, useState } from "react";
import { MainContainer, StyledTitle, StyledSubtitle, StyledDescription, StyledBoxContainer } from "./MainContentStyles";
import BoxContainer from "./BoxContainer/BoxContainer";
import NodeModal from "../RoadMap/NodeModal/NodeModal";

const MainContent: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [userProgress, setUserProgress] = useState<any>({ nodes: {} });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [modalData, setModalData] = useState<any>(null);

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
  const completedSteps = Object.values(userProgress.nodes).filter((node: any) => node.status === 'concluído').length;
  const completionPercentage = (completedSteps / totalSteps) * 100;

  const handleNodeCompletion = (nodeLabel: string) => {
    const updatedProgress = {
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
    const updatedProgress = {
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

  const openModal = (nodeLabel: string, data: any) => {
    setSelectedNode(nodeLabel);
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNode(null);
    setModalData(null);
  };

  return (
    <MainContainer>
      <StyledTitle>{data.title}</StyledTitle>
      <StyledSubtitle>{data.subtitle}</StyledSubtitle>
      <StyledDescription>{data.description}</StyledDescription>
      
      <StyledBoxContainer>
        <BoxContainer
          title="Trilha"
          description="Termine todas as etapas do roadmap para ganhar a chave da trilha."
          completionPercentage={completionPercentage}
          completedSteps={completedSteps}
          totalSteps={totalSteps}
        />
      </StyledBoxContainer>

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