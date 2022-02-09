import Axios, { AxiosInstance } from 'axios';
import HttpErrorToastInterceptor from './interceptors/HttpErrorToastInterceptor';

const backend: AxiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
backend.interceptors.response.use(
  undefined,
  HttpErrorToastInterceptor,
);

export default backend;
