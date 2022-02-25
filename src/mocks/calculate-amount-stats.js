module.exports = {
  calculateAmountStats: (params, accountsByTranche) => {
    const accounts = JSON.parse(JSON.stringify(accountsByTranche));
    const { balance } = params;
    const includeFoundation = params.includeFoundationAccounts !== undefined;
    const includeZeroBalance = params.includeZeroBalanceAccounts !== undefined;

    if (includeZeroBalance) {
      accounts[0].accounts += 200000;
    }

    let accountsPoorer = 0;
    let accountsCount = 0;
    accounts.forEach((row) => {
      let count = row.accounts;
      if (includeFoundation) {
        count += Math.round(0.05 * count);
      }
      accountsCount += count;

      if (row.balanceTo < balance) {
        accountsPoorer += count;
      } else if (row.balanceFrom < balance) {
        accountsPoorer += Math.round(Math.random() * count);
      }
    });

    return {
      balance,
      accountsPoorer,
      accountsRicher: accountsCount - accountsPoorer - 1,
    };
  },
};
