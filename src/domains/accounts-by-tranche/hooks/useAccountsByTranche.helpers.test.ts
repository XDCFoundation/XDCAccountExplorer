import { AccountTranche } from 'domains/accounts-by-tranche/accountsByTranche.types';
import { AccountTrancheDTO } from 'domains/accounts-by-tranche/api/accountsByTrancheApi.types';
import { parseAccountsByTrancheDTOs } from './useAccountsByTranche.helpers';

describe('useAccountsByTranche.helpers', () => {
  describe('parseAccountsByTrancheDTOs', () => {
    it('should get sorted account tranches from dtos', () => {
      const dtos: AccountTrancheDTO[] = [
        {
          accounts: 2,
          balanceFrom: 0,
          balanceTo: 9,
          xdcBalance: 100,
          usdBalance: 500,
        },
        {
          accounts: 5,
          balanceFrom: 10,
          xdcBalance: 2000,
          usdBalance: 10000,
        },
      ];

      const accountTranches: AccountTranche[] = [
        {
          accounts: 5,
          balanceFrom: 10,
          xdcBalance: 2000,
          usdBalance: 10000,
          accountsWithGreaterBalance: 5,
          balanceTo: Number.POSITIVE_INFINITY,
          balancePercentage: 1,
          xdcAverageBalance: 400,
        },
        {
          accounts: 2,
          balanceFrom: 0,
          balanceTo: 9,
          xdcBalance: 100,
          usdBalance: 500,
          accountsWithGreaterBalance: 7,
          balancePercentage: 0.2,
          xdcAverageBalance: 50,
        },
      ];

      expect(parseAccountsByTrancheDTOs(dtos)).toEqual(accountTranches);
    });

    it('should not calculate avergae balance if there are 0 accounts in tranche', () => {
      const dtos: AccountTrancheDTO[] = [
        {
          accounts: 0,
          balanceFrom: 0,
          balanceTo: 9,
          xdcBalance: 100,
          usdBalance: 200,
        },
      ];

      const accountTranches: AccountTranche[] = [
        {
          accounts: 0,
          balanceFrom: 0,
          balanceTo: 9,
          xdcBalance: 100,
          usdBalance: 200,
          accountsWithGreaterBalance: 0,
          balancePercentage: 1,
          xdcAverageBalance: undefined,
        },
      ];

      expect(parseAccountsByTrancheDTOs(dtos)).toEqual(accountTranches);
    });

    it('should not calculate balance percentage if maximum balance is 0', () => {
      const dtos: AccountTrancheDTO[] = [
        {
          accounts: 5,
          balanceFrom: 0,
          xdcBalance: 0,
          usdBalance: 0,
        },
      ];

      const accountTranches: AccountTranche[] = [
        {
          accounts: 5,
          balanceFrom: 0,
          balanceTo: Number.POSITIVE_INFINITY,
          xdcBalance: 0,
          usdBalance: 0,
          accountsWithGreaterBalance: 5,
          balancePercentage: undefined,
          xdcAverageBalance: 0,
        },
      ];

      expect(parseAccountsByTrancheDTOs(dtos)).toEqual(accountTranches);
    });
  });
});
