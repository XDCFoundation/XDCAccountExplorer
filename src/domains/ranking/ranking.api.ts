import { get, buildURLQuery } from 'api/api.helpers';
import DisplayableError from 'util/error/displayable-error';
import { isRankingError } from './ranking.helpers';
import {
  AccountRanking, AmountRanking, RankingError, RankingFilters,
} from './ranking.types';

const ACCOUNT_RANKING_ENDPOINT: string = 'accountRanking';
const AMOUNT_RANKING_ENDPOINT: string = 'amountRanking';

const getAccountRanking = async (filters: RankingFilters): Promise<AccountRanking> => {
  const url: string = `${ACCOUNT_RANKING_ENDPOINT}?${buildURLQuery(filters)}`;

  const response = await get<AccountRanking | RankingError>(url);

  if (isRankingError(response)) {
    throw new DisplayableError(response.message);
  }

  return response;
};

const getAmountRanking = async (filters: RankingFilters): Promise<AmountRanking> => {
  const url: string = `${AMOUNT_RANKING_ENDPOINT}?${buildURLQuery(filters)}`;
  return get(url);
};

export default {};
export { getAccountRanking, getAmountRanking };
