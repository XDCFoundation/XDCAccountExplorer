import { get, buildURLQuery } from 'api/api.helpers';

const MASTERNODES_ENDPOINT: string = 'masternodes';

const getMasternodes = async (filters: MasternodesFilters)
: Promise<MasternodesDataObject[]> => {
  const url: string = `${MASTERNODES_ENDPOINT}?${buildURLQuery(filters)}`;
  return get<MasternodesDataObject[]>(url);
};

export default {};
export { getMasternodes };
