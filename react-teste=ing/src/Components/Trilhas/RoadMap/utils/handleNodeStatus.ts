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