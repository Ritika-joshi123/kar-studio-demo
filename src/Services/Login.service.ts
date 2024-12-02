import axios from 'axios';

const usersAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loginUser = async (email: string, password: string) => {
  return usersAxios.post<any>('/login', { email, password });
};

export const registerUser = async (
  first_name: string,
  email: string,
  password: string
) => {
  return usersAxios.post<any>('/register', { first_name, email, password });
};
