import { ComponentType } from 'react';

export type RouteConfig = {
  name: string;
  path: string;
  component?: ComponentType;
  icon?: string;
  pathTo?: string;
  redirect?: boolean;
};
