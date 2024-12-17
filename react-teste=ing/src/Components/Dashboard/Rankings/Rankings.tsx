import { useState, useEffect } from 'react';
import { Container, MainSection, VerTodosLink } from './RankingsStyles';
import Header from './Header';
import UserCard from './UserCard';
import UserList from './UserList';
import { useAuth } from '../../../AuthContext';
import ViewAllModal from './ViewAllModal';
import { fetchUsersData } from './data';

interface User {
  id: number;
  name: string;
  fullName: string;
  imagePath: string | null;
  points: number;
  ranking: number;
}

const Rankings = () => {
  const { token } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const COLORS = ['green', 'blue', 'red', 'yellow'];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (token) {
          const usersData = await fetchUsersData(token);
          const sortedUsers = usersData.sort((a, b) => b.points - a.points).map((user, index) => ({
            ...user,
            ranking: index + 1
          }));
          setUsers(sortedUsers);
        }
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchUsers();
  }, [token]);

  const emptyUsers = Array.from({ length: 11 - users.length }, (_, index) => ({
    id: users.length + index + 1,
    name: '',
    fullName: '',
    imagePath: '',
    points: 0,
    ranking: users.length + index + 1
  }));

  const allUsers = [...users, ...emptyUsers];

  return (
    <Container>
      <Header />
      {users.length > 0 && (
        <MainSection>
          {allUsers.slice(0, 3).map((user, index) => (
            <UserCard 
              key={user.id}
              user={user}
              isFirst={index === 0}
              isSecond={index === 1}
              isThird={index === 2} 
              style={{ backgroundColor: COLORS[index] }}
            />
          ))}
        </MainSection>
      )}
      <UserList users={allUsers.slice(3, 11)} />
      <VerTodosLink onClick={() => setIsModalOpen(true)}>Ver Todos</VerTodosLink>
      {isModalOpen && <ViewAllModal users={allUsers} onClose={() => setIsModalOpen(false)} />}
    </Container>
  );
};

export default Rankings;
