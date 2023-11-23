import axios from 'axios';

const apiUser = axios.create({
    baseURL: 'http://localhost:3000/api/user',
});

export const insertUser = payload => apiUser.post(`/user`, payload);