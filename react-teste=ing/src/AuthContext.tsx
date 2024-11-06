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

interface AuthContextData {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: () => boolean;
  fetchUserProfile: (userId: number) => Promise<void>;
  updateUserProfile: (updatedData: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const TOKEN_EXPIRATION_TIME = 5 * 60 * 60 * 1000; // 5 horas em milissegundos

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

  // Novo useEffect para buscar o perfil assim que o token for definido
  useEffect(() => {
    if (token && !user) {
      const manualId = 40; // Id do usuário a ser buscado
      fetchUserProfile(manualId);
    }
  }, [token]);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('/auth/login', { email, password });
      const token = response.data?.token;
      const emailFromResponse = response.data?.email;

      if (token && emailFromResponse) {
        const expirationTime = Date.now() + TOKEN_EXPIRATION_TIME;

        // Define o token no estado e no localStorage
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('tokenExpiry', expirationTime.toString());
      } else {
        throw new Error('Dados de autenticação ausentes');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw new Error('Falha no login');
    }
  };

  const fetchUserProfile = async (userId: number) => {
    if (!token) {
      console.error("Token não disponível.");
      return;
    }

    try {
      const response = await axios.get(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      console.error('Erro ao buscar perfil completo do usuário:', error);
      logout();
    }
  };

  const updateUserProfile = async (updatedData: Partial<User>) => {
    if (!user?.id || !token) {
      throw new Error('Usuário não está logado ou token ausente');
    }

    try {
      const response = await axios.put(`/users/${user.id}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const updatedUser = { ...user, ...response.data };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } catch (error: any) {
      console.error('Erro ao atualizar o perfil do usuário:', error.response?.data || error.message);
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('tokenExpiry');
  };

  const isAuthenticated = () => {
    return !!token;
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated, fetchUserProfile, updateUserProfile }}>
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
//teste