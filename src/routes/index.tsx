import Fulllayout from '../layouts/fulllayout';
import { RouteConfig } from './types';

const indexRoutes: RouteConfig[] = [
  { path: '*', name: 'Starter', component: Fulllayout },
];

export default indexRoutes;
