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
  status: number;
}

interface AuthContextData {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: () => boolean;
  fetchUserProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      fetchUserProfile();
    }
  }, []);

  const login = async (email: string, password: string) => {
    const response = await axios.post('/auth/login', { email, password });
    const { token, user } = response.data;
    setToken(token);
    setUser(user);
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  };

  const isAuthenticated = () => {
    return !!token;
  };

  const fetchUserProfile = async () => {
    if (token) {
      const response = await axios.get('/auth/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated, fetchUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default useAuth;