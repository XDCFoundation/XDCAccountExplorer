import { AccountTrancheDTO } from 'domains/accounts-by-tranche/api/accountsByTrancheApi.types';
import { AccountTranche } from 'domains/accounts-by-tranche/accountsByTranche.types';
import { orderBy } from 'lodash';

export function parseAccountsByTrancheDTOs(dtos: AccountTrancheDTO[]): AccountTranche[] {
  const accountTranches = dtos.map((dto): AccountTranche => ({
    accounts: dto.accounts,
    accountsWithGreaterBalance: dto.accountsWithGreaterBalance,
    balanceFrom: dto.balanceFrom,
    balanceTo: dto.balanceTo ?? Number.POSITIVE_INFINITY,
    usdBalance: dto.usdBalance,
    balancePercentage: dto.balancePercentage,
    xdcAverageBalance: dto.xdcAverageBalance,
    xdcBalance: dto.xdcBalance,
  }));

  return orderBy(accountTranches, ['balanceFrom'], ['desc']);
}
