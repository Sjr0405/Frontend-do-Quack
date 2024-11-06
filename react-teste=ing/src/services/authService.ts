import axios from 'axios';

export const login = (email: string, password: string) => {
  return axios.post('/auth/login', { email, password });
};

export const logout = () => {
  // Logic for logout
};
