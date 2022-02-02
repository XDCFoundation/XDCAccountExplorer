import DashboardPage from 'pages/dashboard/dashboard';
import ListPage from 'pages/list/list';
import { RouteConfig } from './types';

const routes: RouteConfig[] = [
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

export default routes;
