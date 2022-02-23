import { get, buildURLQuery } from 'api/api.helpers';
import { AccountRanking, AmountRanking, RankingFilters } from './types';

const ACCOUNT_RANKING_ENDPOINT: string = 'accountRanking';
const AMOUNT_RANKING_ENDPOINT: string = 'amountRanking';

const getAccountRanking = async (filters: RankingFilters): Promise<AccountRanking> => {
  const url: string = `${ACCOUNT_RANKING_ENDPOINT}?${buildURLQuery(filters)}`;
  return get<AccountRanking>(url);
};
const getAmountRanking = async (filters: RankingFilters): Promise<AmountRanking> => {
  const url: string = `${AMOUNT_RANKING_ENDPOINT}?${buildURLQuery(filters)}`;
  return get<AmountRanking>(url);
};

export default {};
export { getAccountRanking, getAmountRanking };
