import React, { useState, useEffect } from 'react';
import { ModalOverlay, ModalContent } from './NodeModalStyles';
import NodeModalHeader from './NodeModalHeader/NodeModalHeader';
import NodeModalContent from './NodeModalContent/NodeModalContent';
import NodeModalFooter from './NodeModalFooter/NodeModalFooter';
import { calculateProgress, saveUserProgress } from './utils/progressUtils';

interface NodeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  selectedNode: string | null;
  modalData: any;
  onNodeCompletion: (nodeLabel: string) => void;
  onNodePending: (nodeLabel: string) => void;
  userProgress: any;
  setUserProgress: (progress: any) => void;
}

const NodeModal: React.FC<NodeModalProps> = ({
  isOpen,
  onRequestClose,
  selectedNode,
  modalData,
  onNodeCompletion,
  onNodePending,
  userProgress,
  setUserProgress
}) => {
  const [isChecked, setIsChecked] = useState<boolean[]>([]);
  const [status, setStatus] = useState('pendente');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (isOpen && modalData && modalData.links && selectedNode && !isInitialized) {
      const numLinks = modalData.links.length;
      if (numLinks > 0) {
        const savedChecked = userProgress.nodes[selectedNode]?.checkboxes || new Array(numLinks).fill(false);
        const savedStatus = userProgress.nodes[selectedNode]?.status || 'pendente';

        const adjustedChecked = savedChecked.slice(0, numLinks).concat(new Array(numLinks - savedChecked.length).fill(false));

        setIsChecked(adjustedChecked);
        setStatus(savedStatus);
        setIsInitialized(true);
        console.log('Estado inicial do checkbox:', adjustedChecked);
      }
    }
  }, [isOpen, modalData, selectedNode, userProgress, isInitialized]);

  const handleCheckboxChange = (index: number) => {
    const newChecked = [...isChecked];
    newChecked[index] = !newChecked[index];
    setIsChecked(newChecked);
    console.log('Estado do checkbox atualizado:', newChecked);

    if (selectedNode) {
      const allChecked = newChecked.every((checked) => checked);
      const newStatus = allChecked ? 'concluído' : 'pendente';
      setStatus(newStatus);

      const updatedProgress = {
        ...userProgress,
        nodes: {
          ...userProgress.nodes,
          [selectedNode]: {
            ...userProgress.nodes[selectedNode],
            checkboxes: newChecked,
            status: newStatus
          }
        }
      };
      setUserProgress(updatedProgress);

      if (allChecked) {
        onNodeCompletion(selectedNode);
      } else {
        onNodePending(selectedNode);
      }

      saveUserProgress(userProgress.userId, updatedProgress);
    }
  };

  const handleStatusChange = (newStatus: string) => {
    if (selectedNode) {
      setStatus(newStatus);
      const updatedProgress = {
        ...userProgress,
        nodes: {
          ...userProgress.nodes,
          [selectedNode]: {
            ...userProgress.nodes[selectedNode],
            status: newStatus
          }
        }
      };
      setUserProgress(updatedProgress);
      onNodeCompletion(selectedNode);
      onRequestClose();

      saveUserProgress(userProgress.userId, updatedProgress);
    }
  };

  const progress = calculateProgress(isChecked);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent style={{ borderRadius: '16px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <NodeModalHeader selectedNode={selectedNode} status={status} progress={progress} onRequestClose={onRequestClose} />
        <NodeModalContent isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} modalData={modalData} />
        <NodeModalFooter isChecked={isChecked} handleStatusChange={handleStatusChange} />
      </ModalContent>
    </ModalOverlay>
  );
};

export default NodeModal;