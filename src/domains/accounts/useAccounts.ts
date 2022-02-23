import { useQuery, UseQueryResult } from 'react-query';
import { TimeFilters } from 'domains/time-filters/timeFilters';
import { AccountsStatsDataObject } from './accounts.types';
import { getAccountsStats } from './accounts.api';

function useAccounts(filters: TimeFilters): UseQueryResult<AccountsStatsDataObject[], Error> {
  return useQuery(
    ['accounts', filters],
    () => getAccountsStats(filters),
    { initialData: [] },
  );
}

export default { useAccounts };
