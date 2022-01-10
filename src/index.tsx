import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import indexRoutes from './routes';
import './assets/scss/style.scss';

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
