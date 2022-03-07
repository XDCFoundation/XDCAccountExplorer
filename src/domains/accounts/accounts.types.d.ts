import { TimeFilters } from 'domains/time-filters/timeFilters';

export type AccountsStatsDataObject = {
  date: string,
  contract: number,
  token: number,
  total: number,
};

export type AccountFilters = {
  minimumAmount?: number;
  includeFoundationAccounts: boolean,
  includeSecondLayerApplications: boolean,
};

export type AccountsStatsFilters = TimeFilters & AccountFilters;
