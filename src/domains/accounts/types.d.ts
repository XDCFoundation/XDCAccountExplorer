interface AccountsStatsDataObject {
  date: string,
  contract: number,
  token: number,
  total: number,
}
interface AccountsFilters {
  date_lte: Date;
  date_gte?: Date;
}
export { AccountsStatsDataObject, AccountsFilters };
