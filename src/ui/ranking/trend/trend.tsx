import { ReactComponent as IconCaretUp } from 'assets/images/icons/icon_caret_up.svg';
import { ReactComponent as IconCaretDown } from 'assets/images/icons/icon_caret_down.svg';
import classNames from 'classnames';
import styles from './trend.module.scss';

interface RankingTrendProps {
  negative?: boolean;
  value: number;
  description: string;
}

function Trend({ negative, value, description }: RankingTrendProps) {
  return (
    <div className={styles.container}>
      <span className={classNames({
        [styles.down]: !!negative,
        [styles.up]: !negative,
      })}
      >
        {!negative && <IconCaretUp />}
        {negative && <IconCaretDown />}
      </span>
      <b className="ml-2 mr-3">
        {value.toLocaleString()}
      </b>
      <small>
        {description}
      </small>
    </div>
  );
}

export default Trend;
