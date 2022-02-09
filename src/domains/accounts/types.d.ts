interface AccountsStatsDataObject {
  date: string,
  contract: number,
  token: number,
  total: number,
}
interface AccountsFilters {
  [key: string]: string;
}
export { AccountsStatsDataObject, AccountsFilters };
