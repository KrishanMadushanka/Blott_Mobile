import axios from 'axios';
import {API_URL, NEWS_API_KEY} from '../utils/constants';

const axiosClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'X-Finnhub-Token': NEWS_API_KEY,
  },
});

axiosClient.interceptors.request.use(
  async config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosClient;
