import styles from './rankingTop.module.scss';

interface RankingTopProps {
  percent: number;
}

function RankingTop({ percent }: RankingTopProps) {
  const val = Math.ceil(percent);
  const piePerc = { '--perc': val } as React.CSSProperties;

  return (
    <div className={styles.container}>
      <span>
        <div className={styles.percent}>
          TOP
          {' '}
          {val.toLocaleString()}
          %
        </div>
        <div>
          ico
        </div>
      </span>
      <span>
        <div className={styles.pie} style={piePerc} />
      </span>
    </div>
  );
}

export default RankingTop;
