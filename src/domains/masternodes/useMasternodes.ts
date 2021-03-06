import { TimeFilters } from 'domains/time-filters/timeFilters';
import { useQuery, UseQueryResult } from 'react-query';
import { getMasternodes } from './masternodes.api';

function useMasternodes(filters: TimeFilters): UseQueryResult<MasternodesDataObject[], Error> {
  return useQuery(
    ['masternodes', filters],
    () => getMasternodes(filters),
    { initialData: [] },
  );
}

export default { useMasternodes };
