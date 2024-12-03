import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  username: string;
  phone: string;
  email: string;
  cpf: string;
  bornAt: string;
  points: number;
  registerAt: string;
  imagePath: string;
  status: string;
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
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [tasks, setTasks] = useState<Task[] | null>(null);
  const [roadmaps, setRoadmaps] = useState<Roadmaps[] | null>(null);
  const [achievements, setAchievements] = useState<Achievement[] | null>(null);
  const [statistics, setStatistics] = useState<Statistics | null>(null);
  const TOKEN_EXPIRATION_TIME = 5 * 60 * 60 * 1000; // 5 horas

//***************************************************************************
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    const tokenExpiry = localStorage.getItem('tokenExpiry');

    if (storedToken && storedUser && tokenExpiry) {
      const isTokenExpired = Date.now() > parseInt(tokenExpiry);
      if (isTokenExpired) {
        logout();
      } else {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

//***************************************************************************
  useEffect(() => {
    if (token && !user) {
      const manualId = 40;
      fetchUserProfile(manualId);
      fecthUserTasks();
      fecthUserRoadmaps();
      fetchUserAchievements();
      fetchUserStatistics();
    }
  }, [token, user]);

//***************************************************************************
  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('/api/users/login', { email, password });
      const token = response.data?.token;

      if (token) {
        const expirationTime = Date.now() + TOKEN_EXPIRATION_TIME;
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('tokenExpiry', expirationTime.toString());
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw new Error('Falha no login');
    }
  };

//***************************************************************************
  const fetchUserProfile = async (userId: number) => {
    if (!token) return;

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

  //***************************************************************************
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
  
  //*****************************************************************************
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

//***************************************************************************
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

//*****************************************************************************
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

//*****************************************************************************
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

//*****************************************************************************
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

//*****************************************************************************
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

//*****************************************************************************
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

//*****************************************************************************
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

//*****************************************************************************

  const logout = () => {
    setToken(null);
    setUser(null);
    setTasks(null);
    setRoadmaps(null);
    setAchievements(null);
    setStatistics(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('tokenExpiry');
  };

//*****************************************************************************
  const isAuthenticated = () => {
    return !!token;
  };

//*****************************************************************************
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
    }}>
      {children}
    </AuthContext.Provider>
  );
};

//*****************************************************************************
export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};

export default useAuth;