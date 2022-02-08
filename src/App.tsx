import XdcExplorer from 'pages/xdcExplorer';
import { BrowserRouter } from 'react-router-dom';
import Axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

Axios.defaults.baseURL = process.env.REACT_APP_API_URL;

function App() {
  return (
    <BrowserRouter>
      <XdcExplorer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
