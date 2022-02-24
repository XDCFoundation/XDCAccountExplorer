import { AccountTrancheDTO } from 'domains/accounts-by-tranche/api/accountsByTrancheApi.types';
import { AccountTranche } from 'domains/accounts-by-tranche/accountsByTranche.types';
import { maxBy, orderBy } from 'lodash';

export function parseAccountsByTrancheDTOs(dtos: AccountTrancheDTO[]): AccountTranche[] {
  const sortedDtos = orderBy(dtos, ['balanceFrom'], ['desc']);
  const maxXdcBalance = maxBy(sortedDtos, 'xdcBalance')?.xdcBalance;

  return sortedDtos.reduce((accountTranches, dto, index): AccountTranche[] => ([
    ...accountTranches,
    {
      accounts: dto.accounts,
      accountsWithGreaterBalance: index === 0
        ? dto.accounts
        : accountTranches[index - 1].accountsWithGreaterBalance + dto.accounts,
      balanceFrom: dto.balanceFrom,
      balanceTo: dto.balanceTo ?? Number.POSITIVE_INFINITY,
      usdBalance: dto.usdBalance,
      balancePercentage: maxXdcBalance ? dto.xdcBalance / maxXdcBalance : undefined,
      xdcAverageBalance: dto.accounts ? dto.xdcBalance / dto.accounts : undefined,
      xdcBalance: dto.xdcBalance,
    },
  ]), [] as AccountTranche[]);
}
