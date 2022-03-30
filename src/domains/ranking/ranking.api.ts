import { get, buildURLQuery } from 'api/api.helpers';
import DisplayableError from 'util/displayable-error';
import { AccountRanking, AmountRanking, RankingFilters } from './ranking.types';

const ACCOUNT_RANKING_ENDPOINT: string = 'accountRanking';
const AMOUNT_RANKING_ENDPOINT: string = 'amountRanking';

const getAccountRanking = async (filters: RankingFilters): Promise<AccountRanking> => {
  const url: string = `${ACCOUNT_RANKING_ENDPOINT}?${buildURLQuery(filters)}`;

  return new Promise<AccountRanking>((resolve, reject) => {
    get<AccountRanking>(url)
      .then((response) => {
        const obj = JSON.parse(JSON.stringify(response));
        if (obj.message) {
          reject(new DisplayableError(obj.message));
        } else {
          resolve(response);
        }
      });
  });
};

const getAmountRanking = async (filters: RankingFilters): Promise<AmountRanking> => {
  const url: string = `${AMOUNT_RANKING_ENDPOINT}?${buildURLQuery(filters)}`;
  return get(url);
};

export default {};
export { getAccountRanking, getAmountRanking };
