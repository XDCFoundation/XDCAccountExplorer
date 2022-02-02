import classNames from 'classnames';
import { isNull } from 'lodash';
import { Button } from 'reactstrap';
import styles from './legend.module.scss';

export interface LegendItem {
  label: string;
  value: number | null;
  previousValue: number | null;
  active: boolean;
  color: string;
}

interface TrendProps {
  value: number | null;
  previousValue: number | null;
}

interface LegendProps {
  items: LegendItem[];
  onItemClick: (item: LegendItem, index: number) => void;
}

function Trend({ value, previousValue }: TrendProps) {
  if (isNull(value) || isNull(previousValue)) {
    return null;
  }

  const difference = value - previousValue;
  const isDifferencePositive = difference >= 0;

  return (
    <div className={classNames({
      [styles.change]: true,
      [styles.down]: !isDifferencePositive,
      [styles.up]: isDifferencePositive,
    })}
    >
      {isDifferencePositive && '+'}
      {difference}
    </div>
  );
}

function Legend({ items, onItemClick }: LegendProps) {
  return (
    <div className={styles.chartLegend}>
      {items.length > 0 && items.map((legendItem: LegendItem, index) => (
        // XE-6 TODO fix styles
        <Button
          key={legendItem.label}
          type="button"
          onClick={() => onItemClick(legendItem, index)}
          className={classNames({
            [styles.item]: true,
            [styles.inactive]: !legendItem.active,
          })}
        >
          <div className={styles.color}>
            <div style={{ backgroundColor: legendItem.color }} />
          </div>
          <div className={styles.label}>{legendItem.label}</div>
          <div className={styles.amount}>{legendItem.value}</div>
          <Trend value={legendItem.value} previousValue={legendItem.previousValue} />
        </Button>
      ))}
    </div>
  );
}

export default Legend;
