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
  RankingIcon,
  Points
} from './RankingsStyles';
import { Box, Typography, Avatar } from '@mui/material';
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
  points: number; // Adicionado campo de pontos
}

const Rankings = () => {
  const [users, setUsers] = useState<User[]>([]);
  const COLORS = ['green', 'blue', 'red', 'yellow'];

  useEffect(() => {
    const mockUsers: User[] = [
      { id: 1, name: 'Thiago de Andrade', favorite_language: 'JavaScript', favorite_language_url: Javascript, image_url: 'https://randomuser.me/api/portraits/men/1.jpg', ranking: 1, points: 1500 },
      { id: 2, name: 'Elisson Nadson', favorite_language: 'Python', favorite_language_url: Python, image_url: 'https://randomuser.me/api/portraits/men/2.jpg', ranking: 2, points: 1400 },
      { id: 3, name: 'Adriel Henrique', favorite_language: 'Swift', favorite_language_url: Swift, image_url: 'https://randomuser.me/api/portraits/men/3.jpg', ranking: 3, points: 1300 },
      { id: 4, name: 'Erik Marques', favorite_language: 'Java', favorite_language_url: Java, image_url: 'https://randomuser.me/api/portraits/men/4.jpg', ranking: 4, points: 1200 },
      { id: 5, name: 'Jetfé Goes', favorite_language: '.NET', favorite_language_url: DotNet, image_url: 'https://randomuser.me/api/portraits/men/5.jpg', ranking: 5, points: 1100 },
      { id: 6, name: 'Ícaro Vasconcelos', favorite_language: 'Java', favorite_language_url: Java, image_url: 'https://randomuser.me/api/portraits/men/6.jpg', ranking: 6, points: 1000 },
      { id: 7, name: 'Victor Moak', favorite_language: 'JavaScript', favorite_language_url: Javascript, image_url: 'https://randomuser.me/api/portraits/men/7.jpg', ranking: 7, points: 900 },
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
        <h1>Classificações Geral</h1>
        <img src={Trofeu} alt="Trofeu" />
      </Header>

      <MainSection>
        {users.slice(0, 3).map((user, index) => (
          <UserCard 
            key={user.id}
            isFirst={index === 0}
            isSecond={index === 1}
            isThird={index === 2} 
            style={{ backgroundColor: COLORS[index] }}
          >
            <UserImage src={user.image_url || ''} alt={`${user.name}'s avatar`} />
              <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
              <RankingIcon src={getRankingIcon(user.ranking) || ''} alt={`Ranking ${user.ranking}`} />
              <LanguageImageContainer>
                <img src={user.favorite_language_url || ''} alt={user.favorite_language || ''} />
              </LanguageImageContainer>
            </Box>
            <UserName>{user.name}</UserName>
            <Typography variant="body1">#{user.ranking}</Typography>
            <Points>{user.points} pontos</Points>
          </UserCard>
        ))}
      </MainSection>

      <UserList>
        {users.slice(3).map((user) => (
          <ListItem key={user.id}>
            <Box display="flex" alignItems="center" mb={1}>
              <Typography variant="body1">#{user.ranking}</Typography>
              <Avatar 
                src={user.image_url || ''} 
                alt={`${user.name}'s avatar`} 
                sx={{ width: 50, height: 50, marginLeft: 1, marginRight: 1 }} 
              />
              <Typography variant="body2">{user.name}</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Typography variant="body2">Linguagem Favorita: {user.favorite_language}</Typography>
              <img src={user.favorite_language_url || ''} alt={user.favorite_language || ''} />
            </Box>
            <Points>{user.points} pontos</Points> {/* Adicionado campo de pontos */}
          </ListItem>
        ))}
      </UserList>
    </Container>
  );
};

export default Rankings;
