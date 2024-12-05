import APIAxiosInstance from '@/api/axios';

export const studentCount = async (highschoolCode: string = '7010059') => {
    const response = await APIAxiosInstance.get(`/highschool/student-count`, {
        params: {
            highschoolCode: highschoolCode
        },
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response.data;
};