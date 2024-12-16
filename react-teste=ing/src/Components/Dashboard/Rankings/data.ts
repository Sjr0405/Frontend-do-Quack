import axios from 'axios';

interface User {
  id: number;
  name: string;
  fullName: string;
  imagePath: string | null;
  points: number;
  ranking: number;
}

export const fetchUsersData = async (token: string): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>('/api/users', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data.map((user, index) => ({
      id: user.id,
      name: user.name,
      fullName: user.fullName,
      imagePath: user.imagePath,
      points: Math.floor(Math.random() * 2000), // Simulando pontos
      ranking: index + 1
    }));
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw error;
  }
};
