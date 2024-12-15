import styled from 'styled-components';
import Modal from './Modal.tsx';

const ColunaAbaStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (max-width: 768px) {
    margin-top: 20px;
    padding: 10px;
  }
`;

const ContainerAbas = styled.div`
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  border: 2px solid #e9e8e8;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const NavegacaoAbas = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #f3f3f3;
  border-bottom: 2px solid #e9e8e8;
`;

const BotaoAba = styled.button<{ active: boolean }>`
  flex: 1;
  font-family: 'Montserrat Alternates', sans-serif;
  padding: 10px 20px;
  background-color: ${({ active }) => (active ? '#ffffff' : '#f3f3f3')};
  color: ${({ active }) => (active ? '#000000' : '#666666')};
  font-weight: 500;
  border: none;
  border-bottom: ${({ active }) => (active ? '3px solid #ff7f00' : 'none')};
  color: ${({ active }) => (active ? '#ff7f00' : '#666666')};
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #ffffff;
    color: #ff7f00;
  }
`;

const ConteudoAba = styled.div`
  padding: 20px;
  text-align: center;
  max-height: 200px; // Limite de altura para mostrar 3 pessoas
  // overflow-y: auto; // Removido para desativar a rolagem
`;



const Seguindo = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px; // Adicionado para igualar margens

  img {
    justify-content: flex-start;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
`;

const Seguidores = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px; // Ajustado para ser igual ao Seguindo
  border-bottom: 1px solid #eee;
  margin-bottom: 10px; // Adicionado para igualar margens

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
`;

const VerTodosLink = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  background-color: transparent;
  border-bottom: 1px solid #f3f3f3;
  a {
    font-size: 16px;
    font-weight: 500;
    font-family: 'Lilita One', sans-serif;
    text-decoration: none;
    color: #ff7f00;
    padding: 20px 40px;
    cursor: pointer;
    transition: text-decoration 0.3s ease, color 0.3s ease;

    &:hover {
      text-decoration: underline;
      color:#d36900;
    }
  }
`;

const Detalhes = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 15px; // Adicionado espaçamento entre a imagem e o nome
`;

const Nome = styled.span`
  font-weight: bold;
  color: #333;
`;

const Pontos = styled.span`
  font-size: 14px;
  color: #666;
`;

const ColunaAba = ({ activeTab, setActiveTab, isModalOpen, setModalOpen, followingData, followersData }: any) => (
  <ColunaAbaStyled>
    <ContainerAbas>
      <NavegacaoAbas>
        <BotaoAba style={{ fontFamily: 'Montserrat Alternates' }} active={activeTab === 'Seguindo'} onClick={() => setActiveTab('Seguindo')}>
          Seguindo
        </BotaoAba>
        <BotaoAba style={{ fontFamily: 'Montserrat Alternates' }} active={activeTab === 'Seguidores'} onClick={() => setActiveTab('Seguidores')}>
          Seguidores
        </BotaoAba>
      </NavegacaoAbas>

      <ConteudoAba>
        {activeTab === 'Seguindo' && (
          <>
            {followingData.slice(0, 3).map((user: any, index: number) => (
              <Seguindo key={index}>
                <img src={user.avatar} alt={user.name} />
                <Detalhes>
                  <Nome>{user.name}</Nome>
                  <Pontos>{user.xp} XP</Pontos>
                </Detalhes>
              </Seguindo>
            ))}
          </>
        )}
        {activeTab === 'Seguidores' && (
          <>
            {followersData.slice(0, 3).map((user: any, index: number) => (
              <Seguidores key={index}>
                <img src={user.avatar} alt={user.name} />
                <Detalhes>
                  <Nome>{user.name}</Nome>
                  <Pontos>{user.xp} XP</Pontos>
                </Detalhes>
              </Seguidores>
            ))}
          </>
        )}
      </ConteudoAba>
      <VerTodosLink>
        <a onClick={() => setModalOpen(true)}>Ver todos</a>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} data={activeTab === 'Seguindo' ? followingData : followersData} />
      </VerTodosLink>
    </ContainerAbas>
    <div style={{ 
      fontFamily: 'Montserrat Alternates', 
      fontSize: '16px', 
      marginTop: '20px', 
      textDecoration: 'none', 
      color: '#007bff', 
      fontWeight: '700' 
    }}>
      <a style={{ marginRight: '10px' }} href="#" onClick={() => { setActiveTab('Seguindo'); setModalOpen(true); }}>Seguindo 10</a>
      <a style={{ marginLeft: '10px' }} href="#" onClick={() => { setActiveTab('Seguidores'); setModalOpen(true); }}>Seguidores 10</a>
    </div>
  </ColunaAbaStyled>
);

export default ColunaAba;
