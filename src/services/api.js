import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistackbackendricardo.herokuapp.com'
});

export default api;