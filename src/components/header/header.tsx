import {
  Nav,
  NavItem,
  Navbar,
  Collapse,
} from 'reactstrap';

import { NavLink } from 'react-router-dom';
import { RouteConfig } from 'routes/types';

type HeaderProps = {
  routes: RouteConfig[];
};

function Header({
  routes,
}: HeaderProps) {
  return (
    <header className="topbar navbarbg" data-navbarbg="skin1">
      <Navbar className="top-navbar" dark expand="md">
        <div className="navbar-header">
          <div className="navbar-brand">
            Logo here XDC FE
          </div>
        </div>
        <Collapse className="navbarbg" navbar data-navbarbg="skin1">
          <Nav className="ml-auto float-right" navbar>
            {routes.map((prop, key) => {
              if (prop.redirect) {
                return null;
              }
              return (
                <NavItem key={key}>
                  <NavLink
                    to={prop.path}
                    className={(navData) => (navData.isActive ? 'nav-link ml-1 mr-1 font-bold' : 'nav-link ml-1 mr-1')}
                  >
                    <i className={prop.icon} />
                    {' '}
                    <span className="hide-menu">{prop.name}</span>
                  </NavLink>
                </NavItem>
              );
            })}
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}
export default Header;
