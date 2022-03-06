const accountStats = require('./account-stats.json');

module.exports = {
  calculateAccountStats: (params) => {
    const {
      minimumAmount = 0,
      includeFoundationAccounts = false,
      includeSecondLayerApplications = false,
      date_lte: maxDate,
      date_gte: minDate,
    } = params;

    const maxBalance = 2000000;
    const balancePercentage = Math.min(1, minimumAmount / maxBalance);
    const accountsWithSmallerBalancePercentage = Math.max(
      0,
      Math.log10(balancePercentage * 10 ** 5) / 5,
    );

    const omittedFoundationAccounts = includeFoundationAccounts ? 0 : 0.05;
    const omittedSecondLayerApplications = includeSecondLayerApplications ? 0 : 0.1;

    const includedAccountsPercentage = Math.max(
      0,
      1
      - accountsWithSmallerBalancePercentage
      - omittedFoundationAccounts
      - omittedSecondLayerApplications,
    );

    const maxTimestamp = maxDate ? new Date(maxDate).getTime() : Number.POSITIVE_INFINITY;
    const minTimestamp = minDate ? new Date(minDate).getTime() : Number.NEGATIVE_INFINITY;

    return accountStats
      .map((statsByDate) => ({
        date: statsByDate.date,
        contract: Math.floor(includedAccountsPercentage * statsByDate.contract),
        token: Math.floor(includedAccountsPercentage * statsByDate.token),
        total: Math.floor(includedAccountsPercentage * statsByDate.total),
      }))
      .filter((statsByDate) => {
        const timestamp = new Date(statsByDate.date).getTime();
        return timestamp >= minTimestamp && timestamp <= maxTimestamp;
      });
  },
};
