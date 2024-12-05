import APIAxiosInstance from '@/api/axios';

export const genderRatio = async (highschoolCode: string) => {
    const response = await APIAxiosInstance.post(`/highschool/gender-ratio`, {
        highschoolCode: highschoolCode
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response.data;
};