type RankingType = 'account' | 'amount';

interface Ranking {
  type: RankingType,
  balance: number,
  accountsRicher: number,
  accountsPoorer: number,
}

interface AccountRanking extends Ranking {
  type: 'account',
  transactions: number,
  account: string,
}

interface AmountRanking extends Ranking {
  type: 'amount',
}

type RankingFilters = {
  type: RankingType;
  input: string;
  includeFoundationAccounts: boolean,
  includeZeroBalanceAccounts: boolean,
};

type RankingError = {
  message: string;
};

export {
  AccountRanking,
  AmountRanking,
  RankingFilters,
  RankingError,
};
