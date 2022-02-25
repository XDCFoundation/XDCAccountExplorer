import { useQuery, UseQueryResult } from 'react-query';
import { AccountRanking, AmountRanking, RankingFilters } from './ranking.types';
import { getAccountRanking } from './ranking.api';

function useRanking(filters: RankingFilters | null)
  : UseQueryResult<AccountRanking | AmountRanking, Error> {
  return useQuery(
    ['ranking', filters],
    () => getAccountRanking<AccountRanking | AmountRanking>(filters as RankingFilters),
    { enabled: !!filters },
  );
}

export default useRanking;
