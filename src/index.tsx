
import ReactDOM from 'react-dom';
import indexRoutes from './routes';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './assets/scss/style.scss';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            {indexRoutes.map((prop, key) => {
                return <Route path={prop.path} key={key} element={<prop.component/>}/>;
            })}
        </Routes>
    </BrowserRouter>
    , document.getElementById('root'));
