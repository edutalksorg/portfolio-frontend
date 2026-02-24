import axios from 'axios';

export const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/';
console.log('Current VITE_API_URL:', apiBaseUrl);

const api = axios.create({
    baseURL: `${apiBaseUrl}api`,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
