import { get, buildURLQuery } from 'api/api.helpers';
import { TimeFilters } from 'domains/time-filters/timeFilters';
import { SupplyDto } from './supply.types';

const SUPPLY_STATS_ENDPOINT: string = 'supply';

const getSupply = async (filters: TimeFilters)
: Promise<SupplyDto[]> => {
  const url: string = `${SUPPLY_STATS_ENDPOINT}?${buildURLQuery(filters)}`;
  return get<SupplyDto[]>(url);
};

export { getSupply };
