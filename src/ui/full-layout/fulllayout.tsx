import { ReactElement } from 'react';
import routes from 'routes/routes';
import Footer from 'ui/footer/footer';
import Header from 'ui/header/header';

interface FullLayoutProps {
  children: ReactElement;
}

function Fulllayout({ children }: FullLayoutProps) {
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
      <Header routes={routes} />
      {/*--------------------------------------------------------------------------------*/}
      {/* Page Main-Content                                                              */}
      {/*--------------------------------------------------------------------------------*/}
      <div className="page-wrapper d-block">
        <div className="page-content container-fluid">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Fulllayout;
