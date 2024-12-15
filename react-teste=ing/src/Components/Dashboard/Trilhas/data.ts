import axios from 'axios';

export const fetchRoadmaps = async (token: string) => {
  try {
    const response = await axios.get('/api/roadmaps', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'accept': '*/*'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar roadmaps:', error);
    return [];
  }
};
