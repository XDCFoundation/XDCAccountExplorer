import { get } from 'api/api.helpers';
import { AccountTrancheDTO } from './accountsByTrancheApi.types';

const ACCOUNTS_BY_TRANCHE_ENDPOINT: string = '/accountByTranche';

export const getAccountsByTranche = async (): Promise<AccountTrancheDTO[]> => (
  get(ACCOUNTS_BY_TRANCHE_ENDPOINT)
);
