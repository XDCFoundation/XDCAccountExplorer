import XdcExplorer from 'pages/xdcExplorer';
import { BrowserRouter } from 'react-router-dom';
import Axios from 'axios';

Axios.defaults.baseURL = process.env.REACT_APP_API_URL;

function App() {
  return (
    <BrowserRouter>
      <XdcExplorer />
    </BrowserRouter>
  );
}

export default App;
