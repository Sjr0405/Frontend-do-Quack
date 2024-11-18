import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Styled Components
const ChatContainer = styled.div`
  margin-top: 20px;
  background-color: #f1f1f1;
  border-radius: 8px;
  padding: 15px;
  max-height: 400px;
  overflow-y: auto;
`;

const MessageContainer = styled.div`
  margin-top: 10px;
`;

const MessageBubble = styled.div<{ isSender?: boolean }>`
  display: inline-block;
  max-width: 70%;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: ${({ isSender }) => (isSender ? '#7A5FF5' : '#fff')};
  color: ${({ isSender }) => (isSender ? '#fff' : '#000')};
  align-self: ${({ isSender }) => (isSender ? 'flex-start' : 'flex-end')};
`;

const MiniProfile = styled.div`
  background: #fff;
  padding: 30px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;

  h2, h3, h4, p {
    font-family: 'Montserrat Alternates', sans-serif;
    font-weight: 800;
  }
`;

const MiniProfileName = styled.h4`
  margin: 0;
`;

const MiniProfileEmail = styled.p`
  margin: 5px 0;
`;

const MessageInput = styled.textarea`
  width: 100%;
  height: 100px;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

const SendMessageButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #7a5ff5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #6b4bcf;
  }
`;

interface Message {
  id: string;
  text: string;
  isSender: boolean;
}

interface PerfilQuacksenseiProps {
  selectedProfessor: { photo: string; name: string; email: string; ensina: string; linguagem: string } | null;
  messages: { [key: string]: Message[] };
  setMessages: (email: string, newMessages: Message[]) => void;
  changeSection: (section: string) => void;
}

const PerfilQuacksensei: React.FC<PerfilQuacksenseiProps> = ({
  selectedProfessor,
  messages,
  setMessages,
  changeSection,
}) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (!message.trim()) {
      Swal.fire('Atenção!', 'Por favor, escreva uma mensagem antes de enviar.', 'warning');
      return;
    }

    const newMessage: Message = {
      id: Date.now().toString(),
      text: message,
      isSender: true,
    };

    if (selectedProfessor) {
      const professorEmail = selectedProfessor.email;
      const updatedMessages = [...(messages[professorEmail] || []), newMessage];
      setMessages(professorEmail, updatedMessages);
      setMessage('');
    }
  };

  if (!selectedProfessor) return null;

  const predefinedMessages = [
    "Olá! Estou aqui para ajudar você com suas dúvidas.",
    "Não hesite em perguntar sobre a matéria!"
  ];

  return (
    <div>
      <MiniProfile>
        <div style={{ float: 'left', overflow: 'hidden', marginRight: '10px' }}>
          <img src={selectedProfessor.photo} alt={selectedProfessor.name} style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }}/>
        </div>
        <MiniProfileName>Nome: {selectedProfessor.name}</MiniProfileName>
        <MiniProfileEmail>Email: {selectedProfessor.email}</MiniProfileEmail>
        <MiniProfileEmail>Ensina: {selectedProfessor.ensina}</MiniProfileEmail>
        <MiniProfileEmail>Linguagem: {selectedProfessor.linguagem}</MiniProfileEmail>
      </MiniProfile>
      <IconButton onClick={() => changeSection('Quacksensei')} aria-label="voltar" security='restricted'>
        <ArrowBackIcon />
      </IconButton>
      <h3 style={{ marginTop: '20px', fontFamily: 'Montserrat Alternates', fontWeight: 800 }}>Enviar Mensagem</h3>
      <ChatContainer>
        {predefinedMessages.map((text, index) => (
          <MessageContainer key={`predefined-${index}`}>
            <MessageBubble>{text}</MessageBubble>
          </MessageContainer>
        ))}
        {/* Renderizar mensagens enviadas */}
        {(messages[selectedProfessor.email] || []).map((msg) => (
          <MessageContainer key={msg.id}>
            <MessageBubble isSender={msg.isSender}>{msg.text}</MessageBubble>
          </MessageContainer>
        ))}
      </ChatContainer>
      <MessageInput
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Escreva sua mensagem aqui..."
      />
      <SendMessageButton onClick={handleSendMessage}>
        Enviar Mensagem
      </SendMessageButton>
    </div>
  );
};

export default PerfilQuacksensei;
