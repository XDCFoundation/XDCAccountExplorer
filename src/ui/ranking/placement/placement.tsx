import { ReactComponent as IconTrophy } from 'assets/images/icons/icon_trophy.svg';
import styles from './placement.module.scss';

interface PlacementProps {
  percent: number;
}

function Placement({ percent }: PlacementProps) {
  const roundedPercent = Math.ceil(percent);
  const pieChartStyle = { '--perc': roundedPercent } as React.CSSProperties;

  return (
    <div className={styles.container}>
      <span>
        <div className={styles.percent}>
          TOP
          {' '}
          {roundedPercent.toLocaleString()}
          %
        </div>
        <div>
          <IconTrophy />
        </div>
      </span>
      <span>
        <div className={styles.pie} style={pieChartStyle} />
      </span>
    </div>
  );
}

export default Placement;
