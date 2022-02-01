import { Routes, Route, Navigate } from 'react-router-dom';
import routes from 'routes/routes';
import Fulllayout from 'ui/full-layout/fulllayout';

function XdcExplorer() {
  return (
    <Fulllayout>
      <Routes>
        {routes.map((prop, key) => {
          if (prop.redirect) {
            return <Route path={prop.path} element={<Navigate to={prop.pathTo ?? '/'} />} key={key} />;
          }

          return (
            <Route
              path={prop.path}
              element={prop.component ? <prop.component /> : undefined}
              key={key}
            />
          );
        })}
      </Routes>
    </Fulllayout>
  );
}

export default XdcExplorer;
