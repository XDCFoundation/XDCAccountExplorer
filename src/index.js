import React from 'react';
import ReactDOM from 'react-dom';
import indexRoutes from './routes/index.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import './assets/scss/style.scss';

ReactDOM.render(
    <BrowserRouter history={createBrowserHistory()}>
        <Routes>
            {indexRoutes.map((prop, key) => {
                return <Route path={prop.path} key={key} element={<prop.component/>}/>;
            })}
        </Routes>

    </BrowserRouter>
    , document.getElementById('root'));
