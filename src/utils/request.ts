import axios from 'axios';
import CONFIG from '../config/config';

// create an axios instance
const axiosInstance = axios.create({
  baseURL: CONFIG.API_PREFIX, // api的 base_url
  timeout: 5000, // request timeout
});

// request interceptor
axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    window.console.log(error);
    Promise.reject(error);
  },
);

// respone interceptor
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    window.console.log('err' + error); // for debug
    return Promise.reject(error);
  },
);

export default axiosInstance;
