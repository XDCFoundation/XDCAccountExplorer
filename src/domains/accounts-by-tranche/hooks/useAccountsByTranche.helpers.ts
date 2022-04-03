import { AccountTrancheDTO } from 'domains/accounts-by-tranche/api/accountsByTrancheApi.types';
import { AccountTranche } from 'domains/accounts-by-tranche/accountsByTranche.types';
import { maxBy, orderBy } from 'lodash';

function calculateBalancePercentage(
  balance: number,
  maxBalance: number | undefined,
): number | undefined {
  if (!maxBalance) {
    return undefined;
  }

  const relativeBalance = (balance / maxBalance) * Math.log10(maxBalance);

  return Math.min(
    Math.max(0, relativeBalance),
    1,
  );
}

export function parseAccountsByTrancheDTOs(dtos: AccountTrancheDTO[]): AccountTranche[] {
  const sortedDtos = orderBy(dtos, ['balanceFrom'], ['desc']);
  const maxUsdBalance = maxBy(sortedDtos, 'xdcBalance')?.usdBalance;

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
      balancePercentage: calculateBalancePercentage(dto.usdBalance, maxUsdBalance),
      xdcAverageBalance: dto.accounts ? dto.xdcBalance / dto.accounts : undefined,
      xdcBalance: dto.xdcBalance,
    },
  ]), [] as AccountTranche[]);
}
