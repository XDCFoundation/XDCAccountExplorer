import { useQuery, UseQueryResult } from 'react-query';
import { AccountsFilters, AccountsStatsDataObject } from './types';
import { getAccountsStats } from './api';

function useAccounts(filters: AccountsFilters): UseQueryResult<AccountsStatsDataObject[], Error> {
  return useQuery(
    ['accounts', filters],
    () => getAccountsStats(filters),
    { initialData: [] },
  );
}

export default { useAccounts };
