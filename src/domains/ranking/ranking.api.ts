import { get, buildURLQuery } from 'api/api.helpers';
import { AccountRanking, AmountRanking, RankingFilters } from './ranking.types';

const ACCOUNT_RANKING_ENDPOINT: string = 'accountRanking';
const AMOUNT_RANKING_ENDPOINT: string = 'amountRanking';

const getAccountRanking = async (filters: RankingFilters): Promise<AccountRanking> => {
  const url: string = `${ACCOUNT_RANKING_ENDPOINT}?${buildURLQuery(filters)}`;
  return get(url);
};

const getAmountRanking = async (filters: RankingFilters): Promise<AmountRanking> => {
  const url: string = `${AMOUNT_RANKING_ENDPOINT}?${buildURLQuery(filters)}`;
  return get(url);
};

export default {};
export { getAccountRanking, getAmountRanking };
