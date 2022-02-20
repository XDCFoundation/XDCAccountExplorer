export type AccountTrancheDTO = {
  accounts: number;
  accountsWithGreaterBalance: number;
  balanceFrom: number;
  balanceTo?: number;
  balancePercentage: number;
  usdBalance: number;
  xdcAverageBalance: number;
  xdcBalance: number;
};
