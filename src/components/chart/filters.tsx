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
    <div className="chart-filters">
      { title !== null && <div className="title">{filterTitle}</div> }
      <div className="items">
        {!!items.length && items.map((item, idx: number) => (
          <div
            role="button"
            tabIndex={idx}
            key={item.value}
            className={`${value === item.value ? 'selected' : ''}`}
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
