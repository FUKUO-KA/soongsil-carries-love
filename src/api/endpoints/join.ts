import APIAxiosInstance from '@/api/axios';
import { JoinRequest } from '../types/request';

export const join = async (requestData: JoinRequest) => {
  const params = new URLSearchParams();
  Object.entries(requestData).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      params.append(key, String(value));
    }
  });

  const response = await APIAxiosInstance.post('/join', null, {
    params,
  });
  return response.data;
};
