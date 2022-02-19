import classNames from 'classnames';
import styles from './rankingTrend.module.scss';

interface RankingTrendProps {
  negative?: boolean;
  value: number;
  description: string;
}

function RankingTrend({ negative, value, description }: RankingTrendProps) {
  return (
    <div className={styles.container}>
      <span className={classNames({
        [styles.down]: !!negative,
        [styles.up]: !negative,
      })}
      >
        T
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

export default RankingTrend;
