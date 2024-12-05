import APIAxiosInstance from '@/api/axios';

export const checkAuthNum = async (userInputAuthNum: number, email: string) => {
  const response = await APIAxiosInstance.get('/mail/checkAuthNum', {
    params: { userInputAuthNum, email },
  });
  return response.data;
};
