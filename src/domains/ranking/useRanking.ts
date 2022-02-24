import { useQuery, UseQueryResult } from 'react-query';
import { AccountRanking, AmountRanking, RankingFilters } from './types';
import { getAccountRanking } from './api';

function useRanking(filters: RankingFilters)
  : UseQueryResult<AccountRanking | AmountRanking, Error> {
  return useQuery(
    ['ranking', filters],
    () => getAccountRanking<AccountRanking | AmountRanking>(filters),
    { initialData: undefined, retry: false, enabled: filters.type !== undefined },
  );
}

export default useRanking;
