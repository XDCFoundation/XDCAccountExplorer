import { get } from 'api/api.helpers';
import { AccountsStatsDataObject, AccountsFilters } from './types';

const ACCOUNT_STATS_ENDPOINT: string = 'accountStats';

// TODO do poprawy
const encodeFilters = (
  filters: AccountsFilters,
): string => `${encodeURIComponent('date_lte')}=${encodeURIComponent(filters.date_lte.toISOString())}&
${encodeURIComponent('date_gte')}=${encodeURIComponent(filters.date_gte.toISOString())}`;

const getAccountsStats = async (filters: AccountsFilters)
: Promise<AccountsStatsDataObject[]> => {
  const url: string = `${ACCOUNT_STATS_ENDPOINT}?${encodeFilters(filters)}`;
  return get<AccountsStatsDataObject[]>(url);
};

export default {};
export { getAccountsStats };
