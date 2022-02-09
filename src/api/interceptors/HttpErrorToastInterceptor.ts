import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

const HttpErrorToastInterceptor: (error: AxiosError) => Promise<void> = (error) => {
  toast.error('Fetching data error');
  return Promise.reject(error);
};
export default HttpErrorToastInterceptor;
