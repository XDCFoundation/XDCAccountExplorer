import styles from './rankingAccountResult.module.scss';

interface RankingAccountResultProps {
  account: string;
  transactions: number;
  xdc: number;
}

function RankingAccountResult({ account, transactions, xdc }: RankingAccountResultProps) {
  return (
    <div className="text-center mt-2 mb-3">
      <h4>
        {account}
      </h4>
      <div className={styles.stat}>
        <span>
          Total transactions:
        </span>
        <span>
          {transactions.toLocaleString()}
        </span>
      </div>
      <div className={styles.stat}>
        <span>
          Balance:
        </span>
        <span>
          {xdc.toLocaleString()}
        </span>
      </div>
    </div>
  );
}

export default RankingAccountResult;
