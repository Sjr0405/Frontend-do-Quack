import { useState, useEffect } from 'react';
import { 
  Container,
  Header,
  MainSection,
  UserCard,
  LanguageImageContainer,
  UserImage,
  UserName,
  UserList,
  ListItem,
  RankingIcon
} from './RankingsStyles';
import Javascript from '../../../Assets/svgs/Home-svgs/Rankings/js.svg';
import Python from '../../../Assets/svgs/Home-svgs/Rankings/python.svg';
import Java from '../../../Assets/svgs/Home-svgs/Rankings/java.svg';
import Swift from '../../../Assets/svgs/Home-svgs/Rankings/swift.svg';
import DotNet from '../../../Assets/svgs/Home-svgs/Rankings/.net.svg';
import PrimeiroLugar from '../../../Assets/svgs/Home-svgs/Rankings/PrimeiroLugar.svg';
import SegundoLugar from '../../../Assets/svgs/Home-svgs/Rankings/SegundoLugar.svg';
import TerceiroLugar from '../../../Assets/svgs/Home-svgs/Rankings/TerceiroLugar.svg';
import Trofeu from '../../../Assets/svgs/Home-svgs/Rankings/Trofeu.svg';

interface User {
  id: number;
  name: string;
  favorite_language: string;
  favorite_language_url: string;
  image_url: string;
  ranking: number;
}

const Rankings = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const mockUsers: User[] = [
      {
        id: 1,
        name: 'Thiago de Andrade',
        favorite_language: 'JavaScript',
        favorite_language_url: Javascript,
        image_url: 'https://randomuser.me/api/portraits/men/1.jpg',
        ranking: 1,
      },
      {
        id: 2,
        name: 'Elisson Nadson',
        favorite_language: 'Python',
        favorite_language_url: Python,
        image_url: 'https://randomuser.me/api/portraits/men/2.jpg',
        ranking: 2,
      },
      {
        id: 3,
        name: 'Adriel Henrique',
        favorite_language: 'Swift',
        favorite_language_url: Swift,
        image_url: 'https://randomuser.me/api/portraits/men/3.jpg',
        ranking: 3,
      },
      {
        id: 4,
        name: 'Erik Marques',
        favorite_language: 'Java',
        favorite_language_url: Java,
        image_url: 'https://randomuser.me/api/portraits/men/4.jpg',
        ranking: 4,
      },
      {
        id: 5,
        name: 'Jetfé Goes',
        favorite_language: '.NET',
        favorite_language_url: DotNet,
        image_url: 'https://randomuser.me/api/portraits/men/5.jpg',
        ranking: 5,
      },
      {
        id: 6,
        name: 'Ícaro Vasconcelos',
        favorite_language: 'Java',
        favorite_language_url: Java,
        image_url: 'https://randomuser.me/api/portraits/men/6.jpg',
        ranking: 6,
      },
      {
        id: 7,
        name: 'Victor Moak',
        favorite_language: 'JavaScript',
        favorite_language_url: Javascript,
        image_url: 'https://randomuser.me/api/portraits/men/7.jpg',
        ranking: 7,
      },
    ];

    setUsers(mockUsers.slice(0, 7));
  }, []);

  const getRankingIcon = (ranking: number) => {
    if (ranking === 1) return PrimeiroLugar;
    if (ranking === 2) return SegundoLugar;
    if (ranking === 3) return TerceiroLugar;
    return null;
  };

  return (
    <Container>
      <Header>
        <img src={Trofeu} alt="Trofeu" />
        <h1>Os Mais Quacktivos</h1>
        <img src={Trofeu} alt="Trofeu" />
      </Header>

      <MainSection>
        {users.slice(0, 3).map((user, index) => (
          <UserCard 
            key={user.id}
            isFirst={index === 0}
            isSecond={index === 1}
            isThird={index === 2}
          >
            <UserImage src={user.image_url || ''} alt={`${user.name}'s avatar`} />
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '40%'}}>
              <RankingIcon src={getRankingIcon(user.ranking) || ''} alt={`Ranking ${user.ranking}`} />
              <LanguageImageContainer>
                <img src={user.favorite_language_url || ''} alt={user.favorite_language || ''} />
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
              #{user.ranking} 
              <UserImage 
                src={user.image_url || ''} 
                alt={`${user.name}'s avatar`} 
                style={{ border: 'none', width: '50px', height: '50px', marginLeft: '10px', marginRight: '10px' }} 
              />
              {user.name}
            </span>
            <span>
              Linguagem Favorita: {user.favorite_language} 
              <img src={user.favorite_language_url || ''} alt={user.favorite_language || ''} />
            </span>
          </ListItem>
        ))}
      </UserList>
    </Container>
  );
};

export default Rankings;
