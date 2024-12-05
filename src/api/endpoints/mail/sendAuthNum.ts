import APIAxiosInstance from '@/api/axios';

export const sendmail = async (receiverEmail: string) => {
  const response = await APIAxiosInstance.post('/mail/sendAuthNum', null, {
    params: { receiverEmail },
  });
  return response.data;
};
