import axios from 'axios';

export const fetchUserProfile = (userId: number, token: string) => {
  return axios.get(`/users/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
