import { AccountTranche } from 'domains/accounts-by-tranche/accountsByTranche.types';
import { getAccountsByTranche } from 'domains/accounts-by-tranche/api/accountsByTrancheApi';
import { useQuery, UseQueryResult } from 'react-query';
import { parseAccountsByTrancheDTOs } from './useAccountsByTranche.helpers';

function useAccountsByTranche(): UseQueryResult<AccountTranche[]> {
  return useQuery(
    ['accounts-by-tranche'],
    async () => {
      const accountsByTrancheDtos = await getAccountsByTranche();

      return parseAccountsByTrancheDTOs(accountsByTrancheDtos);
    },
  );
}

export default useAccountsByTranche;
