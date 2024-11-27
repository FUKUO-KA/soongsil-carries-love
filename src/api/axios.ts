import axios, { AxiosInstance } from 'axios';

class APIAxiosInstance {
    private static instance: AxiosInstance;

    private constructor() {}

    public static getInstance(): AxiosInstance {
        if (!APIAxiosInstance.instance) {
            APIAxiosInstance.instance = axios.create({
                baseURL: import.meta.env.VITE_APP_API_URL,
                timeout: 5000,
            });
        }
        return APIAxiosInstance.instance;
    }
}

export default APIAxiosInstance.getInstance();