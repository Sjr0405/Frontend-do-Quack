import React, { useEffect, useState, useCallback } from "react";
import { Container, GlobalStyle } from './RoadMapStyles';
import ReactFlow, { Background, Edge, Node, ReactFlowProvider, NodeMouseHandler } from 'react-flow-renderer';
import NodeModal from './NodeModal/NodeModal';
import { fetchRoadmapData, fetchUserProgress } from './utils/fetchData';
import { handleNodeCompletion, handleNodePending } from './utils/handleNodeStatus';
import { saveUserProgress } from './utils/saveUserProgress';

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