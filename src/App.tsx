import XdcExplorer from 'pages/xdcExplorer';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PortalContainer } from 'ui/portal/portal';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <XdcExplorer />
        <PortalContainer />
        <ToastContainer />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
