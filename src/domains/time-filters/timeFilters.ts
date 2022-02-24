const DEFAULT_TIME_FILTERS = [
  { name: '7D', value: 7 },
  { name: '1M', value: 30 },
  { name: '3M', value: 90 },
  { name: '1Y', value: 365 },
  { name: 'MAX', value: null },
];

// TODO: hook

type TimeFilters = {
  date_lte: Date;
  date_gte?: Date;
};

export { DEFAULT_TIME_FILTERS };
export type { TimeFilters };
