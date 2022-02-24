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

export {
  AccountRanking,
  AmountRanking,
};
