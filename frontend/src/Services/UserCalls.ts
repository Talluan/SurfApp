import axios, { AxiosError } from 'axios';

const baseUrl = import.meta.env.API_URL || "http://localhost:3001";

const login = async (username: string, password: string) => {
    let response = null;
    try {
        response = await axios.post(`${baseUrl}/users/login`, { username, password });
    } catch (error) {
        return error as AxiosError;
    }
    return response;
}

export { login };