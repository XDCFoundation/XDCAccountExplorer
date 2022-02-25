import { get, buildURLQuery } from 'api/api.helpers';
import { TimeFilters } from 'domains/time-filters/timeFilters';
import { BurntMintedTotalSupplyStatsDto } from './burntMintedTotalSupply.types';

const BURNT_MINTED_TOTALSUPPLY_STATS_ENDPOINT: string = 'burntMintedTotalSupply';

const getBurntMintedTotalSupplyStats = async (filters: TimeFilters)
: Promise<BurntMintedTotalSupplyStatsDto[]> => {
  const url: string = `${BURNT_MINTED_TOTALSUPPLY_STATS_ENDPOINT}?${buildURLQuery(filters)}`;
  return get<BurntMintedTotalSupplyStatsDto[]>(url);
};

export { getBurntMintedTotalSupplyStats };
