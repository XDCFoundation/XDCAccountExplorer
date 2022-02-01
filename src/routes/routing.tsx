import DashboardPage from 'views/pages/dashboard';
import ListPage from 'views/pages/list';
import { RouteConfig } from './types';

const ThemeRoutes: RouteConfig[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage,
  },
  {
    path: '/list',
    name: 'List',
    component: ListPage,
  },
  {
    path: '/',
    pathTo: '/dashboard',
    name: 'Dashboard',
    redirect: true,
  },
];
export default ThemeRoutes;
