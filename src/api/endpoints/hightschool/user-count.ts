import APIAxiosInstance from '@/api/axios';

export const userCount = async (highschoolCode: string) => {
    const response = await APIAxiosInstance.post(`/highschool/user-count`, {
        highschoolCode: highschoolCode
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response.data;
};