import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  width: 90%;
  max-width: 500px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #f3f3f3;
  border-bottom: 1px solid #ddd;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #666;
`;

const Content = styled.div`
  max-height: 400px;
  overflow-y: auto;
  padding: 15px;
`;

const UserItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: bold;
  color: #333;
`;

const UserXP = styled.span`
  font-size: 14px;
  color: #666;
`;

const Modal = ({ isOpen, onClose, data }: { isOpen: boolean; onClose: () => void; data: { name: string; xp: number; avatar: string }[] }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <Header>
          <Title>Seguindo</Title>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </Header>
        <Content>
          {data.map((user, index) => (
            <UserItem key={index}>
              <Avatar src={user.avatar} alt={user.name} />
              <UserDetails>
                <UserName>{user.name}</UserName>
                <UserXP>{user.xp} XP</UserXP>
              </UserDetails>
            </UserItem>
          ))}
        </Content>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
