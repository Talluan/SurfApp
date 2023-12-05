import axios, { AxiosError } from 'axios';

const baseUrl = import.meta.env.API_URL || "http://localhost:3001";

const getPlages = async () => {
    let response = null;
    try {
        response = await axios.get(`${baseUrl}/plages`);
    } catch (error) {
        return error as AxiosError;
    }
    return response;
}

export { getPlages };