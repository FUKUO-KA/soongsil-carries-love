import APIAxiosInstance from '@/api/axios';

export const highSchoolRanking = async () => {
    const response = await APIAxiosInstance.get('/highschool/highschool-ranking', {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};
