import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Interfaces para os dados do usuário e outras entidades
interface User {
  id: number;
  name: string;
  surname: string;
  fullName: string;
  username: string;
  phone: string;
  email: string;
  bornDate: string;
  registerOn: string;
  imagePath: string;
  isActive: boolean;
}

interface Statistics {
  id : number;
  user: string;
  streakDays : number;
  bestStreak : number;
  userLevel : number;
  userExperience : number;
  challengesCompletedCount : number;
  roadmapsCompletedCount : number;
}

interface TaskText {
  title: string;
  description: string;
  text: string;
}

interface Task {
  id: number;
  steps: string;
  tasktext: TaskText;
  imagePath: string;
}

interface Roadmaps {
  id: number;
  title: string;
  description: string;
  imagePath: string;
}

interface Achievement {
  id: number;
  name: string;
  description: string;
  imagePath: string;
}

// Interface para o contexto de autenticação
interface AuthContextData {
  user: User | null;
  token: string | null;
  tasks: Task[] | null;
  roadmaps: Roadmaps[] | null;
  achievements: Achievement[] | null;
  statistics: Statistics | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: () => boolean;
  fetchUserProfile: (userId: number) => Promise<void>;
  fetchUserAchievements: () => Promise<void>;
  fetchUserTasksById: (userId: number) => Promise<void>;
  fetchUserRoadmapsById: (userId: number) => Promise<void>;
  fetchUserAchievementsById: (userId: number) => Promise<void>;
  fetchUserStatisticsById: (userId: number) => Promise<void>;
  updateUserProfile: (updatedData: Partial<User>) => Promise<void>;
  updateUserPassword: (userId: number, newPassword: string) => Promise<void>;
  updateImage: (userId: number, imageFile: File) => Promise<void>;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [tasks, setTasks] = useState<Task[] | null>(null);
  const [roadmaps, setRoadmaps] = useState<Roadmaps[] | null>(null);
  const [achievements, setAchievements] = useState<Achievement[] | null>(null);
  const [statistics, setStatistics] = useState<Statistics | null>(null);

  //**********************
  // Carrega o token e o usuário do localStorage ao montar o componente
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  //**********************
  // Busca os dados do usuário se o token estiver presente
  useEffect(() => {
    if (token && !user) {
      fetchUserProfile();
      fecthUserTasks();
      fecthUserRoadmaps();
      fetchUserAchievements();
      fetchUserStatistics();
    }
  }, [token, user]);

  //**********************
  // Função para fazer login
  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('/api/users/login', { email, password });
      const token = response.data?.data?.payload?.token;
      const userId = response.data?.data?.payload?.id;
  
      if (token) {
        setToken(token);
        localStorage.setItem('token', token);
        // Armazene o userId no localStorage
        localStorage.setItem('userId', userId);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw new Error('Falha no login');
    }
  };
  //***********************
    // Função para atualizar a imagem do usuário
    const updateImage = async (userId: number, imageFile: File) => {
    const MAX_FILE_SIZE_MB = 5; // Tamanho máximo permitido em MB
    const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

    if (!token) {
      console.error('Token não disponível. Faça login novamente.');
      return;
    }

    if (imageFile.size > MAX_FILE_SIZE_BYTES) {
      console.error(`O arquivo é muito grande. Tamanho máximo permitido: ${MAX_FILE_SIZE_MB}MB.`);
      throw new Error(`O arquivo é muito grande. Tamanho máximo permitido: ${MAX_FILE_SIZE_MB}MB.`);
    }

    try {
      const formData = new FormData();
      formData.append('image', imageFile);

      const response = await axios.post(`/api/users/${userId}/update-image`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (user) {
        const updatedUser = { ...user, id: user?.id, imagePath: response.data.imagePath };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
      } else {
        console.error('User is null or undefined');
      }

      console.log('Imagem atualizada com sucesso.');
    } catch (error) {
      console.error('Erro ao atualizar imagem:', error);
      throw new Error('Falha ao atualizar imagem');
    }
  };
  //**********************
  // Função para buscar o perfil do usuário
  const fetchUserProfile = async () => {
    const userId = localStorage.getItem('userId');
    if (!token || !userId) return;
  
    try {
      const response = await axios.get(`/api/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      console.error('Erro ao buscar perfil:', error);
      logout();
    }
  };

  //**********************
  // Função para buscar as tarefas do usuário
  const fecthUserTasks = async () => {
    if (!token || !user) return;
  
    try {
      const response = await axios.get('/tasks', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
      logout();
    }
  }
  
  //**********************
  // Função para buscar os roadmaps do usuários
  const fecthUserRoadmaps = async () => {
    if (!token || !user) return;
    
    try {
      const response = await axios.get('/roadmaps', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
      logout();
    }
  }

  //**********************
  // Função para buscar as conquistas do usuário
  const fetchUserAchievements = async () => {
    if (!token || !user) return;

    try {
      const response = await axios.get('/achievements', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAchievements(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      console.error('Erro ao buscar achievements:', error);
      logout();
    }
  };

  //**********************
  // Função para buscar as estatísticas do usuário
  const fetchUserStatistics = async () => {
    if (!token || !user) return;

    try {
      const response = await axios.get('/statistics', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStatistics(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      console.error('Erro ao buscar estatísticas:', error);
      logout();
    }
  };

  //**********************
  // Função para atualizar o perfil do usuário
  const updateUserProfile = async (updatedData: Partial<User>) => {
    if (!user?.id || !token) return;

    try {
      const response = await axios.put(`api/users/${user.id}`, updatedData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const updatedUser = { ...user, ...response.data };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
      throw error;
    }
  };

  //**********************
  // Função para buscar conquistas do usuário por ID
  const fetchUserAchievementsById = async (userId: number) => {
    if (!token) return;

    try {
      const response = await axios.get(`/achievements/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAchievements(response.data);
    } catch (error) {
      console.error('Erro ao buscar conquistas:', error);
    }
  };

  //**********************
  // Função para buscar estatísticas do usuário por ID
  const fetchUserStatisticsById = async (userId: number) => {
    if (!token) return;

    try {
      const response = await axios.get(`/statistics/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStatistics(response.data);
    } catch (error) {
      console.error('Erro ao buscar estatísticas:', error);
    }
  };

  //**********************
  // Função para buscar tarefas do usuário por ID
  const fetchUserTasksById = async (userId: number) => {
    if (!token) return;

    try {    
      const response = await axios.get(`/tasks/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(response.data);
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  };

  //**********************
  // Função para buscar roadmaps do usuário por ID
  const fetchUserRoadmapsById = async (userId: number) => {
    if (!token) return;

    try {    
      const response = await axios.get(`/roadmaps/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRoadmaps(response.data);    
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  };

  //**********************
  // Função para atualizar a senha do usuário
  const updateUserPassword = async (userId: number, newPassword: string) => {
    if (!token) return;

    try {
      await axios.put(`/api/users/${userId}/password`, { password: newPassword }, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.error('Erro ao atualizar a senha:', error);
      throw error;
    }
  };

  //**********************
  // Função para fazer logout
  const logout = () => {
    setToken(null);
    setUser(null);
    setTasks(null);
    setRoadmaps(null);
    setAchievements(null);
    setStatistics(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  //**********************
  const isAuthenticated = () => {
    const storedToken = localStorage.getItem('token');
    console.log('Token armazenado:', storedToken);
    return !!storedToken;
  };

  return (
    <AuthContext.Provider value={{
      user,
      token,
      tasks,
      roadmaps,
      achievements,
      statistics,
      login,
      logout,
      isAuthenticated,
      fetchUserProfile,
      fetchUserAchievements,
      fetchUserTasksById,
      fetchUserRoadmapsById,
      fetchUserStatisticsById,
      fetchUserAchievementsById, 
      updateUserProfile,
      updateImage,
      updateUserPassword,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
//**********************
// Hook para usar o contexto de autenticação
export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};

export default useAuth;