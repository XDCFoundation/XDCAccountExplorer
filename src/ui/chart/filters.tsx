import classNames from 'classnames';
import styles from './filters.module.scss';

type FilterValue = string | number | null;

interface FiltersItems {
  value: FilterValue,
  name: string,
}

interface FiltersProps {
  title: string | null,
  items: FiltersItems[],
  value: FilterValue,
  onSelect: (value: FilterValue) => void,
}

function Filters(props: FiltersProps) {
  const { title, onSelect } = props;
  const filterTitle = title || null;
  const { items } = props;
  const { value } = props;

  return (
    <div className={styles.chartFilters}>
      { title !== null && <div className={styles.title}>{filterTitle}</div> }
      <div className={styles.items}>
        {!!items.length && items.map((item, idx: number) => (
          <div
            role="button"
            tabIndex={idx}
            key={item.value}
            className={classNames({
              [styles.selected]: value === item.value,
            })}
            onClick={() => onSelect(item.value)}
            onKeyDown={() => onSelect(item.value)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filters;
export type { FilterValue };
