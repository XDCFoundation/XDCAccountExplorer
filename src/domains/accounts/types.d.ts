type AccountsStatsDataObject = {
  date: string,
  contract: number,
  token: number,
  total: number,
};
type AccountsFilters = {
  date_lte: Date;
  date_gte?: Date;
};
export { AccountsStatsDataObject, AccountsFilters };
