module.exports = {
  calculateAmountStats: (params) => {
    const { balance } = params;
    const includeFoundation = params.includeFoundationAccounts !== undefined;
    const includeZeroBalance = params.includeZeroBalanceAccounts !== undefined;

    const accountsCount = 1600 + (includeZeroBalance ? 3000 : 0) + (includeFoundation ? 1000 : 0);
    const topAccountBalance = 2000000000;
    const percentile = balance / topAccountBalance;
    const accountsRicher = percentile < 1
      ? Math.floor(accountsCount - accountsCount * percentile)
      : 0;
    const accountsPoorer = accountsCount - accountsRicher - 1;

    return {
      balance,
      accountsRicher,
      accountsPoorer,
    };
  },
};
