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

interface Achievement {
  id: number;
  name: string;
  description: string;
  imagePath: string;
}

interface AuthContextData {
  user: User | null;
  token: string | null;
  achievements: Achievement[] | null;
  statistics: Statistics | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: () => boolean;
  fetchUserProfile: (userId: number) => Promise<void>;
  fetchUserAchievements: () => Promise<void>;
  fetchUserAchievementsById: (userId: number) => Promise<void>;
  updateUserProfile: (updatedData: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
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
      fetchUserAchievements();
      fetchUserStatistics();
    }
  }, [token, user]);
//***************************************************************************
  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('/auth/login', { email, password });
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
      const response = await axios.get(`/users/${userId}`, {
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
  const fetchUserAchievements = async () => {
    if (!token || !user) return;

    try {
      const response = await axios.get('/achievements', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAchievements(response.data);
    } catch (error) {
      console.error('Erro ao buscar achievements:', error);
    }
  };
//***************************************************************************
  const fetchUserStatistics = async () => {
    if (!token || !user) return;

    try {
      const response = await axios.get('/statistics', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStatistics(response.data);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar estatísticas:', error);
    }
  };
//***************************************************************************
  const updateUserProfile = async (updatedData: Partial<User>) => {
    if (!user?.id || !token) return;

    try {
      const response = await axios.put(`/users/${user.id}`, updatedData, {
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
//***************************************************************************
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
//***************************************************************************
  const logout = () => {
    setToken(null);
    setUser(null);
    setAchievements(null);
    setStatistics(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('tokenExpiry');
  };
//***************************************************************************
  const isAuthenticated = () => {
    return !!token;
  };
//***************************************************************************
  return (
    <AuthContext.Provider value={{
      user,
      token,
      achievements,
      statistics,
      login,
      logout,
      isAuthenticated,
      fetchUserProfile,
      fetchUserAchievements,
      fetchUserAchievementsById, 
      updateUserProfile,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};

export default useAuth;