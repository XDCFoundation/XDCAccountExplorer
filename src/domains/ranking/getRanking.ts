import { useQuery, UseQueryResult } from 'react-query';
import { AccountRanking, AmountRanking, RankingFilters } from './types';
import { getAccountRanking, getAmountRanking } from './api';

function getRanking(filters: RankingFilters)
  : UseQueryResult<AccountRanking | AmountRanking, Error> {
  return filters.type === 'account'
    ? useQuery(
      ['accountRanking', filters],
      () => getAccountRanking(filters),
      { initialData: undefined, retry: false, enabled: filters.type !== undefined },
    )
    : useQuery(
      ['amountRanking', filters],
      () => getAmountRanking(filters),
      { initialData: undefined, retry: false, enabled: filters.type !== undefined },
    );
}

export default getRanking;
