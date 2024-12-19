import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { fetchRoadmaps } from './Components/Dashboard/Trilhas/data';

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
  stepsId: Array<number>;
  category: string;
}

interface Step {
  id: number;
  roadmapsId: Array<number>;
  lessonsId: Array<number>;
  tasksId: Array<number>;
  description: string;
  imagePath: string;
  status: Status;
}

enum Status {
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  NOT_STARTED = 'NOT_STARTED',
}

interface lesson {
  id: number;
  title: string;
  description: string;
  language: string;
  imagePath: string;
  completed: boolean;
  link: string;
  stepsId: Array<number>;
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
  step: Step[] | null;
  lessons: lesson[] | null;
  achievements: Achievement[] | null;
  statistics: Statistics | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  fetchUserProfile: (userId: number) => Promise<void>;
  fetchUserAchievements: () => Promise<void>;
  fetchUserTasksById: (userId: number) => Promise<void>;
  fetchUserRoadmapsById: (userId: number) => Promise<void>;
  fetchUserAchievementsById: (userId: number) => Promise<void>;
  fetchUserStatisticsById: (userId: number) => Promise<void>;
  updateUserProfile: (updatedData: Partial<User>) => Promise<void>;
  updateUserPassword: (userId: number, newPassword: string) => Promise<void>;
  updateImage: (userId: number, imageFile: File) => Promise<void>;
  fetchUserRoadmaps: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [tasks, setTasks] = useState<Task[] | null>(null);
  const [roadmaps, setRoadmaps] = useState<Roadmaps[] | null>(null);
  const [step, setStep] = useState<Step[] | null>(null);
  const [lessons, setLessons] = useState<lesson[] | null>(null);
  const [achievements, setAchievements] = useState<Achievement[] | null>(null);
  const [statistics, setStatistics] = useState<Statistics | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(() => !!localStorage.getItem('token'));

  // Carrega o token e o usuário do localStorage ao montar o componente
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem('token'));
  }, [token]);

  // Função para buscar o perfil do usuário
  const fetchUserProfile = useCallback(async () => {
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
  }, [token]);

  // Função para buscar as tarefas do usuário
  const fetchUserTasks = useCallback(async () => {
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
  }, [token, user]);

  // Função para buscar os roadmaps do usuário
  const fetchUserRoadmaps = useCallback(async () => {
    if (!token) return;
    try {
      const roadmaps = await fetchRoadmaps(token);
      setRoadmaps(roadmaps);
    } catch (error) {
      console.error('Erro ao buscar roadmaps:', error);
    }
  }, [token]);

  // Função para buscar as conquistas do usuário
  const fetchUserAchievements = useCallback(async () => {
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
  }, [token, user]);

  // Função para buscar as estatísticas do usuário
  const fetchUserStatistics = useCallback(async () => {
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
  }, [token, user]);

  // Função para buscar as aulas do usuário
  const fethUserSteps = useCallback(async () => {
    if (!token || !user) return;

    try {
      const response = await axios.get('/steps', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStep(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      console.error('Erro ao buscar steps:', error);
      logout();
    }
  }, [token, user]);

  // Função para buscar as lissões do usuário
  const fecthUserLessons = useCallback(async () => {
    if (!token || !user) return;

    try {
      const response = await axios.get('/lessons', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLessons(response.data);      
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      console.error('Erro ao buscar lessons:', error);
      logout();    
    }
  }, [token, user]);

  // Busca os dados do usuário se o token estiver presente
  useEffect(() => {
    if (token && !user) {
      fetchUserProfile();
      fetchUserTasks();
      fetchUserRoadmaps();
      fethUserSteps();
      fecthUserLessons();
      fetchUserAchievements();
      fetchUserStatistics();
    }
  }, [token, user, fetchUserProfile, fetchUserTasks, fetchUserRoadmaps, fethUserSteps, fecthUserLessons, fetchUserAchievements, fetchUserStatistics]);

  // Função para fazer login
  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('/api/users/login', { email, password });
      const token = response.data?.data?.payload?.token;
      const userId = response.data?.data?.payload?.id;

      if (token) {
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw new Error('Falha no login');
    }
  };

  // Função para atualizar a imagem do usuário
  const updateImage = async (userId: number, imageFile: File) => {
    const MAX_FILE_SIZE_MB = 5;
    const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

    if (!token) {
      throw new Error('Token não disponível. Faça login novamente.');
    }

    if (imageFile.size > MAX_FILE_SIZE_BYTES) {
      throw new Error(`O arquivo é muito grande. Tamanho máximo permitido: ${MAX_FILE_SIZE_MB}MB.`);
    }

    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      const response = await axios.post(`/api/users/${userId}/update-image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (user) {
        const updatedUser = { ...user, id: user.id, imagePath: response.data.imagePath };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
      } else {
        console.error('User is null or undefined');
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error('Erro do servidor:', error.response.data);
        console.error('Status:', error.response.status);
      } else {
        console.error('Erro inesperado:', error);
      }
      throw new Error('Falha ao atualizar imagem');
    }
  };

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

  // Função para buscar roadmaps do usuário por ID
  const fetchUserRoadmapsById = async (userId: number) => {
    if (!token) return;

    try {
      const response = await axios.get(`/api/users/roadmaps/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRoadmaps(response.data.payload.roadmaps);
    } catch (error) {
      console.error('Erro ao buscar roadmaps:', error);
    }
  };

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

  return (
    <AuthContext.Provider value={{
      user,
      token,
      tasks,
      roadmaps,
      step,
      lessons,
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
      fetchUserRoadmaps,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar o contexto de autenticação
export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};

export default useAuth;