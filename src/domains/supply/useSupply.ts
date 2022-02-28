import { useQuery, UseQueryResult } from 'react-query';
import { TimeFilters } from 'domains/time-filters/timeFilters';
import { SupplyDto } from './supply.types';
import { getSupply } from './supply.api';

function useSupply(filters: TimeFilters):
UseQueryResult<SupplyDto[], Error> {
  return useQuery(
    ['burntMintedTotalSupply', filters],
    () => getSupply(filters),
    { initialData: [] },
  );
}

export default useSupply;
