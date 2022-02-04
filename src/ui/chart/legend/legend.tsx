import { ChartType } from 'chart.js';
import classNames from 'classnames';
import Trend from 'ui/chart/trend/trend';
import styles from './legend.module.scss';

export interface LegendItem {
  label: string;
  value: number | null;
  previousValue: number | null;
  active: boolean;
  color: string;
  type: ChartType;
}

interface LegendProps {
  items: LegendItem[];
  onItemClick: (item: LegendItem, index: number) => void;
}

function Legend({ items, onItemClick }: LegendProps) {
  return (
    <div className={styles.chartLegend}>
      {items.length > 0 && items.map((legendItem: LegendItem, index) => (
        <button
          key={legendItem.label}
          type="button"
          onClick={() => onItemClick(legendItem, index)}
          className={classNames({
            [styles.item]: true,
            [styles.inactive]: !legendItem.active,
          })}
        >
          <div className={styles.series}>
            <div
              className={classNames(styles.color, styles[legendItem.type])}
              style={{ backgroundColor: legendItem.color }}
            />
            {legendItem.label}
          </div>
          <div className={styles.amount}>{legendItem.value?.toLocaleString()}</div>
          <Trend value={legendItem.value} previousValue={legendItem.previousValue} />
        </button>
      ))}
    </div>
  );
}

export default Legend;
