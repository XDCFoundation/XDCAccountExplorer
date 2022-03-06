import { TimeFilters } from 'domains/time-filters/timeFilters';
import { useQuery, UseQueryResult } from 'react-query';
import { getAccountsStats } from './accounts.api';
import { AccountFilters, AccountsStatsDataObject } from './accounts.types';

function useAccounts(
  timeFilters: TimeFilters,
  accountFilters: AccountFilters,
): UseQueryResult<AccountsStatsDataObject[], Error> {
  return useQuery(
    ['accounts', timeFilters, accountFilters],
    () => getAccountsStats({ ...timeFilters, ...accountFilters }),
    { initialData: [] },
  );
}

export default useAccounts;
