import { useQuery, UseQueryResult } from 'react-query';
import { AccountsFilters } from 'domains/accounts/types';
import { getMasternodes } from './api';

function useMasternodes(filters: AccountsFilters): UseQueryResult<MasternodesDataObject[], Error> {
  return useQuery(
    ['masternodes', filters],
    () => getMasternodes(filters),
    { initialData: [], retry: false },
  );
}

export default { useMasternodes };
