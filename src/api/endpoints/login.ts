import APIAxiosInstance from '@/api/axios';
import { LoginRequest } from '../types/request';

export const login = async (requestData: LoginRequest) => {
  const response = await APIAxiosInstance.post('/login', requestData);
  return response.data;
};
