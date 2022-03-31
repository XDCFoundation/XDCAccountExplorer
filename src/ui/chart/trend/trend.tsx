import classNames from 'classnames';
import { isNull } from 'lodash';
import shortenNumber from 'util/number/shortenNumber';
import styles from './trend.module.scss';

interface TrendProps {
  value: number | null;
  previousValue: number | null;
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
      {shortenNumber(difference)}
    </div>
  );
}

export default Trend;
