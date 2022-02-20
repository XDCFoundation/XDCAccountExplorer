type MasternodesDataObject = {
  date: string,
  validators: number,
  total: number,
};
type MasternodesFilters = {
  date_lte: Date;
  date_gte?: Date;
};
