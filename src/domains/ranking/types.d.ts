interface Result {
  type: 'account' | 'amount',
  balance: number,
  accountsRicher: number,
  accountsPoorer: number,
}
interface ResultAccount extends Result {
  transactions: number,
  account: string,
}
interface ResultAmount extends Result {}

export {
  ResultAccount,
  ResultAmount,
};
