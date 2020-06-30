import axios from 'axios';

const host = axios.create(
    {
        baseURL: 'https://reqres.in/api/',
        responseType: 'json'
    }
);

const getUsers = (callback, errorHandler=(()=>{}))=>host.get('/users?page=1').then(callback, errorHandler);

export default {getUsers}