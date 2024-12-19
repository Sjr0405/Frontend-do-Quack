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

export const fetchRoadmapsByCategory = async (token: string, category: string) => {
  try {
    const response = await axios.get(`/api/roadmaps/category/${category}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'accept': '*/*'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar roadmaps por categoria:', error);
    return [];
  }
};

export const fetchRoadmapsByFilter = async (token: string, filter: string) => {
  try {
    let url = '/api/roadmaps';
    if (filter === 'Módulos') {
      url = `/api/roadmaps/category/${filter}`;
    } else if (filter === 'Linguagens') {
      url = `/api/roadmaps/category/Linguagens`;
    }
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'accept': '*/*'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar roadmaps por filtro:', error);
    return [];
  }
};
