import XdcExplorer from 'pages/xdcExplorer';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from 'react-query';

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
