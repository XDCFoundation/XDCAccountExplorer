import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from '../components/header/header.jsx';
import Footer from '../components/footer/footer.jsx';
import ThemeRoutes from '../routes/routing.jsx';

const Fulllayout = (props) => {
    return (
        <div
            id="main-wrapper"
            data-theme="light"
            data-layout="horizontal"
            data-header-position="fixed"
            data-boxed-layout="full"
        >
            {/*--------------------------------------------------------------------------------*/}
            {/* Header                                                                         */}
            {/*--------------------------------------------------------------------------------*/}
            <Header {...props} routes={ThemeRoutes} />
            {/*--------------------------------------------------------------------------------*/}
            {/* Page Main-Content                                                              */}
            {/*--------------------------------------------------------------------------------*/}
            <div className="page-wrapper d-block">
                <div className="page-content container-fluid">
                    <Routes>
                        {ThemeRoutes.map((prop, key) => {
                            if (prop.redirect) {
                                return <Route path={prop.path} element={<Navigate to={prop.pathTo} />} key={key} />;
                                // return <Navigate from={prop.path} to={prop.pathTo} key={key} />;
                            }
                            else {
                                return (
                                    <Route path={prop.path} element={<prop.component/>} key={key} />
                                );
                            }
                        })}
                    </Routes>
                </div>
                <Footer />
            </div>
        </div>
    );
}
export default Fulllayout;
