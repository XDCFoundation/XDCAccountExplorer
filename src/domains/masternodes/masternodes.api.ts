import { get, buildURLQuery } from 'api/api.helpers';
import { TimeFilters } from 'domains/time-filters/timeFilters';

const MASTERNODES_ENDPOINT: string = 'masternodes';

const getMasternodes = async (filters: TimeFilters)
: Promise<MasternodesDataObject[]> => {
  const url: string = `${MASTERNODES_ENDPOINT}?${buildURLQuery(filters)}`;
  return get<MasternodesDataObject[]>(url);
};

export default {};
export { getMasternodes };
