import XdcExplorer from 'pages/xdcExplorer';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { PortalContainer } from 'ui/portal/portal';
import { isDisplayableError } from 'util/error/displayable-error';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      const errorMessage = isDisplayableError(error) ? error.message : 'Fetching data error';

      toast.error(errorMessage);
    },
  }),
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
