import {
  Nav,
  NavItem,
  Navbar,
  Collapse,
} from 'reactstrap';

import { NavLink } from 'react-router-dom';
import { RouteConfig } from 'routes/types';
import { ReactComponent as IconLogo } from 'assets/images/icons/icon_logo.svg';

type HeaderProps = {
  routes: RouteConfig[];
};

function Header({
  routes,
}: HeaderProps) {
  return (
    <header className="topbar navbarbg" data-navbarbg="skin1">
      <Navbar className="top-navbar" dark expand>
        <div className="navbar-header">
          <div className="navbar-brand">
            <IconLogo className="me-2" />
            <span>XDC</span>
          </div>
        </div>
        <Collapse className="navbarbg" navbar data-navbarbg="skin1">
          <Nav className="ms-auto float-right" navbar>
            {routes.map((prop, key) => {
              if (prop.redirect) {
                return null;
              }
              return (
                <NavItem key={key}>
                  <NavLink
                    to={prop.path}
                    className={(navData) => (navData.isActive ? 'nav-link ms-5 active' : 'nav-link ms-5')}
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
