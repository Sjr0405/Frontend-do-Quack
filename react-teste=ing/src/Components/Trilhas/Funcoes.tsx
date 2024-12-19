import { Node, Edge } from 'react-flow-renderer';

export const fetchRoadmapData = (setNodes: React.Dispatch<React.SetStateAction<Node[]>>, setEdges: React.Dispatch<React.SetStateAction<Edge[]>>, setModalData: React.Dispatch<React.SetStateAction<any>>) => {
  fetch('/data/roadmapData.json')
    .then(response => response.json())
    .then(data => {
      setNodes(data.nodes.map((node: Node) => ({
        ...node,
        data: {
          ...node.data,
          label: node.data.label,
        },
        position: { x: node.position.x, y: node.position.y },
      })));
      setEdges(data.edges.map((edge: Edge) => ({
        ...edge,
        type: edge.type === 'alternative' ? 'alternative' : 'default',
        style: { strokeWidth: 4 }
      })));
      setModalData(data.modals);
    })
    .catch(error => {
      console.error("Error loading JSON data:", error);
    });
};

export const fetchUserProgress = (setUserProgress: React.Dispatch<React.SetStateAction<any>>) => {
  fetch('/data/userProgress.json')
    .then(response => response.json())
    .then(userData => {
      setUserProgress(userData.progress);
    })
    .catch(error => {
      console.error("Error loading user progress:", error);
    });
};

export const calculateProgress = (isChecked: boolean[]): number => {
  return (isChecked.filter(Boolean).length / isChecked.length) * 100;
};

export const saveUserProgress = async (userId: string, progress: any) => {
  try {
    const response = await fetch('/data/saveUserProgress', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, progress })
    });
    const data = await response.json();
    console.log('Progresso do usuário salvo:', data);
  } catch (error) {
    console.error('Erro ao salvar progresso do usuário:', error);
  }
};

export const handleNodeCompletion = (nodeLabel: string, userProgress: any, setUserProgress: React.Dispatch<React.SetStateAction<any>>, saveUserProgress: (progress: any) => void) => {
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
  saveUserProgress(updatedProgress);
};

export const handleNodePending = (nodeLabel: string, userProgress: any, setUserProgress: React.Dispatch<React.SetStateAction<any>>, saveUserProgress: (progress: any) => void) => {
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
  saveUserProgress(updatedProgress);
};
