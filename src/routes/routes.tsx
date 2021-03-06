import DashboardPage from 'pages/dashboard/dashboard';
import ListPage from 'pages/list/list';
import isFeatureEnabled from 'util/is-feature-enabled';
import { RouteConfig } from './types';

const routes: RouteConfig[] = [];
if (isFeatureEnabled('DASHBOARD')) {
  routes.push({
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage,
  });
}
routes.push({
  path: '/list',
  name: 'List',
  component: ListPage,
});
routes.push({
  path: '/',
  pathTo: routes[0].path,
  name: routes[0].name,
  redirect: true,
});

export default routes;
