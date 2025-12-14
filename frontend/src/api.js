import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  withCredentials: true, // Important: sends cookies (JWT)
});

export default API;