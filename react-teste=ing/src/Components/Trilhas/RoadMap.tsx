import React, { useEffect, useState, useCallback } from "react";
import styled, { createGlobalStyle } from 'styled-components';
import ReactFlow, { Background, Edge, Node, ReactFlowProvider, NodeMouseHandler } from 'react-flow-renderer';
import NodeModal from './NodeModal';
import { fetchRoadmapData, fetchUserProgress, handleNodeCompletion, handleNodePending, saveUserProgress } from './Funcoes';

const Container = styled.div`
  grid-area: RT;
  min-height: 100vh; /* Garantir altura mínima */
  min-width: 100vw; /* Garantir largura mínima */
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  position: relative; /* Ajustado para se comportar corretamente dentro do grid */
  overflow: auto; /* Permitir rolagem se necessário */
`;

const GlobalStyle = createGlobalStyle`
  .react-flow__attribution {
    display: none;
  }
`;

const StyledNode = styled.div<{ completed: boolean }>`
  background-color: ${({ completed }) => (completed ? '#A3E4A7' : '#F6C761')};
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: none;
  font-family: 'Montserrat Alternates', sans-serif;
  color: black;
`;

const Roadmap: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [modalData, setModalData] = useState<any>(null);
  const [userProgress, setUserProgress] = useState<any>(null);

  useEffect(() => {
    fetchRoadmapData(setNodes, setEdges, setModalData);
    fetchUserProgress(setUserProgress);
  }, []);

  const openModal: NodeMouseHandler = useCallback((_: React.MouseEvent, node: Node) => {
    setSelectedNode(node.data.label);
    setModalIsOpen(true);
  }, []);

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedNode(null);
  };

  return (
    <Container>
      <GlobalStyle />
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes.map((node, index) => ({
            ...node,
            style: {
              backgroundColor: userProgress?.nodes[node.data.label]?.status === 'concluído' ? '#A3E4A7' : (index === 0 ? '#FC7A02' : '#F6C761'),
              color: userProgress?.nodes[node.data.label]?.status === 'concluído' ? 'black' : (index === 0 ? '#FFFFFF' : 'black'),
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              border: 'none',
              borderRadius: '10px',
              fontFamily: 'Montserrat Alternates, sans-serif',
              fontWeight: 'bold',
            },
          }))}
          edges={edges}
          onNodeClick={openModal}
          style={{ height: '100%', width: '100%', backgroundColor: '#fff' }}
          fitView
          panOnScroll={false}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
        >
          <Background color="#fff" />
        </ReactFlow>
      </ReactFlowProvider>
      {modalIsOpen && selectedNode && modalData && (
        <NodeModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          selectedNode={selectedNode}
          modalData={modalData[selectedNode]}
          onNodeCompletion={(nodeLabel: string) => handleNodeCompletion(nodeLabel, userProgress, setUserProgress, saveUserProgress)}
          onNodePending={(nodeLabel: string) => handleNodePending(nodeLabel, userProgress, setUserProgress, saveUserProgress)}
          userProgress={userProgress}
          setUserProgress={setUserProgress}
        />
      )}
    </Container>
  );
};

export default Roadmap;