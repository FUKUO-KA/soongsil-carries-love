/* example */

import APIAxiosInstance from '@/api/axios';

/* 스웨거 기준 엔드포인트는 /mail/sendAuthNum */

export const login = async (recievedEmail: string) => {
    const response = await APIAxiosInstance.post('/mail/sendAuthNum', {
        recievedEmail,
    });
    return response.data;
};
