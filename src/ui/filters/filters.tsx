import classNames from 'classnames';
import styles from './filters.module.scss';

type FilterValue = string | number | null;

interface FiltersItems {
  value: FilterValue,
  name: string,
}

interface FiltersProps {
  title?: string;
  items: FiltersItems[];
  value: FilterValue;
  onSelect: (value: FilterValue) => void;
}

const DEFAULT_TIME_FILTERS = [
  { name: '7D', value: 7 },
  { name: '1M', value: 30 },
  { name: '3M', value: 90 },
  { name: '1Y', value: 365 },
  { name: 'MAX', value: null },
];

function Filters({
  title, items, value, onSelect,
}: FiltersProps) {
  return (
    <div className={styles.container}>
      {!!title && <div className={styles.title}>{title}</div>}
      {!!items.length && (
        <div className={styles.filters}>
          {items.map((item) => (
            <button
              type="button"
              key={item.value}
              className={classNames({
                [styles.filterButton]: true,
                [styles.selected]: value === item.value,
              })}
              onClick={() => onSelect(item.value)}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Filters;
export type { FilterValue };
export { DEFAULT_TIME_FILTERS as DEFAULT_FILTERS };
