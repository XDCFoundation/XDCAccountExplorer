import { get, buildURLQuery } from 'api/api.helpers';
import { AccountsStatsDataObject, AccountsStatsFilters } from './accounts.types';

const ACCOUNT_STATS_ENDPOINT: string = 'accountStats';

const getAccountsStats = async (filters: AccountsStatsFilters)
: Promise<AccountsStatsDataObject[]> => {
  const url: string = `${ACCOUNT_STATS_ENDPOINT}?${buildURLQuery(filters)}`;
  return get<AccountsStatsDataObject[]>(url);
};

export default {};
export { getAccountsStats };
