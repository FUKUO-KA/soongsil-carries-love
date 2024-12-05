import APIAxiosInstance from '@/api/axios';

export const genderRatio = async (highschoolCode: string = '7010059') => {
    const response = await APIAxiosInstance.post(`/highschool/gender-ratio`, {
        highschoolCode: highschoolCode
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response.data;
};