import { useQuery, UseQueryResult } from 'react-query';
import { TimeFilters } from 'domains/time-filters/timeFilters';
import { BurntMintedTotalSupplyStatsDto } from './burntMintedTotalSupply.types';
import { getBurntMintedTotalSupplyStats } from './burntMintedTotalSupply.api';

function useBurntMintedTotalSupply(filters: TimeFilters):
UseQueryResult<BurntMintedTotalSupplyStatsDto[], Error> {
  return useQuery(
    ['burntMintedTotalSupply', filters],
    () => getBurntMintedTotalSupplyStats(filters),
    { initialData: [] },
  );
}

export default useBurntMintedTotalSupply;
