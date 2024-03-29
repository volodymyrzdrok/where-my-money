import axios from 'axios';
axios.defaults.baseURL = 'https://wallet.b.goit.study';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
