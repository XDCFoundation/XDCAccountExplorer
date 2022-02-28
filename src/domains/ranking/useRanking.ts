import { useQuery, UseQueryResult } from 'react-query';
import { AccountRanking, AmountRanking, RankingFilters } from './ranking.types';
import { getAccountRanking, getAmountRanking } from './ranking.api';

function useRanking(filters: RankingFilters | null)
  : UseQueryResult<AccountRanking | AmountRanking, Error> {
  return useQuery(
    ['ranking', filters],
    (): Promise<AccountRanking | AmountRanking> => {
      if (!filters) {
        throw new Error('Can\'t fetch ranking. No filters provided.');
      }

      if (filters.type === 'account') {
        return getAccountRanking(filters);
      }
      return getAmountRanking(filters);
    },
    { enabled: !!filters },
  );
}

export default useRanking;
