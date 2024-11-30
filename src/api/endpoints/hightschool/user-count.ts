import APIAxiosInstance from '@/api/axios';

export const userCount = async (highschoolCode: string = '7010059') => {
    const response = await APIAxiosInstance.post(`/highschool/user-count`, {
        highschoolCode: highschoolCode
    }, {
        headers: {
            'Content-Type': 'application/json',
            'accept': '*/*'
        }
    });
    return response.data;
};