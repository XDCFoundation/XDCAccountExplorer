import XdcExplorer from 'pages/xdcExplorer';
import { BrowserRouter } from 'react-router-dom';
import Axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import HttpErrorToastInterceptor from 'helpers/interceptors/HttpErrorToastInterceptor';
import { QueryClient, QueryClientProvider } from 'react-query';

Axios.defaults.baseURL = process.env.REACT_APP_API_URL;
Axios.interceptors.response.use(
  undefined,
  HttpErrorToastInterceptor,
);
function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={new QueryClient()}>
        <XdcExplorer />
        <ToastContainer />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
