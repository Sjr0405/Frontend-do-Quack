import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  font-family: 'Arial', sans-serif;
  padding: 20px;
  text-align: center;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 50px;
    height: 50px;
    margin: 10px;
  }

  h1:hover {
    cursor: pointer;
    position: relative;
  }
  
  h1:hover::after {
    content: "";
    display: block;
    width: 145%; 
    height: 5px;
    background-color: #F6C761;
    position: absolute;
    bottom: -5px;
    left: -20%; 
  }

  h1 {
    font-size: 36px;
    margin-right: 10px;
    font-weight: 300;
    font-family: 'Lilita One', sans-serif;
  }
`;

const MainSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end; /* Alinha todos os cards pela base */
  gap: 20px;
  margin-bottom: 30px;
  position: relative;
`;

const UserCard = styled.div<{ isFirst: boolean; isSecond: boolean; isThird: boolean }>`
  background-color: #fff;
  padding: 20px;
  border-radius: 30%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 200px;
  height: 280px;
  position: relative;
  font-weight: 500;
  font-family: 'Montserrat Alternates', sans-serif;

  ${({ isFirst }) => isFirst && `
    z-index: 2;
    transform: translateY(-20px) translateX(100%);
  `}
  
  ${({ isSecond }) => isSecond && `
    transform: translateY(10px) translateX(-125%);
  `}

  ${({ isThird }) => isThird && `
    transform: translateY(10px);
  `}
`;

const LanguageImageContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center
  align-items: center;
  padding: 10px;
  width: fit-content;
  align-items: center;
  margin-left: 25px;
  border-radius: 20%;
  border: 1px solid #f7f7f7;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const UserImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 10px solid #F6C761;
  margin: 0 auto 10px;
`;

const UserName = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 500;
  font-family: 'Montserrat Alternates', sans-serif;
`;

const UserList = styled.ul`
  list-style: none;
  padding: 0;
  font-weight: 500;
  font-family: 'Montserrat Alternates', sans-serif;
`;

const ListItem = styled.li`
  background-color: #fff;
  padding: 10px;
  margin: 2%;
  border: 4px solid #F6C761;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Novo componente para exibir ícone de ranking
const RankingIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`;

interface User {
  id: number;
  name: string;
  favorite_language: string;
  favorite_language_url: string;
  image_url: string;
  ranking: number;
}

// Componente Rankings
const Rankings = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const mockUsers = [
      {
        id: 1,
        name: 'Thiago de Andrade',
        favorite_language: 'JavaScript',
        favorite_language_url: '/src/svgs/Home-svgs/Rankings/js.svg',
        image_url: 'https://randomuser.me/api/portraits/men/1.jpg',
        ranking: 1,
      },
      {
        id: 2,
        name: 'Elisson Nadson',
        favorite_language: 'Python',
        favorite_language_url: '/src/svgs/Home-svgs/Rankings/python.svg',
        image_url: 'https://randomuser.me/api/portraits/men/2.jpg',
        ranking: 2,
      },
      {
        id: 3,
        name: 'Adriel Henrique',
        favorite_language: 'Ruby',
        favorite_language_url: '/src/svgs/Home-svgs/Rankings/swift.svg',
        image_url: 'https://randomuser.me/api/portraits/men/3.jpg',
        ranking: 3,
      },
      {
        id: 4,
        name: 'Erik Marques',
        favorite_language: 'Java',
        favorite_language_url: '/src/svgs/Home-svgs/Rankings/java.svg',
        image_url: 'https://randomuser.me/api/portraits/men/4.jpg',
        ranking: 4,
      },
      {
        id: 5,
        name: 'Jetfé Goes',
        favorite_language: '.NET',
        favorite_language_url: '/src/svgs/Home-svgs/Rankings/.net.svg',
        image_url: 'https://randomuser.me/api/portraits/men/5.jpg',
        ranking: 5,
      },
      {
        id: 6,
        name: 'Ícaro Vasconcelos',
        favorite_language: 'Java',
        favorite_language_url: '/src/svgs/Home-svgs/Rankings/java.svg',
        image_url: 'https://randomuser.me/api/portraits/men/6.jpg',
        ranking: 6,
      },
      {
        id: 7,
        name: 'Victor Moak',
        favorite_language: 'JavaScript',
        favorite_language_url: '/src/svgs/Home-svgs/Rankings/js.svg',
        image_url: 'https://randomuser.me/api/portraits/men/7.jpg',
        ranking: 7,
      },
    ];

    // Set users in state, limitando a no máximo 7 usuários
    setUsers(mockUsers.slice(0, 7));
  }, []);

  // Função para retornar o ícone de ranking baseado na posição
  const getRankingIcon = (ranking: number) => {
    if (ranking === 1) return '/src/svgs/Home-svgs/Rankings/PrimeiroLugar.svg';
    if (ranking === 2) return '/src/svgs/Home-svgs/Rankings/SegundoLugar.svg';
    if (ranking === 3) return '/src/svgs/Home-svgs/Rankings/TerceiroLugar.svg';
    return null;
  };

  return (
    <Container>
      <Header>
        <img src="/src/svgs/Home-svgs/Rankings/Trofeu.svg" alt="Crown" />
        <h1>Os Mais Quacktivos</h1>
        <img src="/src/svgs/Home-svgs/Rankings/Trofeu.svg" alt="Crown" />
      </Header>

      <MainSection>
        {users.slice(0, 3).map((user, index) => (
          <UserCard 
            key={user.id}
            isFirst={index === 0}  // Primeiro colocado
            isSecond={index === 1} // Segundo colocado
            isThird={index === 2}  // Terceiro colocado
          >
            <UserImage src={user.image_url} alt={`${user.name}'s avatar`} />
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '40%'}}>
              <RankingIcon src={getRankingIcon(user.ranking)?.toString()} alt={`Ranking ${user.ranking}`} />
              <LanguageImageContainer>
                <img src={user.favorite_language_url} alt={user.favorite_language} />
              </LanguageImageContainer>
            </div>
            
            <UserName>{user.name}</UserName>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p>#{user.ranking}</p>
            
            </div>
          </UserCard>
        ))}
      </MainSection>

      <UserList>
        {users.slice(3).map((user) => (
          <ListItem key={user.id}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              #{user.ranking} <UserImage src={user.image_url} alt={`${user.name}'s avatar`} style={{border: 'none', width: '50px', height: '50px', marginLeft: '10px', marginRight: '10px' }} />
              {user.name}
            </span>
            <span>Linguagem Favorita: {user.favorite_language} <img src={user.favorite_language_url} alt={user.favorite_language} /></span>
          </ListItem>
        ))}
      </UserList>
    </Container>
  );
};

export default Rankings;
