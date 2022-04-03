import Axios, { AxiosInstance } from 'axios';

const backend: AxiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default backend;
