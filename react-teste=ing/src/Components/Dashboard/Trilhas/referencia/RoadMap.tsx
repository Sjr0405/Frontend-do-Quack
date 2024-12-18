import React from "react";
import styled, { createGlobalStyle } from 'styled-components';
import ReactFlow, { Background, ReactFlowProvider } from 'react-flow-renderer';

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

const nodes = [
  {
    id: '1',
    data: { label: 'Início' },
    position: { x: 0, y: 0 },
    style: {
      backgroundColor: '#FC7A02',
      color: '#FFFFFF',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      border: 'none',
      borderRadius: '10px',
      fontFamily: 'Montserrat Alternates, sans-serif',
      fontWeight: 'bold',
    },
  },
  // ...outros nós...
];

const edges = [
  { id: 'e1-2', source: '1', target: '2' },
  // ...outras arestas...
];

const Roadmap: React.FC = () => {
  return (
    <Container>
      <GlobalStyle />
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
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
    </Container>
  );
};

export default Roadmap;