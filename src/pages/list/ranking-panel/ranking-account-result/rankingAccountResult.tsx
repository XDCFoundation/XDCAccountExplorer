import { useMemo } from 'react';
import styles from './rankingAccountResult.module.scss';

interface RankingAccountResultProps {
  account: string;
  transactions: number;
  balance: number;
}

function RankingAccountResult({ account, transactions, balance }: RankingAccountResultProps) {
  const accountShortened = useMemo(() => {
    const prefix = account.substring(0, 13);
    const suffix = account.substring(account.length - 10);
    return `${prefix}...${suffix}`;
  }, [account]);

  return (
    <div className="text-center mt-2 mb-3">
      <h4>
        {accountShortened}
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
          {balance.toLocaleString()}
          {' XDC'}
        </span>
      </div>
    </div>
  );
}

export default RankingAccountResult;
