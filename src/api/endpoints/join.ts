/* example */

import APIAxiosInstance from '@/api/axios';

/* 스웨거 기준 엔드포인트는 /join */

interface JoinRequestData {
    email: string;
    password: string;
    college: string;
    department: string;
    nickname: string;
    studentId: string;
    gender: 'MALE' | 'FEMALE';
    schoolCode: string;
    createdAt: string; 
}

export const login = async (requestData: JoinRequestData) => {
    const response = await APIAxiosInstance.post('/auth/login', requestData);
    return response.data;
};
