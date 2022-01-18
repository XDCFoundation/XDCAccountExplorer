import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import indexRoutes from './routes';
import './assets/scss/style.scss';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
);

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {indexRoutes.map((prop, key) => (
          <Route
            path={prop.path}
            key={key}
            element={prop.component ? <prop.component /> : undefined}
          />
        ))}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root'),
);
