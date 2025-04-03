import axios from 'axios';

export const createUser = async (url, data) => {
    try {
        const response = await axios.post(`http://localhost:8000${url}`, data);
        return response;
    } catch (error) {
        console.error('Error while request:', error.message);
        return error.response;
    }
};

export const verifyEmail = async (url, data) => {
    try {
        const response = await axios.patch(`http://localhost:8000${url}`, data);
        return response;
    } catch (error) {
        console.error('Error during email verification:', error.message);
        return error.response;
    }
};

export const verifyToken = async (url) => {
    try {
        const response = await axios.get(`http://localhost:8000${url}`);
        return response;
    } catch (error) {
        console.error('Error during token verification:', error.message);
        return error.response;
    }
}

export const loginUser = async (url, data) => {
    try {
        const response = await axios.post(`http://localhost:8000${url}`, data);
        return response;
    } catch (error) {
        console.error('Error during login:', error.message);
        return error.response;
    }
};