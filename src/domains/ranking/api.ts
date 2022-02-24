import { get, buildURLQuery } from 'api/api.helpers';
import { RankingFilters } from './types';

const ACCOUNT_RANKING_ENDPOINT: string = 'accountRanking';
const AMOUNT_RANKING_ENDPOINT: string = 'amountRanking';

const getAccountRanking = async <Type>(filters: RankingFilters): Promise<Type> => {
  const url: string = filters.type === 'account'
    ? `${ACCOUNT_RANKING_ENDPOINT}?${buildURLQuery(filters)}`
    : `${AMOUNT_RANKING_ENDPOINT}?${buildURLQuery(filters)}`;
  return get<Type>(url);
};

export default {};
export { getAccountRanking };
