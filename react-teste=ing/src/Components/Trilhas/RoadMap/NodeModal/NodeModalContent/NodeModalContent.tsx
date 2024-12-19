import React from "react";
import { LinkItem, OrangeCheckbox, LinkType, LinkText } from '../NodeModalStyles';
import { Description, Separator, ContentContainer } from './NodeModalContentStyles';

interface NodeModalContentProps {
  isChecked: boolean[];
  handleCheckboxChange: (index: number) => void;
  modalData: any;
}


const NodeModalContent: React.FC<NodeModalContentProps> = ({ isChecked, handleCheckboxChange, modalData }) => {
  if (!modalData) {
    return <div>Carregando...</div>;
  }

  return (
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
  );
};

export default NodeModalContent;