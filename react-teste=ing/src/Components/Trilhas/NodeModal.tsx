import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import { LinearProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { calculateProgress, saveUserProgress } from './Funcoes';

// Estilos movidos de NodeModalStyles.ts
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
  max-height: 90vh; /* Ajuste a altura máxima para 90% da altura da viewport */
  overflow-y: auto; /* Adicione rolagem vertical se o conteúdo exceder a altura máxima */
  padding: 20px;
  position: relative;
`;

const LinkItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 8px;
`;

const OrangeCheckbox = styled(Checkbox)`
  color: orange !important;
  margin-right: 10px;
`;

const LinkType = styled.span<{ type: string }>`
  background-color: ${({ type }) => {
    switch (type) {
      case 'vídeo':
        return '#ffeb3b'; // Amarelo
      case 'artigo':
        return '#2196f3'; // Azul
      case 'livro':
        return '#4caf50'; // Verde
      default:
        return '#9e9e9e'; // Cinza para outros tipos
    }
  }};
  color: black;
  padding: 2px 6px;
  border-radius: 4px;
  margin-right: 10px;
`;

const LinkText = styled.a`
  color: black;
  text-decoration: none;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  border-bottom: 1px solid #ddd;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

const StatusLabel = styled.span<{ status: string }>`
  margin-left: 10px;
  font-size: 1rem;
  color: ${({ status }) => (status === 'concluído' ? '#4caf50' : '#ff9800')};
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  border-top: 1px solid #ddd;
`;

const FooterButton = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  font-size: 1rem;

  &:disabled {
    background-color: #9e9e9e;
    cursor: not-allowed;
  }
`;

const Description = styled.p`
  font-weight: normal;
  font-size: 1.2rem;
  text-align: left;
`;

const Separator = styled.div`
  width: 100%;
  border-bottom: 1px solid #ddd;
  margin: 20px 0;
  text-align: center;
  position: relative;

  &::before {
    content: 'Recursos';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 0 10px;
    color: #333;
    font-weight: bold;
  }
`;

const ContentContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  padding-right: 16px;
`;

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
        <HeaderContainer>
          <TitleContainer>
            <Title>
              {selectedNode}
              <StatusLabel status={status}>{status}</StatusLabel>
            </Title>
            <HeaderRight>
              <Button onClick={onRequestClose}>
                <CloseIcon />
              </Button>
            </HeaderRight>
          </TitleContainer>
          <LinearProgress variant="determinate" value={progress} style={{ width: '100%', marginTop: '10px' }} />
        </HeaderContainer>
        <ContentContainer>
          <Description>{modalData.description}</Description>
          <Separator />
          {modalData.links.map((link: any, index: number) => (
            <LinkItem key={index}>
              <OrangeCheckbox
                checked={isChecked[index] || false}
                onChange={() => handleCheckboxChange(index)}
              />
              <LinkType type={link.type}>{link.type}</LinkType>
              <LinkText href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </LinkText>
            </LinkItem>
          ))}
        </ContentContainer>
        <FooterContainer>
          <FooterButton
            onClick={() => handleStatusChange('concluído')}
            disabled={!isChecked.every((checked) => checked)}
          >
            Concluir
          </FooterButton>
        </FooterContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default NodeModal;